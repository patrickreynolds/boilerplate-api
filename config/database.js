module.exports = (function() {
  switch (process.env.NODE_ENV || 'development') {
    case 'production':
      return {
        mongo_uri: process.env.MONGO_URI
      };
    case 'development':
      return {
        mongo_uri: process.env.LOCAL_MONGO_URI
      };
  }
})();
