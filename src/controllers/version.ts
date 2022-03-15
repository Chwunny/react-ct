// Consider changing these controller files to extend the class paradigm, this would enable controller files to behave like Angular services
const pack = require('../../package.json');
const version = () => {
  console.log(pack.version);
};
export default version;
