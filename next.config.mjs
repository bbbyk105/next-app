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
    disableLogger: true,
    automaticVercelMonitors: true,
    authToken: process.env.SENTRY_AUTH_TOKEN,
};

// 環境変数の値をログに出力
if (process.env.SENTRY_AUTH_TOKEN) {
    console.log('Sentry Auth Token:', process.env.SENTRY_AUTH_TOKEN);
} else {
    console.warn('Sentry Auth Token is not defined');
}

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
