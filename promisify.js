const _ = require('lodash/core');

function promisify(fn) {

  return function() {

    return new Promise((resolve, reject) => {

      this.fn(...arguments, function() {

        if (!_.isNull(arguments[0])) {

          return reject(arguments[0]);

        }

        return resolve(...[...arguments].slice(1));

      })


    })

  }.bind({fn: fn});

}

module.exports = promisify;