'use strict';
let Helper = codecept_helper;
const output = require('codeceptjs').output;
const {PNG} = require('pngjs');
const fs = require('fs');
const pixelmatch = require('pixelmatch');

class VisualHelper extends Helper {

    constructor(config) {
        super(config);
    }

    async takeScreenshot(fileName) {
        return this.helpers['Protractor'].browser.takeScreenshot().then(s => {
            // check if we're doing a base screenshot run for reference
            let path = this.config.runType === 'base' ? this.config.baseFolder : this.config.currentFolder;
            let stream = fs.createWriteStream(path + fileName + '.png');
            stream.write(new Buffer(s, 'base64'));
            stream.end();
            output.print(fileName + '.png screenshot saved');
            return true;
        });
    }

    createReport(fileName, diff) {
        const reportCurrentImage = this.config.reportFolder + fileName + '-current.png';
        const reportBaseImage = this.config.reportFolder + fileName + '-base.png';
        const reportDiffImage = this.config.reportFolder + fileName + '-diff.png';

        if (!fs.existsSync(this.config.reportFolder)) {
            fs.mkdirSync(this.config.reportFolder);
        }

        // copy base/current screenshots to the report folder
        fs.createReadStream(this.config.currentFolder + fileName + '.png').pipe(fs.createWriteStream(reportCurrentImage));
        fs.createReadStream(this.config.baseFolder + fileName + '.png').pipe(fs.createWriteStream(reportBaseImage));
        // create a diff image and save to dir
        diff.pack().pipe(fs.createWriteStream(reportDiffImage));

        return reportDiffImage;
    }

    async compareImage(fileName) {
        let img1 = await this.parseImage(this.config.baseFolder + fileName + '.png');
        let img2 = await this.parseImage(this.config.currentFolder + fileName + '.png');
        return new Promise((resolve, reject) => {
            output.print('here');
            const diff = new PNG({width: img1.width, height: img1.height});
            const imageMismatch = pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, {threshold: 0.1,});
            if (imageMismatch) {
                output.print(fileName + '.png image comparison failed');
                const reportDiffImage = this.createReport(fileName, diff);
                // if the images don't match reject the promise and fail the test
                reject(new Error(fileName + ' screen comparison failed. Diff at: ' + reportDiffImage));
            }
            resolve(true);
        });
    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async parseImage(filePath) {
        return new Promise((resolve, reject) => {
            let img = fs.createReadStream(filePath).pipe(new PNG());
            img.on('parsed', () => {
                resolve(img);
            })
        });
    }
}

module.exports = VisualHelper;
