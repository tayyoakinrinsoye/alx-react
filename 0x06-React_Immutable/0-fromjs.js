const Immutable = require('immutable');

function getImmutableObject(object) {
  // Convert the input object to an immutable Map
  const immutableMap = Immutable.fromJS(object);

  return immutableMap;
}

// Example usage:
const inputObject = {
  key1: 'value1',
  key2: 'value2',
};

const immutableMap = getImmutableObject(inputObject);

console.log(immutableMap);
