"use strict";

class Timer 
{
    _timer;

    constructor(template = 'h:m:s') {
        this.template = template;
    }

    render() 
    {
        let date = this.getDateParts(new Date());
        let output = this.template
            .replace('h', date.h)
            .replace('m', date.m)
            .replace('s', date.s);
        this.printOutput(output);
    }

    getDateParts(date) 
    {
        return {
            h: this.formatTime(date.getHours()),
            m: this.formatTime(date.getMinutes()),
            s: this.formatTime(date.getSeconds())
        }
    }

    formatTime(timePart) 
    {
        return timePart.toString().padStart(2, '0');
    }

    printOutput(output) 
    {
        console.clear();
        console.log(output);
    }

    start() 
    {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

    stop() 
    {
        console.log('stop interval: ' + this.timer);
        clearInterval(this.timer);
    }
}


/** ===== Usage ===== */

let clock = new Timer();
clock.start();
setTimeout(() => clock.stop(), 10000);
