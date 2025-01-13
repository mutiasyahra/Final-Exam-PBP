const SECRET_KEY = '7ajkoasoomsddw1ilsj9n'
const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader 
 
    if (!token) {
      return res.status(401).send("Authorization failed. No access token.")
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(403).send("Could not verify token")
      }
      req.user = user;
    })
    next()
  }

  

module.exports = authenticateToken