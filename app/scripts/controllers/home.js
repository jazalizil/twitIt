module.exports = (function home () {
  'use strict'

  let ctrl = {}
  
  const signals = require('signals')
  

  
  ctrl.init = function init (state, id) {
  
    console.log('home.js - init home controller.')
  }

  
  ctrl.changedState = new signals.Signal() // now trigger `ctrl.changedState.dispatch(state)` when your state changes to notify the router
  

  ctrl.destroy = function destroy () {
    ctrl = {}
  }

  return ctrl
})()
