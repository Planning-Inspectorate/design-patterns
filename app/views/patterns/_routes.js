const express = require('express')
const router = new express.Router()

router.get('*', function(req, res, next){
  // Change the service name for this feature
  res.locals['serviceName'] = 'Planning Inspectorate design patterns'
  next()
})

<<<<<<< Updated upstream
router.post('/file-upload/documents-check', function (req, res) {
  if (req.session.data['adding-documents'] == 'Yes') {
    res.redirect('listed-building-details');
  } else {
    res.redirect('affected-listed-building-check');
  }
})

=======
router.post('final-comments/v1/documents-check', function (req, res) {
  if (req.session.data['adding-documents'] == 'Yes') {
    res.redirect('final-comments/v1/documents-upload')
  } else {
    res.redirect('final-comments/v1/check-your-answers')
  }
})

router.post('/documents-upload', function (req, res) {
  res.redirect('check-your-answers')
})

>>>>>>> Stashed changes
// Add your routes above the module.exports line
module.exports = router
