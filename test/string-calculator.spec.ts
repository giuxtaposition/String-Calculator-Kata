import { expect } from 'chai'
import { StringCalculator } from '../src/index'

// - [ ] int add(String numbers)
// - [x] add with zero numbers
// - [x] add with 1 number
// - [x] add with 2 numbers
// - [x] add with multiple numbers
// - [x] extract numbers from string
// - [x] sum numbers from array of numbers
// - [x] handle new lines between numbers
// - [x] support different delimiters
// - [x] throw error for negative numbers
// - [x] if multiple negative numbers, show all of the in the exception message
// - [ ] ignore big numbers

describe('add numbers in string ', () => {
  it('no numbers', () => {
    const string: string = ''
    const stringCalculator = new StringCalculator()
    expect(stringCalculator.add(string)).to.equal(0)
  })

  it('one number', () => {
    const string: string = '1'
    const stringCalculator = new StringCalculator()
    expect(stringCalculator.add(string)).to.equal(1)
  })

  it('two numbers', () => {
    const string: string = '1,2'
    const stringCalculator = new StringCalculator()
    expect(stringCalculator.add(string)).to.equal(3)
  })

  it('multiple numbers', () => {
    const string: string = '10,2,4,3'
    const stringCalculator = new StringCalculator()
    expect(stringCalculator.add(string)).to.equal(19)
  })

  it('multiple numbers with new lines', () => {
    const string: string = '1\n21,3'
    const otherString: string = '1,\n'
    const stringCalculator = new StringCalculator()
    expect(stringCalculator.add(string)).to.equal(25)
    expect(stringCalculator.add(otherString)).to.equal(1)
  })

  it('support different delimiters', () => {
    const string: string = '//;\n1;23'
    const stringCalculator = new StringCalculator()
    expect(stringCalculator.add(string)).to.equal(24)
  })

  it('throw error for negative number', () => {
    const string: string = '1,4,-1'
    const stringCalculator = new StringCalculator()
    expect(stringCalculator.add.bind(stringCalculator, string)).to.throw(
      'negatives not allowed: -1'
    )
  })

  it('throw error for multiple negative numbers', () => {
    const string: string = '1,-4,-1'
    const stringCalculator = new StringCalculator()
    expect(stringCalculator.add.bind(stringCalculator, string)).to.throw(
      'negatives not allowed: -4,-1'
    )
  })

  it('ignore big numbers', () => {
    const string: string = '1001, 2'
    const stringCalculator = new StringCalculator()
    expect(stringCalculator.add(string)).to.equal(2)
  })
})
