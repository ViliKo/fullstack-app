
import globals from "globals";
import pluginJs from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier"

export default [
 {
   files: ["**/*.js"],
   languageOptions: {
     sourceType: "commonjs",
     globals: globals.node,
  },
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    // ESLint rules
    "no-var": "error", // Disallow use of var
    eqeqeq: "error", // Prefer const over let where possible
    "no-unused-vars": "warn", // Warn on unused variables
    "prefer-const": "error", // Prefer const over let where possible
    "no-else-return": "error", // Disallow return before else
    curly: "error", // Enforce consistent brace style
   "no-multiple-empty-lines": ["error", { max: 1 }], // Limit multiple empty lines
   camelcase: "error", // Enforce camelCase naming
   "no-eval": "error", // Disallow eval()

  // Prettier rule integration
  "prettier/prettier": "error",
  },
},
pluginJs.configs.recommended,
prettierConfig,
];