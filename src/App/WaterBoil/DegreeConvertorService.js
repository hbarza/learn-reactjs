class DegreeConvertorService
{
    static margin = 32;
    static fahrenheitFactor = 9/5;
    static celsiusFactor = 5/9;
    static roundPlaces = 100;

    static toFahrenheit(celsius)
    {
        return this.round(
            celsius * this.fahrenheitFactor + this.margin
        );
    }

    static toCelsius(fahrenheit)
    {
        return this.round(
            (fahrenheit - this.margin) * this.celsiusFactor
        );
    }

    static round(number)
    {
        // to ensure things like 1.005 round correctly, we use Number.EPSILON
        // @link https://stackoverflow.com/a/11832950
        // @link https://stackoverflow.com/a/41716722
        return Math.round((number + Number.EPSILON) * this.roundPlaces) / this.roundPlaces;
    }
}

// a suefull round function
// @link https://stackoverflow.com/a/19722641
// Number.prototype.round = function (places) {
//     // this is the number here
//     let number = this;
//     return +(Math.round(number + "e+" + places) + "e-" + places);
// }
// return number.ruond(2);

export default DegreeConvertorService;
