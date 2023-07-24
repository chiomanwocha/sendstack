/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
    env: {
        BASE_URL: process.env.BASE_URL,
        APP_ID: process.env.APP_ID,
        APP_SECRET: process.env.APP_SECRET,
      },
}

module.exports = nextConfig
