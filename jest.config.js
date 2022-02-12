/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm:['.ts'],
  moduleDirectories: ['node_modules', 'composables'],
  globals: {
    'ts-jest': {
      "useESM": true,
    }
  }
};