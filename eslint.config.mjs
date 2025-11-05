import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
    js.configs.recommended,
    {
        files: [ "**/*.js", "**/*.jsx", ],
        ignores: ["node_modules/**", "dist/**", "build/**"],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node, },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
    prettier,
];

