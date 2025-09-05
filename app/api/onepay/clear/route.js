import { NextResponse } from 'next/server';

export async function POST() {
    try {
        // Clear all transactions
        global.successfulTransactions = new Map();
        
        
        return NextResponse.json({
            success: true,
            message: 'All transaction data cleared'
        });
    } catch (error) {
        console.error('Error clearing data:', error);
        
        return NextResponse.json({ 
            success: false, 
            message: 'Error clearing data' 
        }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({
        message: 'Use POST to clear all transaction data'
    });
}
