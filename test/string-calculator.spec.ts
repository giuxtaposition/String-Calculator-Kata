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
// - [ ] support different delimiters

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
    const string: string = '1,2,4,3'
    const stringCalculator = new StringCalculator()
    expect(stringCalculator.add(string)).to.equal(10)
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
})
