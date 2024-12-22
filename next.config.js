module.exports = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/da-resume/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/da-resume' : '',
}; 