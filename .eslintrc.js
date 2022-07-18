module.exports = {
  extends: ["wesbos/typescript"],
  rules: {
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
  },
  ignorePatterns: [".eslintrc.js", "./tailwind.config.js"],
};
