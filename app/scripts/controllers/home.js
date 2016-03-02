module.exports = (function home () {
  'use strict'

  let ctrl = {}
  const signals = require('signals')
  const config = require('../config')
  var io = require('socket.io-client')


  
  ctrl.init = function init (state, id) {
    var socket = io.connect(config.API_URL)
    socket.emit('getTweets', {
      hashtag: config.HASHTAG
    })
    socket.on('tweets', function(data){
      console.log('tweets: ', data.tweets)
    })
    console.log('home.js - init home controller. Getting tweets...')

  }

  
  ctrl.changedState = new signals.Signal() // now trigger `ctrl.changedState.dispatch(state)` when your state changes to notify the router
  

  ctrl.destroy = function destroy () {
    ctrl = {}
  }

  return ctrl
})()
