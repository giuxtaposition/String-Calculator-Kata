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
    numbers.split(/(?<=\d)[, \n]+(?=\d)/).forEach(possibleNumber => {
      if (!isNaN(parseInt(possibleNumber))) {
        result.push(parseInt(possibleNumber))
      }
    })
    return result
  }

  private extractNumbersWithCustomDelimiter(numbers: string) {
    let result: number[] = []
    numbers
      .substr(4)
      .split(new RegExp('(?<=//).*(?=\\n)').exec(numbers)![0])
      .forEach(possibleNumber => {
        if (!isNaN(parseInt(possibleNumber))) {
          result.push(parseInt(possibleNumber))
        }
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
