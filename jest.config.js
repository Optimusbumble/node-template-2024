/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  // for testing typescript files with jest
  preset: "ts-jest",
  //Set env to node.js
  testEnvironment: "node",
  //define root directory for the tests and modules,
  roots: ["<rootDir>/tests"],
  //use ts-jest to transform Typescript files
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },

  // regular expression to find test files
  // testRegex:

  //File extensions to be recognized
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
