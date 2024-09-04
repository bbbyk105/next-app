"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";

interface GlobalErrorProps {
  error: {
    message: string;
    statusCode: number; 
  };
}

export default function GlobalError({ error }: GlobalErrorProps) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error statusCode={error.statusCode} /> {/* statusCodeを渡す */}
      </body>
    </html>
  );
}