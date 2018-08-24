'use strict'

var net = require('net')
var co = require('co')
var Promise = require('bluebird')

function getAvailablePort (options) {
  options = options || {}

  return new Promise(function (resolve, reject) {
    options.from = options.from > 0 ? options.from : 15000
    options.range = options.range > 0 ? options.range : 100

    var port = options.from + ~~(Math.random() * options.range)
    var server = net.createServer()

    server.listen(port, function (err) {
      server.once('close', function () {
        resolve(port)
      })

      server.close()
    })

    server.on('error', function (err) {
      return reject(err)
    })
  })
}

function getRandomPort (options, callback) {
  if (typeof options === 'function') 
    callback = options

  if (options && typeof options !== 'object') 
    throw 'options is not an object'

  if (callback && typeof callback !== 'function')
    throw 'callback is not a function'

  var tasks = co.wrap(function * () {
    var port = yield getAvailablePort(options)
    return port
  })

  return Promise.resolve(tasks()).asCallback(callback)
}

module.exports = getRandomPort
