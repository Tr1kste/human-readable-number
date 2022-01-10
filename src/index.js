module.exports = function toReadable(number) {
    let single = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let ty = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const convertToHundreds = (number) => {
        if (number < 10) return single[number];
        if (number >= 10 && number < 20) return teen[number - 10];
        if (number >= 20 && number < 100) {
            const red = `${ty[Math.floor(number / 10) - 2]} ${single[number % 10]}`;
            return red.replace(/\s$/, '');
        }
    }

    if (number < 100 && number !== 0) {
        return convertToHundreds(number);
    }

    if (number >= 100) {
        const blue = `${single[Math.floor(number / 100)]} ${'hundred'} ${convertToHundreds(number % 100)}`;
        return blue.replace(/\s$/, '');
    }
    if (number === 0) { return 'zero' };
}