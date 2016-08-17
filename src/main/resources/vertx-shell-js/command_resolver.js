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

/** @module vertx-shell-js/command_resolver */
var utils = require('vertx-js/util/utils');
var Command = require('vertx-shell-js/command');
var Vertx = require('vertx-js/vertx');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JCommandResolver = io.vertx.ext.shell.command.CommandResolver;

/**
 A resolver for commands, so the shell can discover commands.

 @class
*/
var CommandResolver = function(j_val) {

  var j_commandResolver = j_val;
  var that = this;

  /**

   @public

   @return {Array.<Command>} the current commands
   */
  this.commands = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetVertxGen(j_commandResolver["commands()"](), Command);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns a single command by its name.

   @public
   @param name {string} the command name 
   @return {Command} the commad or null
   */
  this.getCommand = function(name) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(j_commandResolver["getCommand(java.lang.String)"](name), Command);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_commandResolver;
};

/**

 @memberof module:vertx-shell-js/command_resolver
 @param vertx {Vertx} 
 @return {CommandResolver} the base commands of Vert.x Shell.
 */
CommandResolver.baseCommands = function(vertx) {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
    return utils.convReturnVertxGen(JCommandResolver["baseCommands(io.vertx.core.Vertx)"](vertx._jdel), CommandResolver);
  } else throw new TypeError('function invoked with invalid arguments');
};

// We export the Constructor function
module.exports = CommandResolver;