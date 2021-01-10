"use strict";

const DECIMAL_REDIX = 10;

class Factorial
{
    /** @var _factor Factorial factor to calculate */
    _factor;

    /** @var _factors Array list of all numbers to caluclate */
    _factors;

    _showFactors;

    /**
     * @param {integer} factor 
     * @param {string} glue
     */
    constructor({factor, showFactors = false, glue = ' x '})
    {
        this.factor      = factor;
        this.glue        = glue;
        this.showFactors = showFactors;
    }

    /**
     * @param {number} factor
     */
    set factor(value)
    {
        if (value === undefined) {
            console.error("Please define factorial factor number, it'required!");
            return false;
        }

        let factor = Number.parseInt(value, DECIMAL_REDIX);
        if (factor <= 0) {
            console.error(
                `Factor number must be a positive integer greater than zero. Input number: ${value}`
            );
        }

        this._factor  = factor;

        /** Reset factors array list to recalculate it again after new factor set */
        this._factors = undefined;
    }

    /**
     * @return {integer}
     */
    get factor()
    {
        return this._factor;
    }

    /**
     * @return {array}
     */
    get factors()
    {
        if (!this._factors) {
            this._factors = this.getFactorsArray();
        }

        return this._factors;
    }

    /**
     * Array based with built in functions
     */
    arrayCalculate()
    {
        let factors   = this.factors,
            factorial = factors.reduce((val, next) => val * next);

        this.printFactors();
        console.log(factorial);

        return factorial;
    }

    /**
     * Calculate with loop
     */
    loopCalculate()
    {
        let factorial = 1;
        for (let i = this.factor; i > 0; --i) {
            factorial *= i;
        }

        this.printFactors();
        console.log(factorial);

        return factorial;
    }

    /**
     * Calculate recursive in param
     * 
     * @param {integer} value 
     */
    recursiveCalcWithParam(value)
    {
        if (value <= 1) {
            this.printFactors();

            return 1;
        }

        return this.recursiveCalcWithParam(value - 1) * value; 
    }

    /**
     * Calculate recursive with no param
     */
    recursiveCalculate()
    {
        if (!this.counter) {
            this.counter = this.factor;
        }

        if (this.counter <= 1) {
            this.counter = undefined;
            this.printFactors();

            return 1;
        }

        let number    = this.counter;
        this.counter -= 1;

        return this.recursiveCalculate() * number;
    }

    getFactorsArray()
    {
        let factor  = this.factor,
            factors = [...Array(++factor).keys()];
        
        factors.reverse().pop();

        return factors;
    }

    printFactors()
    {
        let sign = `${this.factor}!`;
        if (!this.showFactors) {
            console.log(sign);
            return;
        }

        let factors = this.factors, 
            str     = factors.join(this.glue),
            output  = `${sign}: ${str}`;
        
        console.log(output);

        return this;
    }

    printLine()
    {
        console.log('-'.repeat(80));

        return this;
    }
}


/** ===== Usage ===== */

// let factorial = new Factorial({factor: 5, glue: ' * '});
let factorial = new Factorial({factor: 500, showFactors: false});

// warm up
factorial.arrayCalculate();
factorial.loopCalculate();
factorial.recursiveCalcWithParam(factorial.factor);
factorial.recursiveCalculate();
factorial.printLine();

// benchmark
console.time('arrayCalculate');
factorial.arrayCalculate();
console.timeEnd('arrayCalculate');
factorial.printLine();

console.time('loopCalculate');
factorial.loopCalculate();
console.timeEnd('loopCalculate');
factorial.printLine();

console.time('recursiveCalcWithParam');
console.log(factorial.recursiveCalcWithParam(factorial.factor));
console.timeEnd('recursiveCalcWithParam');
factorial.printLine();

console.time('recursiveCalculate');
console.log(factorial.recursiveCalculate());
console.timeEnd('recursiveCalculate');
factorial.printLine();

// use cases
factorial.factor = 6;
console.log(factorial.recursiveCalculate());
factorial.printLine();

factorial.factor = '4.8';
factorial.loopCalculate();
factorial.printLine();

factorial.factor = '-4.5';
factorial.arrayCalculate();
factorial.printLine();
