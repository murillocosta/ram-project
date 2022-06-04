const log = require("../utils/log");

exports.getResponse = (error) => {
  return {
    status: error.statusCode || 500,
    message: JSON.stringify({ message: error.message || "Server Error" }),
  };
};

exports.setResponse = (status, message) => {
  throw {
    status: status || 500,
    message: message,
  };
};
