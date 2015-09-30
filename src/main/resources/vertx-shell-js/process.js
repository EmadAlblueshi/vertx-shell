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

/** @module vertx-shell-js/process */
var utils = require('vertx-js/util/utils');
var ProcessContext = require('vertx-shell-js/process_context');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JProcess = io.vertx.ext.shell.process.Process;

/**
 A process managed by the shell.

 @class
*/
var Process = function(j_val) {

  var j_process = j_val;
  var that = this;

  /**
   Execute the process in the given context.

   @public
   @param context {ProcessContext} the context 
   */
  this.execute = function(context) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_process["execute(io.vertx.ext.shell.process.ProcessContext)"](context._jdel);
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_process;
};

// We export the Constructor function
module.exports = Process;