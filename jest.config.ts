export default {
  roots: ['<rootDir>/src', '<rootDir>/test'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts', 
  ],
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  coverageProvider: 'v8',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    'Protocol',
    '.d.ts',
  ]
}
