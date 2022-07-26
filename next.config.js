const path = require("path");

module.exports = {
	reactStrictMode: true,

	sassOptions: {
		includePaths: [path.join(__dirname, "css")],
	},
	trailingSlash: true,
	devIndicators: {
		buildActivity: false,
	},
	eslint: {
		ignoreDuringBuilds: false,
	},
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({ })
module.exports = {
	experimental: {
		images: {
			allowFutureImage: true,
		},

	},
};
