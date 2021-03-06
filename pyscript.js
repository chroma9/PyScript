class PyScriptError extends Error {
    constructor(message) {
        super(message);
        this.name = ('PyScriptError');
    }
}
/**
 * Python's equivalent to "console.log"
 * @param value Value to print to console/terminal
 */
const print = function(value) {
    console.log(value);
}
/**
 * Convert String to Upper Case
 * @returns String
 */
String.prototype.upper = function() {
    return this.toUpperCase();
}
/**
 * Converts String to Lower Case
 * @returns String
 */
String.prototype.lower = function() {
    return this.toLowerCase();
}
/**
 * Capitalize the First Character in the String
 * @returns String
 */
String.prototype.capitalize = function() {
    var a = this.charAt(0).toUpperCase();
    var b = this.slice(1).toLowerCase();
    return (a + b);
}
