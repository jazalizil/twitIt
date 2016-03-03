module.exports = (function home () {
  'use strict'

  let ctrl = {}
  const signals = require('signals')
  const config = require('../config')
  const io = require('socket.io-client')
  //const particles = require('pixi-particles')
  var socket = io.connect(config.API_URL)

  socket.on('tweet', function(tweet){
    var container = $('.tweet-ctn')
    container.html('<div class="tweet" id="0"> ' + tweet.html + '</div>')
  })

  var getTweet = function(id) {
    $('.tweet-ctn').html('<span class="column"> <i class="fa fa-spinner fa-pulse"></i> </span>')
    socket.emit('get-tweets', {
      hashtag: config.HASHTAG,
      sinceId: id
    })
  }

  ctrl.refresh = function(){
    var id = $('.tweet').attr('id')
    getTweet(id)
    console.log('refresh tweet')
  }

  ctrl.init = function init() {
    getTweet()
    console.log('home.js - init home controller. Getting tweet...')
  }


  
  ctrl.changedState = new signals.Signal() // now trigger `ctrl.changedState.dispatch(state)` when your state changes to notify the router

  ctrl.destroy = function destroy () {
    ctrl = {}
  }

  return ctrl
})()
