module.exports = {
  "roots": [
    "<rootDir>/typescript"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts.tsx)$": "ts-jest"
  },
}
