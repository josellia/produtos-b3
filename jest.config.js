module.exports = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  modulePathIgnorePatterns: [],
  testPathIgnorePatterns: ['/node_modules/', '/src/environments/','/e2e/.*/__tests__', '\\.snap$', "/src/app/main.ts"],
};
