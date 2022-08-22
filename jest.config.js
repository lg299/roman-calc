module.exports = {
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "roots": ["<rootDir>/src"],
  "testEnvironment": "node",
  "testRegex": "(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
};
