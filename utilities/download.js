const request = require('request');
const fs = require('fs');

async function download(url, dest) {
    /* Create an empty file where we can save data */
    const file = fs.createWriteStream(dest);

    /* Using Promises so that we can use the ASYNC AWAIT syntax */
    await new Promise((resolve, reject) => {
        request({
            /* Here you should specify the exact link to the file you are trying to download */
            uri: url,
            gzip: true,
        })
            .pipe(file)
            .on('finish', async () => {
                console.log(`The file is finished downloading: ${dest}`);
                resolve();
            })
            .on('error', (error) => {
                reject(error);
            });
    })
        .catch((error) => {
            console.log(`Something happened: ${error}`);
        });
}

module.exports = download;
