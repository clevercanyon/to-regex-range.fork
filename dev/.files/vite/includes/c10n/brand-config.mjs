/**
 * C10n brand plugin.
 *
 * Vite is not aware of this config file's location.
 *
 * @note PLEASE DO NOT EDIT THIS FILE!
 * @note This entire file will be updated automatically.
 * @note Instead of editing here, please review <https://github.com/clevercanyon/skeleton>.
 */

import { $json } from '../../../../../node_modules/@clevercanyon/utilities/dist/index.js';
import u from '../../../bin/includes/utilities.mjs';

/**
 * Configures Vite brand plugin.
 *
 * @param   props Props from vite config file driver.
 *
 * @returns       Plugin configuration.
 */
export default async (/* {} */) => {
    const virtualId = 'virtual:brand/config';
    const resolvedVirtualId = '\0' + virtualId;

    return {
        name: 'vite-plugin-c10n-brand-config',

        resolveId(id) {
            if (id === virtualId) {
                return '\0' + id;
            }
        },
        async load(id) {
            if (id === resolvedVirtualId) {
                return 'export default ' + $json.stringify(await u.brandConfig(), { pretty: true });
            }
        },
    };
};