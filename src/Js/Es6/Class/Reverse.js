"use strict";

class Reverse extends String
{
    reverse = function () 
    {
        return this.split('').reverse().join('');
    }
}

Object.assign(String.prototype, new Reverse());


/** ===== Usage ===== */

console.log('Hello New ES6 World!'.reverse());
