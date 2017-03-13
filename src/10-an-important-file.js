const alwaysThrows = function() {
  throw new Error('OH NOES')
}

const iterate = function(num) {
  console.log(num)
  return ++num
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log)