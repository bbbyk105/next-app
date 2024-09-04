import { NextResponse } from "next/server";
import * as Sentry from "@sentry/node"; // Sentryをインポート

// Sentryの初期化
Sentry.init({
  dsn: "https://178ff6485ea59d6b4cf58026c9380c69@o4507888883859456.ingest.us.sentry.io/4507888887201792", // ここにDSNを入力
});

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    throw new Error("Sentry Example API Route Error");
    return NextResponse.json({ data: "Testing Sentry Error..." });
  } catch (error) {
    Sentry.captureException(error); 
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}