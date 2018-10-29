module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: ["<rootDir>/src/index.tsx"],
  preset: "ts-jest",
  testEnvironment: "node",
};
