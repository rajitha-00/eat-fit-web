import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const successfulTransactions = global.successfulTransactions || new Map();
        
        return NextResponse.json({
            success: true,
            transactions: Array.from(successfulTransactions.entries()).map(([key, value]) => ({
                key,
                transaction_id: value.transaction_id,
                reference: value.reference,
                status: value.status,
                status_message: value.status_message,
                timestamp: value.timestamp,
                processed: value.processed
            })),
            count: successfulTransactions.size
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}
