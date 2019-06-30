const trim = (str = '') => {
  try {
    return str.trim();
  } catch (err) {
    return null
  }
}

const onlyValidStrings = (str) => {
  return str != null && str !== ''
}

const typeCreator = (typesStr = '', options = {}) => {
  if (!typesStr || !typesStr.length) {
    return {}
  }

  options = options || {};
  const prefix = options.prefix || '';

  const obj = typesStr
      .trim()
      .split(' ')
      .map(trim)
      .filter(onlyValidStrings)
      .reduce((acc, str) => {
        acc[str] = prefix + str
        return acc
      }, {})

  return obj
}

export {
  typeCreator
}
