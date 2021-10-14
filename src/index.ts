export class StringCalculator {
    add(numbers: string): number {
        return !numbers.length ? 0 : this.sumNumbers(numbers)
    }

    private extractNumbers(numbers: string): number[] {
        const result: number[] = []
        const delimiter = this.getDelimiter(numbers)

        this.removeDelimiter(numbers)
            .split(delimiter)
            .forEach(possibleNumber => {
                this.buildNumberArray(possibleNumber, result)
            })

        this.hasNegativeNumbers(result)

        return result
    }

    private hasNegativeNumbers(result: number[]) {
        const negativeNumbers = result.filter(number => number <= 0)
        if (negativeNumbers.length) {
            throw new Error(
                `negatives not allowed: ${negativeNumbers.toString()}`
            )
        }
    }

    private buildNumberArray(possibleNumber: string, array: number[]) {
        if (!isNaN(parseInt(possibleNumber))) {
            if (parseInt(possibleNumber) <= 1000) {
                array.push(parseInt(possibleNumber))
            }
        }
    }

    private removeDelimiter(numbers: string): string {
        return this.hasCustomDelimiter(numbers) ? numbers.substr(4) : numbers
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

    private getDelimiter(numbers: string): string | RegExp {
        return new RegExp('(?<=//).*(?=\\n)').exec(numbers)?.[0] || /[, \n]/
    }
}
