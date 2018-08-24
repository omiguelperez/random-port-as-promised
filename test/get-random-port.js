'use strict'

var co = require('co')
var getRandomPort = require('..')

describe('Random PORT as Promised', function () {
  describe('Without options', function () {
    it('should retrieve available ports', function (done) {
      getRandomPort()
        .then(function (port) {
          expect(port).to.be.ok
            .and.to.be.a('number')
            .and.to.be.above(15000 - 1)
            .and.to.be.below(15000 + 100)
          done()
        })
        .catch(done)
    })
  })

  describe('With options', function () {
    it('should retrieve available port from 5000', function (done) {
      var fromPort = 5000

      getRandomPort({ from: fromPort })
        .then(function (port) {
          expect(port).to.be.ok
            .and.to.be.a('number')
            .and.to.be.above(fromPort - 1)
            .and.to.be.below(fromPort + 100)
          done()
        })
        .catch(done)
    })

    it('should retrieve available port from 5000 and range 1', function (done) {
      var fromPort = 5000
      var range = 1

      getRandomPort({ from: fromPort, range: range })
        .then(function (port) {
          expect(port).to.be.ok
            .and.to.be.a('number')
            .and.to.be.above(fromPort - 1)
            .and.to.be.below(fromPort + range)
          done()
        })
        .catch(done)
    })
  })
})