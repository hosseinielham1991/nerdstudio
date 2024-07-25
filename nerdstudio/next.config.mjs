/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable full debugging
  devIndicators: {
    buildActivity: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/translate', // مسیر محلی که به آن درخواست ارسال می‌کنید
        destination: 'http://5.78.55.161:8000/v1/api/translates/generate_translate/', // مقصد واقعی API
      },
    ];
  },
};

export default nextConfig;
