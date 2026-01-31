module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@core': './core',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@assets': './src/assets',
          '@themes': './src/themes',
          '@elements': './src/elements',
          '@utils': './src/utils',
          '@actions': './src/actions',
          '@contexts': './src/contexts',
          '@navigation': './src/navigation',
          '@constants': './src/constants',
          '@api': './src/api',
          '@types': './src/types',
        },
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
      },
      'react-native-worklets/plugin',
    ],
  ],
};
