module.exports = {
  // 转义
  transform: {
    "^.+\\js$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
};
