/** Using function */
// const CheckElement = async selector => {
//     while (document.querySelector(selector) === null) {
//         await new Promise(resolve => requestAnimationFrame(resolve))
//     }
//     return document.querySelector(selector);
// };

/** Using Class */
class CheckElement 
{
    static async check(selector)
    {
        while (document.querySelector(selector) === null) {
            await new Promise(resolve => requestAnimationFrame(resolve))
        }
        return document.querySelector(selector);
    }
}

export default CheckElement;
