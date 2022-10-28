module.exports = {
  extends: ["next", "turbo", "prettier"],
  plugins: ["simple-import-sort", "import"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "import/export": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // `react` first, `next` second, then packages starting with a character
          [
            "^react$",
            "^next",
            "^[a-z]",
            // All monorepo internal packages
            "^@krubb",
            // Packages starting with `@`
            "^@",
            // Packages starting with `~`
            "^~",
          ],
          // Imports starting with `../`
          [
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            // Imports starting with `./`
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$",

            // Side effect imports
            "^\\u0000",
          ],
          // Style imports
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
