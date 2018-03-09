const promisify = require('./promisify.js');

function hasCallback(p1, p2, callback) {

  setTimeout(() => {

    console.log('Executing...');
    console.log(p1);
    console.log(p2);

    return callback(null, {'p1': p1, 'p2': p2});

  }, 1000);

}

// I will work, promise I will
let asPromised = promisify(hasCallback);
asPromised('foo', 'bar')
.then((data) => {

  console.log(JSON.stringify(data, null, 2));
  console.log('I kept my promise');

})
.catch(console.log);