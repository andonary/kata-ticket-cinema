export class CinemaTicketPricer {
    execute(initialPrice: number, customerAge: number) {
        if (customerAge < 10) throw new Error('Too young');
        if (customerAge > 25) return this.halfPrice(initialPrice);
        return this.reductionBasedOnAge(initialPrice, customerAge);
    }

    private halfPrice(initialPrice: number) {
        return Math.ceil(initialPrice / 2);
    }

    private reductionBasedOnAge(initialPrice: number, customerAge: number) {
        return Math.ceil(initialPrice / this.sumDigitNumber(customerAge));
    }

    private sumDigitNumber(customerAge: number) {
        const allDigits: string[] = customerAge.toString().split('');
        return allDigits.reduce((acc, digit) => acc + Number(digit), 0);
    }
}
