module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/da-resume/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/da-resume' : '',
}; 