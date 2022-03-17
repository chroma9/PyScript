class PyScriptError extends Error {
    constructor(message) {
        super(message);
        this.name = ('PyScriptError');
    }
}
