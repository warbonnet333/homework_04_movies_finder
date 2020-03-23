const queryString = require("query-string");

const getQueryFromLocation = location =>
  queryString.parse(location.search).query;

export default getQueryFromLocation;
