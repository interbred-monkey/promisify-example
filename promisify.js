function promisify(fn) {

  return function() {

    return new Promise((resolve, reject) => {

      this.fn(...arguments, function(err, data) {

        if (err !== null) {

          return reject(err);

        }

        return resolve(data);

      })

    })

  }.bind({fn: fn});

}

module.exports = promisify;