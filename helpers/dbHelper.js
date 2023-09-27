const fs = require("fs/promises");

const readFromFile = (destination) => {
    return fs.readFile(destination, 'utf8')
}

const writeToFile = (destination, content) => {
    return fs.writeFile(destination, JSON.stringify(content, null, 2));
};

const readAndAppend = async (destination, content) => {
        const data = await readFromFile(destination);
        console.info(`\nData read from ${destination}`)
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        await writeToFile(destination, parsedData);
        console.info(`\nData written to ${destination}`)
}

module.exports = { readFromFile, writeToFile, readAndAppend };
