import { createRequire } from 'module';
import fs from 'fs';
const require = createRequire(import.meta.url);
try {
    require.resolve('@tailwindcss/postcss');
    fs.writeFileSync('install_check.txt', 'exists');
} catch (e) {
    fs.writeFileSync('install_check.txt', 'missing');
}
