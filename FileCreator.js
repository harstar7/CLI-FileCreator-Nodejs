import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fileCreate = () => {
    rl.question("Enter the name of your file: ", (fileName) => {
        rl.question("Enter the content of your file: ", (content) => {
            fs.writeFile(`${fileName}.txt`, content, (err) => {
                if (err) {
                    console.error(`Error writing the file: ${err.message}`);
                } else {
                    console.log("File has been created successfully!");
                }
                rl.close(); // Close the interface here
            });
        });
    });
};

fileCreate();