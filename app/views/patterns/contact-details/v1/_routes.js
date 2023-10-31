const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('*', function(req, res, next){
  // Change the service name for this feature
  res.locals['serviceName'] = 'Appeal a planning decision'

  // Add return to task list
  res.locals['return'] = true

  next()
})

router.post('/appellant-check', function (req, res) {
  if (req.session.data['appellant-check'] == 'Another individual') {
    res.redirect('appellant-name')
  } else if (req.session.data['appellant-check'] == 'A company') {
    res.redirect('company-name')
  } else {
    res.redirect('contact-details')
  }
})

router.post('/contact-details', function (req, res) {
  res.redirect('../?contact-details-completed=true')
})

router.post('/appellant-name', function (req, res) {
  res.redirect('contact-details')
})

router.post('/company-name', function (req, res) {
  res.redirect('contact-details')
})

// router.post('/about-you/lpa-reference', function (req, res) {
//   res.redirect('address')
// })


//
// ABOUT THE SITE
/////////////////////////////

router.post('/about-the-site/address', function (req, res) {
  res.redirect('own-all')
})

router.post('/about-the-site/own-all', function (req, res) {
  if (req.session.data['own-all'] == 'No') {
    res.redirect('own-some')
  } else {
    res.redirect('agricultural-holding')
  }
})

router.post('/about-the-site/own-some', function (req, res) {
  res.redirect('own-others')
})

router.post('/about-the-site/own-others', function (req, res) {
  if (req.session.data['own-others'] == 'Some' || req.session.data['own-others'] == 'No') {
    res.redirect('owners-searched')
  } else {
    res.redirect('owners-notified')
  }
})

router.post('/about-the-site/owners-searched', function (req, res) {
  res.redirect('owners-advertised')
})

router.post('/about-the-site/owners-advertised', function (req, res) {
  if (req.session.data['own-others'] == 'Some') {
    res.redirect('owners-notified')
  } else {
    res.redirect('agricultural-holding')
  }
})

router.post('/about-the-site/owners-notified', function (req, res) {
  res.redirect('agricultural-holding')
})

router.post('/about-the-site/agricultural-holding', function (req, res) {
  if (req.session.data['agricultural-holding'] == 'Yes') {
    res.redirect('agricultural-tenant')
  } else {
    res.redirect('site-visibility?site-address-status=completed')
  }
})

router.post('/about-the-site/agricultural-tenant', function (req, res) {
  if (req.session.data['agricultural-tenant'] == 'Yes') {
    res.redirect('agricultural-others')
  } else {
    res.redirect('agricultural-notified')
  }
})

router.post('/about-the-site/agricultural-others', function (req, res) {
  if (req.session.data['agricultural-others'] == 'Yes') {
    res.redirect('agricultural-notified')
  } else {
    res.redirect('site-visibility?site-address-status=completed')
  }
})

router.post('/about-the-site/agricultural-notified', function (req, res) {
  res.redirect('site-visibility?site-address-status=completed')
})

router.post('/about-the-site/site-visibility', function (req, res) {
  res.redirect('health-and-safety')
})

router.post('/about-the-site/health-and-safety', function (req, res) {
  res.redirect('../about-the-appeal/procedure?site-access-status=completed&count=2')
})

//
// THE APPEAL
/////////////////////////////

router.post('/about-the-appeal/procedure', function (req, res) {
  if (req.session.data['procedure'] == 'Inquiry' || req.session.data['procedure'] == 'Hearing') {
    res.redirect('procedure--reason')
  } else {
    res.redirect('statement?procedure-status=completed')
  }
})

router.post('/about-the-appeal/procedure--reason', function (req, res) {
  if (req.session.data['procedure'] == 'Inquiry') {
    res.redirect('procedure--length')
  } else {
    res.redirect('statement?procedure-status=completed')
  }
})

router.post('/about-the-appeal/procedure--length', function (req, res) {
  res.redirect('procedure--witnesses')
})

router.post('/about-the-appeal/procedure--witnesses', function (req, res) {
  res.redirect('appeal-statement?procedure-status=completed')
})

router.post('/about-the-appeal/statement', function (req, res) {
  // res.redirect('complete')
  res.redirect('common-ground?appeal-statement-status=completed')
})

router.post('/about-the-appeal/appeal-statement', function (req, res) {
  if (req.session.data['procedure'] == 'Inquiry' || req.session.data['procedure'] == 'Hearing') {
    res.redirect('common-ground?appeal-statement-status=completed')
  } else {
    res.redirect('new-plans-check?appeal-statement-status=completed')
  }
})

router.post('/about-the-appeal/common-ground', function (req, res) {
  res.redirect('new-plans-check')
})

