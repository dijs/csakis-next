import data from './data.json';

export default function(lang) {
  const handler = {
    get: function(obj, key) {
      if (!data[key]) return undefined;
      if (typeof data[key] === 'string' || Array.isArray(data[key])) {
        return data[key];
      }
      if (!data[key][lang]) return undefined;
      return data[key][lang];
    }
  };
  return new Proxy({}, handler);
}
