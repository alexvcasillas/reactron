const execa = require('execa');

const startParcelProcess = () =>
  new Promise(resolve => {
    let output = '';
    const parcelProcess = execa('parcel', ['index.html']);
    const concat = chunk => {
      output += chunk;
      console.log(output);
      if (output.includes('Built in ')) {
        parcelProcess.stdout.removeListener('data', concat);
        console.log(output);
        resolve();
      }
    };
    parcelProcess.stdout.on('data', concat);
  });

module.exports = {
  startParcelProcess,
};
