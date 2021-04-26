const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')

module.exports = withCSS(withLess(withImages(withSass({
  env: {
    PROJECT_ID: "sasari-site",
    PICTURE_URL: "http://localhost:3000/products"
  },
  devIndicators: {
    autoPrerender: false,
  }
}))))
