require('es6-promise')

const promise = new Promise(function(fulfilled, reject) {
 fulfilled('PROMISE VALUE')
})

promise.then(console.log)
console.log('MAIN PROGRAM')