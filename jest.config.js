module.exports = {
  roots: [
      "<rootDir>/lib",
      "<rootDir>/__tests__"
  ],
  testRegex: "(/__tests__/.*.(test|spec)).(js)$",
  moduleFileExtensions: [
      "js",
      "json",
      "node"
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
      "(tests/.*.mock).(jsx?|tsx?)$"
  ],
  verbose: true
};