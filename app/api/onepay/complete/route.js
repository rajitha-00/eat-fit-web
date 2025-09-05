import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { reference, transaction_id } = await request.json();
        
        if (!reference && !transaction_id) {
            return NextResponse.json({ 
                success: false, 
                message: 'Reference or transaction ID is required' 
            }, { status: 400 });
        }
        
        // Mark transaction as processed
        const successfulTransactions = global.successfulTransactions || new Map();
        const trackingKey = reference || transaction_id;
        const transaction = successfulTransactions.get(trackingKey);
        
        if (transaction) {
            transaction.processed = true;
            transaction.orderCreated = true;
            transaction.orderCreatedAt = new Date().toISOString();
            
            
            return NextResponse.json({
                success: true,
                message: 'Transaction marked as processed'
            });
        } else {
            return NextResponse.json({
                success: false,
                message: 'Transaction not found'
            });
        }
        
    } catch (error) {
        console.error('Error marking transaction as processed:', error);
        
        return NextResponse.json({ 
            success: false, 
            message: 'Error processing request' 
        }, { status: 500 });
    }
}
