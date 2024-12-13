/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import nextJest from 'next/jest.js'
import type { Config } from 'jest'

const createJestConfig = nextJest({
    dir: './',
})

const config: Config = {
    verbose: true,
    moduleNameMapper: {
        '^@/components/(.*)$': ['<rootDir>/src/srctions/components/$1'],
        '^@/provider/(.*)$': ['<rootDir>/src/srctions/provider/$1'],
        '^@/shared/(.*)$': ['<rootDir>/src/shared/$1'],
        '^@/modules/(.*)$': ['<rootDir>/src/modules/$1'],
    },
    coverageProvider: 'v8',
    collectCoverage: true,
    testEnvironment: 'jsdom',
    clearMocks: true,
}

export default createJestConfig(config)
