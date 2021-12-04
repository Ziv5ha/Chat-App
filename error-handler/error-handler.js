function errorHandler(err, req, res, next) {
  switch (err) {
    case 401:
      res.status(401).send('Access Token Required');
      break;
    case 403:
      res.status(403).send('Invalid Access Token');
      break;
    case 404:
      res.status(404).send('Chat room not found');
      break;
    case 409:
      res.status(409).send('User already exists');
      break;
    default:
      res.status(500).send('Server error');
  }
}

module.exports = errorHandler;
