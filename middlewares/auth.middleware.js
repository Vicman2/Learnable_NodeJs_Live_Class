

const authenticate = (req, res, next) => {
    req.user = 'User'
    next()
}

module.exports = authenticate