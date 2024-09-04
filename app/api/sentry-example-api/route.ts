import { NextResponse } from "next/server";
import * as Sentry from "@sentry/node"; // Sentryをインポート

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export async function GET() {
  try {
    throw new Error("Sentry Example API Route Error");
    return NextResponse.json({ data: "Testing Sentry Error..." });
  } catch (error) {
    Sentry.captureException(error); // エラーをSentryに送信
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}