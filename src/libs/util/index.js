export function firstUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

let Util = {};
Util.firstUpperCase = firstUpperCase;

export default Util;