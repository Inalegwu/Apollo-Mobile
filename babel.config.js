module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@state": "./src/state/index.ts",
            "@app": "./src/api/app.ts",
            "@components": "./src/components/index.ts",
            "@utils": "./utils/*",
            "@atoms": "./src/components/atoms/index.ts",
          },
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
        },
      ],
    ],
  };
};
