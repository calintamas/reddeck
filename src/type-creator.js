function trim(str = '') {
  return str.trim();
}

function onlyValidStrings(str) {
  return str != null && str !== '';
}

function typeCreator(typesStr = '', options = {}) {
  if (!typesStr || !typesStr.length) {
    return {};
  }

  const { prefix = '' } = options;

  const obj = typesStr
    .trim()
    .split(' ')
    .map(trim)
    .filter(onlyValidStrings)
    .reduce((acc, str) => {
      acc[str] = prefix + str;
      return acc;
    }, {});

  return obj;
}

module.exports = { typeCreator };
