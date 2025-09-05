import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        // Get the callback payload from OnePay
        const callbackData = await request.json();
        
        console.log('OnePay Callback Received:', callbackData);
        
        const { transaction_id, status, status_message, additional_data, reference } = callbackData;
        
        // Verify the transaction was successful
        if (status === 1 && status_message === 'SUCCESS') {
            console.log('Payment successful for transaction:', transaction_id, 'Reference:', reference);
            
            // Store the successful transaction data using reference as key (with fallback to transaction_id)
            // We'll use a simple in-memory store for now (in production, use a database)
            global.successfulTransactions = global.successfulTransactions || new Map();
            
            const trackingKey = reference || transaction_id;
            global.successfulTransactions.set(trackingKey, {
                transaction_id,
                reference,
                status,
                status_message,
                additional_data,
                timestamp: new Date().toISOString(),
                processed: false
            });
            
            // Set expiry for the transaction data (clean up after 10 minutes)
            setTimeout(() => {
                if (global.successfulTransactions) {
                    global.successfulTransactions.delete(trackingKey);
                }
            }, 10 * 60 * 1000); // 10 minutes
            
            console.log('Transaction stored successfully with key:', trackingKey);
            
            return NextResponse.json({ 
                success: true, 
                message: 'Callback processed successfully' 
            });
        } else {
            console.log('Payment failed for transaction:', transaction_id, 'Status:', status_message);
            
            return NextResponse.json({ 
                success: false, 
                message: 'Payment was not successful' 
            });
        }
    } catch (error) {
        console.error('Error processing OnePay callback:', error);
        
        return NextResponse.json({ 
            success: false, 
            message: 'Error processing callback' 
        }, { status: 500 });
    }
}

// Handle GET requests for testing
export async function GET() {
    return NextResponse.json({ 
        message: 'OnePay callback endpoint is active',
        timestamp: new Date().toISOString()
    });
}
