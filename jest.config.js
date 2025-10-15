// jest.config.js
module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text"],
  testMatch: ["**/tests/**/*.test.js"],
};
