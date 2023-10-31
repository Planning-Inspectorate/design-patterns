/* eslint-disable-next-line no-unused-vars */
const addFilter = require('govuk-prototype-kit').views.addFilter
const moment = require('moment')

addFilter('formatMonth', (number) => {
	var date = moment().month(number -1)
	return date.format('MMMM')
})

addFilter('daysAgo', (number) => {
	var date = moment().subtract(number,"days").format("D MMMM YYYY")
	return date
})

addFilter('daysInFuture', (number) => {
	var date = moment().add(number,"days").format("D MMMM YYYY")
	return date
})

addFilter('daysInFutureShort', (number) => {
	var date = moment().add(number,"days").format("D MMM YYYY")
	return date
})

addFilter('daysInPast', (number) => {
	var date = moment().subtract(number,"days").format("D MMMM YYYY")
	return date
})

addFilter('daysInPastShort', (number) => {
	var date = moment().subtract(number,"days").format("D MMM YYYY")
	return date
})

addFilter('push', (array, item) => {
	array.push(item)
	return array
})

addFilter('cleanArray', (array) => {
	return array.filter(item => {
		return (item && (item !==""))
	})
})
