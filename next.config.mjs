import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    }
};

const sentryWebpackPluginOptions = {
    org: "gakushuin-univ",
    project: "javascript-nextjs",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    reactComponentAnnotation: {
        enabled: true,
    },
    hideSourceMaps: true,
    disableLogger: false,
    automaticVercelMonitors: true,
    authToken: process.env.SENTRY_AUTH_TOKEN,
    SENTRY_URL: process.env.SENTRY_URL || 'https://sentry.io',
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
