import '@testing-library/jest-dom/vitest' 
import { cleanup } from '@testing-library/react'
import { afterEach } from 'node:test'

afterEach(() => {
  cleanup()
})