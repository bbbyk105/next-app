import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://178ff6485ea59d6b4cf58026c9380c69@o4507888883859456.ingest.us.sentry.io/4507888887201792",
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "system",
    }),
  ],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});