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
    numbers.split(/[, \n]/).forEach(possibleNumber => {
      this.buildNumberArray(possibleNumber, result)
    })
    return result
  }

  private buildNumberArray(possibleNumber: string, array: number[]) {
    if (!isNaN(parseInt(possibleNumber))) {
      if (parseInt(possibleNumber) >= 0) {
        array.push(parseInt(possibleNumber))
      } else {
        throw new Error(`negatives not allowed: ${possibleNumber}`)
      }
    }
  }

  private extractNumbersWithCustomDelimiter(numbers: string) {
    let result: number[] = []
    numbers
      .substr(4)
      .split(new RegExp('(?<=//).*(?=\\n)').exec(numbers)![0])
      .forEach(possibleNumber => {
        this.buildNumberArray(possibleNumber, result)
      })

    return result
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