router.post('/about-the-appeal/new-plans-check', function (req, res) {
  if (req.session.data['new-plans-check'] == 'Yes') {
    res.redirect('new-plans')
  } else {
    res.redirect('planning-obligation-check')
  }
})

router.post('/about-the-appeal/new-plans', function (req, res) {
  res.redirect('planning-obligation-check')
})

router.post('/about-the-appeal/planning-obligation-check', function (req, res) {
  if (req.session.data['planning-obligation-check'] == 'Yes') {
    res.redirect('planning-obligation-status')
  } else {
    res.redirect('other-check')
  }
})

router.post('/about-the-appeal/planning-obligation-status', function (req, res) {
  if (req.session.data['planning-obligation-status'] == 'Finalised and ready to submit' || req.session.data['planning-obligation-status'] == 'In draft') {
    res.redirect('planning-obligation')
  } else {
    res.redirect('other-check')
  }
})

router.post('/about-the-appeal/planning-obligation', function (req, res) {
  res.redirect('other-check')
})

router.post('/about-the-appeal/other-check', function (req, res) {
  if (req.session.data['other-check'] == 'Yes') {
    res.redirect('other')
  } else {
    res.redirect('../about-the-application/application-reference?appeal-documents-status=completed&count=3')
  }
})

router.post('/about-the-appeal/other', function (req, res) {
  res.redirect('../about-the-application/application-reference?appeal-documents-status=completed&count=3')
})

// router.get('/about-the-appeal/complete', function (req, res) {
//   if (!res.locals.data['upload-documents-completed']) {
//     res.redirect('../upload-documents/application')
//   } else {
//     res.redirect('../task-list')
//   }
// })

//
// THE APPLICATION
/////////////////////////////


// ??
// router.post('/about-the-application/:page', function (req, res, next) {
//   req.session.data['upload-documents-started'] = 'true'
//   req.session.data[`${req.params.page}-complete`] = 'true'
//   next()
// })


router.post('/about-the-application/application-reference', function (req, res) {
  res.redirect('application?application-reference-status=completed')
})

router.post('/about-the-application/application', function (req, res) {
  res.redirect('application-desc-correct')
})

router.post('/about-the-application/application-desc-correct', function (req, res) {
  res.redirect('plans')
})

router.post('/about-the-application/plans', function (req, res) {
  res.redirect('ownership-certificate-check')
})

router.post('/about-the-application/ownership-certificate-check', function (req, res) {
  if (req.session.data['ownership-certificate-check'] == 'Yes') {
    res.redirect('ownership-certificate')
  } else {
    res.redirect('design-access-check')
  }
})

router.post('/about-the-application/ownership-certificate', function (req, res) {
  res.redirect('design-access-check')
})

router.post('/about-the-application/design-access-check', function (req, res) {
  if (req.session.data['design-access-check'] == 'Yes') {
    res.redirect('design-access')
  } else {
    res.redirect('decision-letter')
  }
})

router.post('/about-the-application/design-access', function (req, res) {
  res.redirect('decision-letter')
})

router.post('/about-the-application/decision-letter', function (req, res) {
  if (req.session.data['lbc']) {
    res.redirect('../about-second-application/application-reference')
  } else {
    res.redirect('../task-list?application-documents-status=completed&count=4')
  }
})



//
// THE SECOND APPLICATION
/////////////////////////////


// ??
router.post('/about-second-application/:page', function (req, res, next) {
  req.session.data['upload-documents-started'] = 'true'
  req.session.data[`${req.params.page}-complete`] = 'true'
  next()
})

router.post('/about-second-application/application-reference', function (req, res) {
  res.redirect('application')
})

router.post('/about-second-application/application', function (req, res) {
  res.redirect('application-desc-correct')
})

router.post('/about-second-application/application-desc-correct', function (req, res) {
  res.redirect('plans')
})

router.post('/about-second-application/plans', function (req, res) {
  res.redirect('ownership-certificate-check')
})

router.post('/about-second-application/ownership-certificate-check', function (req, res) {
  if (req.session.data['ownership-certificate-check'] == 'Yes') {
    res.redirect('ownership-certificate')
  } else {
    res.redirect('design-access-check')
  }
})

router.post('/about-second-application/ownership-certificate', function (req, res) {
  res.redirect('design-access-check')
})

router.post('/about-second-application/design-access-check', function (req, res) {
  if (req.session.data['design-access-check'] == 'Yes') {
    res.redirect('design-access')
  } else {
    res.redirect('decision-letter')
  }
})

router.post('/about-second-application/design-access', function (req, res) {
  res.redirect('decision-letter')
})

router.post('/about-second-application/decision-letter', function (req, res) {
  res.redirect('../task-list?application-documents-status=complete')
})



router.post('/check-your-answers', function (req, res) {
  res.redirect('declaration')
})


// Add your routes above the module.exports line
module.exports = router
