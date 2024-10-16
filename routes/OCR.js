const Tesseract = require('tesseract.js');
const path = require('path');

// const filePath = '../upload/0dbcd04988f52a6ad3784dc1e1157f7d';

const OCR = (filePath) => {
  return Tesseract.recognize(
    // 'https://tesseract.projectnaptha.com/img/eng_bw.png',
    // '/Users/zcy1/Documents/doc/myApp/public/images/pure-en.jpg',
    // `${__dirname}/public/images/fapng.jpg`,
    path.resolve(__dirname, filePath),
    // '../upload/0dbcd04988f52a6ad3784dc1e1157f7d',
    // 'eng',
    'eng+chi_tra',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    console.log(text);
    return text;
  })
}

module.exports = OCR;
