import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Restrict in production unless authenticated with admin key
    const isProd = process.env.NODE_ENV === "production";
    const authHeader = request.headers.get("x-admin-key") || request.headers.get("authorization");
    const adminKey = process.env.ADMIN_API_KEY;

    if (isProd && (!adminKey || authHeader !== adminKey && authHeader !== `Bearer ${adminKey}`)) {
      return NextResponse.json(
        { success: false, message: "Forbidden: debug endpoint is disabled in production" },
        { status: 403 }
      );
    }

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
        processed: value.processed,
      })),
      count: successfulTransactions.size,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
