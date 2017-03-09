require('es6-promise')

const promise = new Promise(function(fulfilled, reject){
  setTimeout(function(){
    fulfilled('I FIRED!')
    reject(new Error('I DID NOT FIRE!'))
  })
})

function onRejected(error){
  console.log(error.message)
}

promise.then(console.log, onRejected)