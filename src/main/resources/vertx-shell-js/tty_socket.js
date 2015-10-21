/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-shell-js/tty_socket */
var utils = require('vertx-js/util/utils');
var Stream = require('vertx-shell-js/stream');
var Tty = require('vertx-shell-js/tty');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JTtySocket = io.vertx.ext.shell.net.TtySocket;

/**

 @class
*/
var TtySocket = function(j_val) {

  var j_ttySocket = j_val;
  var that = this;
  Tty.call(this, j_val);

  /**

   @public
   @param stdin {function} 
   @return {TtySocket}
   */
  this.setStdin = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_ttySocket["setStdin(io.vertx.ext.shell.io.Stream)"](__args[0]._jdel);
      return that;
    }  else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_ttySocket["setStdin(io.vertx.core.Handler)"](function(jVal) {
      __args[0](jVal);
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_ttySocket;
};

// We export the Constructor function
module.exports = TtySocket;