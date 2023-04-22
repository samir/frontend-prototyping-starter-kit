module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // project: "./tsconfig.json",
    // tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["svelte3", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  root: true,
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  ignorePatterns: ["*.cjs"],
  overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
  settings: {
    "svelte3/typescript": () => require("typescript"),
  },
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": 1,
    // "no-loops/no-loops": 2,
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": { "consistent": true, "multiline": true },
        "ObjectPattern": { "consistent": true, "multiline": true },
        "ImportDeclaration": "never",
        "ExportDeclaration": { "multiline": true, "minProperties": 3 }
      }
    ]
  },

}
