
declare global {
    /**
     * Read a line from stdin
     */
    function readline(): string;

    /**
     * Print a string to stdout
     * @deprecated Use console.log instead
     */
    function print(word: string): void;
}

// It needs to be a module
export { }
