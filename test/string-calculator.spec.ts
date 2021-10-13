import { expect } from 'chai'
import { StringCalculator } from '../src/index'

/*
[] int add(String numbers)
The string argument can contain 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example "" or "1" or "1,2"
*/

describe('add numbers in string ', function () {
  it('no numbers', () => {
    const string: string = ''
    const stringCalculator = new StringCalculator()
    expect(stringCalculator.add(string)).to.equal(0)
  })
})
