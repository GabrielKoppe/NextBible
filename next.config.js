/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/nvi.gn.1',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
