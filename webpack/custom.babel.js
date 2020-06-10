/**
 * @prettier
 */

import configBuilder from "./_config-builder"

const result = configBuilder(
  {
    minimize: true,
    mangle: true,
    sourcemaps: true,
  },
  {
    entry: {
      "swagger-ui-custom-layout": ["./src/custom-layout/index.js"],
    },

    output: {
      library: "CustomLayoutPlugin",
    },
  }
)

export default result
