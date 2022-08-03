const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization; //recup header
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); //deco de ma clé
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      req.currentuser=decodedToken;
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });

  }
};