module.exports = function toReadable(number) {

    let lessThanTen = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let twelveToNinety = ['twelve', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) { return 'zero' };
    if (number < 10 && number !== 0) { return lessThanTen[number] };

    if (number >= 10 && number < 20) { return tenToNineteen[number - 10] };
    //else { return twelveToNinety[Math.floor(number / 10)] + " " + lessThanTen[number % 10] };
}
