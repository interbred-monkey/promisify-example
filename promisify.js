function promisify(fn) {

  return function() {

    return new Promise((resolve, reject) => {

      fn(...arguments, function(err, data) {

        if (err !== null) {

          return reject(err);

        }

        return resolve(data);

      })

    })

  };

}

module.exports = promisify;