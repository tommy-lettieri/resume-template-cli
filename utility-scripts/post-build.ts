#!/usr/bin/env -S npx ts-node

import fs from 'fs-extra';

const sleep = (millis: number) => new Promise(resolve => setTimeout(resolve, millis));

const defaultFileTypesSource = 'src/default-file-types';
const defaultFileTypesTarget = 'dist/default-file-types';
(async () => {
    console.log('Running post build');
    // For some reason it was failing because dist didn't exist, adding a slight wait
    await sleep(3000);
    // TSC doesn't copy over .d.ts files
    if (fs.existsSync(defaultFileTypesTarget)) {
        await fs.remove(defaultFileTypesTarget)
    }
    await fs.copy(defaultFileTypesSource, defaultFileTypesTarget);
})();