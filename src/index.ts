export class StringCalculator {
  add(numbers: string): number {
    if (!numbers.length) {
      return 0
    } else if (numbers.length === 1) {
      return parseInt(numbers)
    } else {
      return this.sumNumbers(numbers)
    }
  }

  extractNumbers(numbers: string): number[] {
    let arrayOfNumbers: number[] = []
    Array.from(numbers).forEach(possibleNumber => {
      if (!isNaN(parseInt(possibleNumber))) {
        arrayOfNumbers.push(parseInt(possibleNumber))
      }
    })
    return arrayOfNumbers
  }

  sumNumbers(numbers: string): number {
    return this.extractNumbers(numbers).reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue
    )
  }
}
