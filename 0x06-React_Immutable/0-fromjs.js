import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
  return fromJS(object);
}

// Example usage:
const inputObject = {
  key1: 'value1',
  key2: 'value2',
};

const immutableMap = getImmutableObject(inputObject);

console.log(immutableMap);
