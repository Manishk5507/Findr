function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
}

module.exports = isLoggedIn;
