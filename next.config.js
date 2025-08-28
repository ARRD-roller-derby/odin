module.exports = {
  output: 'standalone',
  images: {
    domains: [
      `${process.env.S3_BUCKET}.${process.env.S3_DOMAIN}`,
      `njord--prod.${process.env.S3_DOMAIN}`,
      'arrd.s3.fr-par.scw.cloud'
    ],
  },
}
