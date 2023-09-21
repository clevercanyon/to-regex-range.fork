/**
 * Node prepended `--require`.
 *
 * @note PLEASE DO NOT EDIT THIS FILE!
 * @note This entire file will be updated automatically.
 * @note Instead of editing here, please review <https://github.com/clevercanyon/skeleton>.
 */

const originalEmitter = process.emit; // Original emitter.

/**
 * Filters Node warnings.
 */
process.emit = (event, error) => {
    if ('warning' === event && error instanceof Error && 'ExperimentalWarning' === error.name && error.message) {
        if (error.message.includes('Web Crypto API algorithm is an experimental feature')) {
            return false; // Web Crypto is a thing. Ok to suppress.
        }
        if (
            error.message.includes('Import assertions are not a stable feature') || //
            error.message.includes('Importing JSON modules is an experimental feature')
        ) {
            return false; // JSON imports are a thing. Ok to suppress.
        }
    }
    return originalEmitter.apply(process, [event, error]);
};
