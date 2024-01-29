import { writeFile } from 'fs';

const names = [
    //ARRAY OF NAMES GOES HERE
];

names.forEach(name => {
    const fileName = `${name.replace(/\s+/g, '_').replace(/[^\w-]/g, '')}.json`; // Replace spaces with underscores and remove special characters
    writeFile(fileName, JSON.stringify({}), (err) => {
        if (err) {
            console.error(`Error writing file ${fileName}:`, err);
        } else {
            console.log(`${fileName} was created successfully.`);
        }
    });
});
