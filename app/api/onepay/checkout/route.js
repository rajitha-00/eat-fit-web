import { NextResponse } from "next/server";
import crypto from "crypto";
import { ONEPAY_CONFIG } from "@/lib/config/onepay";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      amount,
      currency = "LKR",
      customer_details = {},
      additional_data = {},
      redirect_url,
    } = body;

    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      return NextResponse.json(
        { success: false, message: "Valid amount is required" },
        { status: 400 }
      );
    }

    const formattedAmount = Number(amount).toFixed(2);
    const appId = ONEPAY_CONFIG.APP_ID;
    const hashSalt = ONEPAY_CONFIG.HASH_SALT;
    const appToken = ONEPAY_CONFIG.APP_TOKEN;

    if (!appId || !hashSalt || !appToken) {
      return NextResponse.json(
        { success: false, message: "Payment gateway credentials not configured" },
        { status: 500 }
      );
    }

    // Format: app_id + currency + amount + hash_salt
    const hashInputString = `${appId}${currency}${formattedAmount}${hashSalt}`;
    const hash = crypto.createHash("sha256").update(hashInputString).digest("hex");

    const reference = `EAT-${Date.now()}`;
    const origin = request.nextUrl.origin || "https://eatfit.lk";

    const paymentPayload = {
      app_id: appId,
      reference,
      amount: Number(formattedAmount),
      currency,
      customer_first_name: customer_details.first_name || "Guest",
      customer_last_name: customer_details.last_name || "Customer",
      customer_email: customer_details.email || "guest@example.com",
      customer_phone_number: customer_details.phone_number || "+94771234567",
      transaction_redirect_url:
        redirect_url || `${origin}/checkout/success`,
      callback_url: `${origin}/api/onepay/callback`,
      additional_data: additional_data || {},
      hash,
    };

    const response = await fetch(ONEPAY_CONFIG.API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: appToken,
      },
      body: JSON.stringify(paymentPayload),
    });

    const result = await response.json();

    if (response.ok && result.status === 200) {
      return NextResponse.json({
        success: true,
        reference,
        redirect_url: result.data?.gateway?.redirect_url,
        data: result.data,
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: result.message || "Failed to initialize payment gateway",
        details: result,
      },
      { status: response.status || 400 }
    );
  } catch (error) {
    console.error("Error creating OnePay session:", error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Internal payment error",
      },
      { status: 500 }
    );
  }
}
