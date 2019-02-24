import data from './data.json';

export default function(lang) {
  const handler = {
    get: function(obj, key) {
      if (!data[key]) return '<EMPTY>';
      if (typeof data[key] === 'string') {
        return data[key];
      }
      if (!data[key][lang]) return '<EMPTY>';
      return data[key][lang];
    }
  };
  return new Proxy({}, handler);
}
