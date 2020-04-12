module.exports = {
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx}',
    '!**/src/store/index.js',
    '!**/src/pages/index.js',
    '!**/src/components/ProductSelect/index.js',
    '!**/src/pages/_app.js',
    '!**/build/**',
    '!**/buildZip/**',
    '!**/config/**',
    '!**/coverage/**',
    '!**/jsdoc/**',
    '!**/__fixtures__/**',
    '!**/__mocks__/**',
    '!**/__tests__/**',
    '!**/__snapshots__/**',
    '!**/node_modules/**',
    '!**/src/index.js',
    '!**/*.prop-types.js',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: [
    '**/*.(test|spec).(js)',
  ],
  globals: {
    'babel-jest': {
      useBabelrc: true,
      tsConfigFile: 'jest.tsconfig.json',
    },
  },
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'text-summary',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/mocks.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/style.js',
  },
  roots: [
    '<rootDir>',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  verbose: false,
};
