const router = require('express').Router()
module.exports = router

router.use('/suspects', require('./suspects'))
router.use('/alibis', require('./alibis'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
