module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '*': '.',
            '@root': './',
            '@src': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@hooks': './src/hooks',
          },
        },
      ],
    ],
  };
};
