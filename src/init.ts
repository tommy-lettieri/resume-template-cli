import fs from 'fs';
import path from 'path';

export const init = async () => {
    console.log('Running init');
    try {
        const defaultFilesDir = path.join(__dirname, '../assets/default-files');
        const targetDir = path.resolve('public/resume-template-files');

        if (!fs.existsSync(targetDir)) {
            await fs.promises.mkdir(targetDir);
        }
        const defaultFileNames = await fs.promises.readdir(defaultFilesDir);
        const promises = defaultFileNames.map(async (defaultFileName) => {
            const defaultFilePath = path.join(defaultFilesDir, defaultFileName);
            const targetPath = path.join(targetDir, defaultFileName);
            // console.log(`${defaultFilePath} ==> ${targetPath}`);
            if(fs.existsSync(targetPath)) {
                console.warn(`${targetPath} already exists, skipping. Delete and run again to regenerate`);
            } else {
                await fs.promises.copyFile(defaultFilePath, targetPath);
            }
        });
        await Promise.all(promises);
    } catch (e) {
        console.error('Failed to init', e);
    }
    console.log('Init finished running');
};
