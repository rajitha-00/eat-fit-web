import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const transactionId = searchParams.get('transaction_id');
        const reference = searchParams.get('reference');
        
        if (!transactionId && !reference) {
            return NextResponse.json({ 
                success: false, 
                message: 'Transaction ID or reference is required' 
            }, { status: 400 });
        }
        
        // Check if we have a successful transaction with this ID or reference
        const successfulTransactions = global.successfulTransactions || new Map();
        
        // Try to find by reference first, then by transaction ID
        const trackingKey = reference || transactionId;
        const transaction = successfulTransactions.get(trackingKey);
        
        if (transaction && transaction.status === 1 && transaction.status_message === 'SUCCESS') {
            // Don't mark as processed immediately - allow multiple checks
            // Mark as processed only when the order is actually created
            console.log('Transaction found and verified:', trackingKey, {
                transaction_id: transaction.transaction_id,
                reference: transaction.reference,
                status: transaction.status
            });
            
            return NextResponse.json({
                success: true,
                transaction: {
                    transaction_id: transaction.transaction_id,
                    reference: transaction.reference,
                    status: transaction.status,
                    status_message: transaction.status_message,
                    additional_data: transaction.additional_data,
                    timestamp: transaction.timestamp
                }
            });
        }
        
        console.log('Transaction not found or not successful for key:', trackingKey);
        console.log('Available transactions:', Array.from(successfulTransactions.keys()));
        
        return NextResponse.json({
            success: false,
            message: 'Transaction not found or not successful'
        });
        
    } catch (error) {
        console.error('Error checking transaction status:', error);
        
        return NextResponse.json({ 
            success: false, 
            message: 'Error checking transaction status' 
        }, { status: 500 });
    }
}
