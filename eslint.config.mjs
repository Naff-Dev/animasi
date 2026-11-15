import { config } from "@remotion/eslint-config-flat";

export default [
  ...config,
  {
    files: ["src/social/**/*.{ts,tsx}", "src/viewer/**/*.ts"],
    rules: {
      "@remotion/warn-native-media-tag": "off",
      "@remotion/no-string-assets": "off",
    },
  },
];
