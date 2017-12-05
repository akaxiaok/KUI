import * as feather from 'react-feather';

let Icons = {};
let keys = Object.keys(feather);
for (let key of keys) {
  let original = key.replace(/[A-Z]/g, function (match, offset) {
    if (offset !== 0) {
      return '-' + match.toLowerCase();
    } else {
      return match.toLowerCase();
    }
  });
  Icons[original] = feather[key];
}

export default Icons;