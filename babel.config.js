module.exports = {
  "presets": [
    "@vue/app"
  ],
  "ignore": [
    "./src/assets/mui/js/*.js"
  ],
  "plugins": [
    [
      "transform-imports",
      {
        "quasar": {
          "transform": "quasar/dist/babel-transforms/imports.js",
          "preventFullImport": true
        }
      }
    ]
  ]
}