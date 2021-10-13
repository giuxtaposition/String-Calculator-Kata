export class StringCalculator {
  add(numbers: string): number {
    if (!numbers.length) {
      return 0
    } else if (numbers.length === 1) {
      return parseInt(numbers)
    } else {
      return parseInt(numbers[0]) + parseInt(numbers[2])
    }
  }
}
