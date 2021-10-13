export class StringCalculator {
  add(numbers: string): number {
    if (!numbers.length) {
      return 0
    } else {
      return this.sumNumbers(numbers)
    }
  }

  private extractNumbers(numbers: string): number[] {
    return this.hasCustomDelimiter(numbers)
      ? this.extractNumbersWithCustomDelimiter(numbers)
      : this.extractNumbersWithDefaultDelimiter(numbers)
  }

  private extractNumbersWithDefaultDelimiter(numbers: string): number[] {
    let result: number[] = []
    let errors: number[] = []
    numbers.split(/[, \n]/).forEach(possibleNumber => {
      this.buildNumberArray(possibleNumber, result, errors)
    })
    if (errors.length) {
      throw new Error(`negatives not allowed: ${errors.toString()}`)
    }
    return result
  }

  private extractNumbersWithCustomDelimiter(numbers: string) {
    let result: number[] = []
    let errors: number[] = []
    numbers
      .substr(4)
      .split(new RegExp('(?<=//).*(?=\\n)').exec(numbers)![0])
      .forEach(possibleNumber => {
        this.buildNumberArray(possibleNumber, result, errors)
      })
    if (errors.length) {
      throw new Error(`negatives not allowed: ${errors.toString()}`)
    }
    return result
  }

  private buildNumberArray(
    possibleNumber: string,
    array: number[],
    errors: number[]
  ) {
    if (!isNaN(parseInt(possibleNumber))) {
      if (parseInt(possibleNumber) >= 0) {
        array.push(parseInt(possibleNumber))
      } else {
        errors.push(parseInt(possibleNumber))
      }
    }
  }

  private hasCustomDelimiter(numbers: string) {
    return new RegExp('//.\\n.*').test(numbers)
  }

  private sumNumbers(numbers: string): number {
    return this.extractNumbers(numbers).reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue
    )
  }
}
