require('es6-promise')

const promiseFirst = first()

const promiseSecond = promiseFirst.then(function(value){
  return second(value)
})

promiseSecond.then(console.log)