module.exports = (function page () {
  'use strict'

  let ctrl = {}
  
  const signals = require('signals')
  

  
  ctrl.init = function init (state, id) {
  
    console.log('page.js - init page controller.')
  }

  
  ctrl.changedState = new signals.Signal() // now trigger `ctrl.changedState.dispatch(state)` when your state changes to notify the router
  

  ctrl.destroy = function destroy () {
    ctrl = {}
  }

  return ctrl
})()
