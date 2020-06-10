var fs = require('fs');

class ExportFileFeature {

    deleteAlreadyDownloadedFiles = (function (fileName) {
        if (fs.existsSync(fileName)) {
            fs.unlink(fileName, function (err) {
                if (err) throw err;
                // if no error, file has been deleted successfully
                console.log('File deleted!');
            });
        }
        else {
            console.log('The file: ' + fileName + ' doesn\'t exist.')
        }
    });

    verifyFileDownload = (async function (fileName) {
        await browser.wait(async function () {
            return await fs.existsSync('./' + fileName);
        }, 30 * 1000, "File has not been downloaded within 30 seconds.")
    });
}

module.exports = new ExportFileFeature();
