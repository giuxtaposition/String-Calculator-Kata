export class StringCalculator {
  add(numbers: string): number {
    if (!numbers.length) {
      return 0
    } else {
      return this.sumNumbers(numbers)
    }
  }

  extractNumbers(numbers: string): number[] {
    let arrayOfNumbers: number[] = []

    if (new RegExp('//.\\n.*').test(numbers)) {
      const delimiter = new RegExp('(?<=//).*(?=\\n)').exec(numbers)![0]
      numbers
        .substr(4)
        .split(delimiter)
        .forEach(possibleNumber => {
          if (!isNaN(parseInt(possibleNumber))) {
            arrayOfNumbers.push(parseInt(possibleNumber))
          }
        })
    } else {
      numbers.split(/(?<=\d)[,; \n]+(?=\d)/).forEach(possibleNumber => {
        if (!isNaN(parseInt(possibleNumber))) {
          arrayOfNumbers.push(parseInt(possibleNumber))
        }
      })
    }

    return arrayOfNumbers
  }

  sumNumbers(numbers: string): number {
    return this.extractNumbers(numbers).reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue
    )
  }
}
