// Aggregate all models for easy import in future
module.exports = {
  User: require('./users'),
  Auth: require('./auth'),
  Post: require('./posts'),
  Media: require('./media'),
  Notification: require('./notifications'),
  Admin: require('./admin'),
  Story: require('./stories'),
  Explore: require('./explore'),
  Message: require('./messages')
};
