import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const isProd = process.env.NODE_ENV === "production";
    const authHeader = request.headers.get("x-admin-key") || request.headers.get("authorization");
    const adminKey = process.env.ADMIN_API_KEY;

    if (isProd && (!adminKey || (authHeader !== adminKey && authHeader !== `Bearer ${adminKey}`))) {
      return NextResponse.json(
        { success: false, message: "Unauthorized to clear transactions" },
        { status: 403 }
      );
    }

    // Clear all transactions
    global.successfulTransactions = new Map();

    return NextResponse.json({
      success: true,
      message: "All transaction data cleared",
    });
  } catch (error) {
    console.error("Error clearing data:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Error clearing data",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      message: "Forbidden: use authenticated POST to clear transaction data",
    },
    { status: 405 }
  );
}
