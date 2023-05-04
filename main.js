const fs = require('fs');
const { Transform } = require('stream');
const capitalLetter = new Transform({

  transform(chunk, encoding, callback) {
    const words = chunk.toString().split(' ');
    const capitalLettersWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalLettersChunk = capitalLettersWords.join(' ');
    callback(null, capitalLettersChunk);
  }
});

const readStream = fs.createReadStream('text.txt');
const writeStream = fs.createWriteStream('t.txt');

capitalLetter.on('end', () => {
    console.log('done');
  });
  
readStream.pipe(capitalLetter).pipe(writeStream);
