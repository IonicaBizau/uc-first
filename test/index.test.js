const ucFirst = require('../lib')

describe('Uppercase first character', () => {
  test('should uppercase first letter', async () => {
    const result = ucFirst('hello world')
    expect(result).toBe('Hello world')
  })

  test('should not change if first letter already uppercase', async () => {
    const result = ucFirst('Hello world')
    expect(result).toBe('Hello world')
  })

  test('should retain other uppercase letters', async () => {
    const result = ucFirst('hellO woRld')
    expect(result).toBe('HellO woRld')
  })

  test('should uppercase if only one letter', async () => {
    const result = ucFirst('h')
    expect(result).toBe('H')
  })

  test('should return empty string if input is number', async () => {
    const result = ucFirst(9)
    expect(result).toBe('')
  })

  test('should return empty string if input is undefined', async () => {
    const result = ucFirst(undefined)
    expect(result).toBe('')
  })

  test('should return empty string if input is null', async () => {
    const result = ucFirst(null)
    expect(result).toBe('')
  })

  test('should return empty string if no input', async () => {
    const result = ucFirst()
    expect(result).toBe('')
  })

  test('should not uppercase first letter if leading space', async () => {
    const result = ucFirst(' hello world')
    expect(result).toBe(' hello world')
  })

  test('should not uppercase first letter if leading special character', async () => {
    const result = ucFirst('!hello world')
    expect(result).toBe('!hello world')
  })
})
