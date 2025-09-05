'use client';
import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { ONEPAY_CONFIG } from '@/lib/config/onepay';
import { useCreateOrderMutation } from '@/lib/api/apiSlice';
import { clearCart } from '@/lib/api/cartSlice';

const PaymentSuccessContent = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const [status, setStatus] = useState('processing');
    const [message, setMessage] = useState('Verifying your payment...');
    const [createOrder] = useCreateOrderMutation();

    const handleManualConfirmation = async () => {
        try {
            setStatus('processing');
            setMessage('Processing your order...');
            
            // Get pending order data
            const pendingOrder = JSON.parse(sessionStorage.getItem('pendingOrder') || '{}');
            
            if (!pendingOrder.reference) {
                setStatus('error');
                setMessage('Order data not found. Please try placing your order again.');
                return;
            }
            
            // Create a mock transaction for manual confirmation
            const mockTransaction = {
                transaction_id: `MANUAL-${pendingOrder.reference}`,
                reference: pendingOrder.reference,
                status: 'SUCCESS',
                timestamp: new Date().toISOString()
            };
            
            // Store transaction details
            sessionStorage.setItem('paymentTransaction', JSON.stringify(mockTransaction));
            
            // Redirect to checkout with success status
            const checkoutUrl = new URL('/checkout', window.location.origin);
            checkoutUrl.searchParams.set('payment_status', 'success');
            checkoutUrl.searchParams.set('transaction_id', mockTransaction.transaction_id);
            checkoutUrl.searchParams.set('manual_confirmation', 'true');
            
            console.log('Manual confirmation - redirecting to checkout');
            window.location.href = checkoutUrl.toString();
            
        } catch (error) {
            console.error('Manual confirmation error:', error);
            setStatus('error');
            setMessage('Error processing manual confirmation. Please try again.');
        }
    };

    useEffect(() => {
        let pollInterval;
        let attempts = 0;
        const maxAttempts = 30; // Poll for 30 seconds (30 attempts * 1 second)
        
        const checkTransactionStatus = async () => {
            try {
                // Get transaction data from sessionStorage (stored before payment)
                const pendingOrder = JSON.parse(sessionStorage.getItem('pendingOrder') || '{}');
                
                if (!pendingOrder.reference) {
                    console.error('No reference found in pending order:', pendingOrder);
                    setStatus('error');
                    setMessage('Payment reference not found. Please contact support if payment was deducted.');
                    clearInterval(pollInterval);
                    return;
                }
                
                const reference = pendingOrder.reference;
                console.log(`[Attempt ${attempts + 1}] Checking transaction status for reference:`, reference);
                
                // Poll our API to check if OnePay has sent a callback
                const response = await fetch(`/api/onepay/status?reference=${reference}`);
                const result = await response.json();
                
                console.log('Transaction status check result:', result);
                
                if (result.success && result.transaction) {
                    console.log('Payment confirmed successful!', result.transaction);
                    clearInterval(pollInterval);
                    
                    // Redirect back to checkout page with success parameters
                    const checkoutUrl = new URL('/checkout', window.location.origin);
                    checkoutUrl.searchParams.set('payment_status', 'success');
                    checkoutUrl.searchParams.set('transaction_id', result.transaction.transaction_id);
                    
                    // Store transaction details in sessionStorage
                    const transactionDetails = {
                        transactionId: result.transaction.transaction_id,
                        reference: reference,
                        status: 'SUCCESS',
                        timestamp: result.transaction.timestamp,
                        callbackData: result.transaction
                    };
                    sessionStorage.setItem('paymentTransaction', JSON.stringify(transactionDetails));
                    
                    console.log('Redirecting to checkout with success parameters');
                    window.location.href = checkoutUrl.toString();
                    return;
                }
                
                attempts++;
                setMessage(`Verifying payment... (${attempts}/${maxAttempts})`);
                console.log(`Transaction status check attempt ${attempts}/${maxAttempts} - Result:`, result);
                
                if (attempts >= maxAttempts) {
                    clearInterval(pollInterval);
                    console.error('Transaction verification timeout after', maxAttempts, 'attempts');
                    setStatus('timeout');
                    setMessage('Payment verification timed out. If you completed the payment successfully, click "Confirm Payment" below.');
                }
                
            } catch (error) {
                console.error('Error checking transaction status:', error);
                attempts++;
                setMessage(`Connection error... (${attempts}/${maxAttempts})`);
                
                if (attempts >= maxAttempts) {
                    clearInterval(pollInterval);
                    setStatus('timeout');
                    setMessage('Unable to verify payment status automatically. If you completed the payment successfully, click "Confirm Payment" below.');
                }
            }
        };
        
        // Start polling immediately and then every second
        checkTransactionStatus();
        pollInterval = setInterval(checkTransactionStatus, 1000);
        
        // Cleanup on component unmount
        return () => {
            if (pollInterval) {
                clearInterval(pollInterval);
            }
        };
    }, [router, searchParams, dispatch, createOrder]);

    return (
        <FoodKingLayout footer={2} header={2}>
            <div className="container my-5 py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <div className={`alert ${
                            status === 'success' ? 'alert-success' :
                            status === 'error' ? 'alert-danger' :
                            status === 'timeout' ? 'alert-warning' :
                            'alert-info'
                        }`}>
                            <div className="mb-4">
                                {status === 'processing' && (
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                )}
                                {status === 'success' && (
                                    <i className="fas fa-check-circle text-success fa-3x"></i>
                                )}
                                {status === 'error' && (
                                    <i className="fas fa-times-circle text-danger fa-3x"></i>
                                )}
                                {status === 'timeout' && (
                                    <i className="fas fa-clock text-warning fa-3x"></i>
                                )}
                            </div>
                            <h2>{
                                status === 'success' ? 'Payment Successful!' :
                                status === 'error' ? 'Payment Failed' :
                                status === 'timeout' ? 'Payment Verification Timeout' :
                                'Processing Payment'
                            }</h2>
                            <p>{message}</p>
                            {status === 'success' && (
                                <p className="mt-3 text-muted">You will be redirected to the home page in 5 seconds.</p>
                            )}
                            {status === 'timeout' && (
                                <div className="mt-3">
                                    <button 
                                        className="btn btn-success me-2"
                                        onClick={handleManualConfirmation}
                                    >
                                        <i className="fas fa-check me-2"></i>
                                        Confirm Payment
                                    </button>
                                    <button 
                                        className="btn btn-secondary"
                                        onClick={() => router.push('/checkout')}
                                    >
                                        <i className="fas fa-arrow-left me-2"></i>
                                        Back to Checkout
                                    </button>
                                </div>
                            )}
                            {status === 'error' && (
                                <button 
                                    className="btn btn-primary mt-3"
                                    onClick={() => router.push('/checkout')}
                                >
                                    Try Again
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </FoodKingLayout>
    );
};

const PaymentSuccessPage = () => {
    return (
        <Suspense fallback={
            <FoodKingLayout footer={2} header={2}>
                <div className="container my-5 py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <div className="alert alert-info">
                                <div className="mb-4">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                <h2>Loading Payment Status</h2>
                                <p>Please wait while we verify your payment...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </FoodKingLayout>
        }>
            <PaymentSuccessContent />
        </Suspense>
    );
};

export default PaymentSuccessPage;
