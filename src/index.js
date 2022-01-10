module.exports = function toReadable(number) {
    let single = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let ty = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function convertToHundreds(number) {
        if (number < 10) return single[number];
        if (number >= 10 && number < 20) return teen[number - 10];
        if (number >= 20 && number < 100) return ty[Math.floor(number / 10) - 2] + " " + single[number % 10];
    }

    if (number >= 100) {
        return single[Math.floor(number / 100)] + " hundred " + convertToHundreds(number % 100);
    }
    if (number === 0) { return 'zero' };
}
