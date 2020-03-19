import Vue from "vue"

Vue.filter('numFloat', function(msg) {
	return parseFloat(msg).toFixed(2)
})
