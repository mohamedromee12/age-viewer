"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var CypherService = require("../services/cypherService");
var sessionService = require("../services/sessionService");
var GraphCreator = require("../models/GraphCreator");
var CypherController = /*#__PURE__*/function () {
  function CypherController() {
    (0, _classCallCheck2["default"])(this, CypherController);
  }
  (0, _createClass2["default"])(CypherController, [{
    key: "executeCypher",
    value: function () {
      var _executeCypher = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var connectorService, cypherService, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              connectorService = sessionService.get(req.sessionID);
              if (!connectorService.isConnected()) {
                _context.next = 9;
                break;
              }
              cypherService = new CypherService(connectorService.graphRepository);
              _context.next = 5;
              return cypherService.executeCypher(req.body.cmd);
            case 5:
              data = _context.sent;
              res.status(200).json(data).end();
              _context.next = 10;
              break;
            case 9:
              throw new Error("Not connected");
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function executeCypher(_x, _x2) {
        return _executeCypher.apply(this, arguments);
      }
      return executeCypher;
    }()
  }, {
    key: "createGraph",
    value: function () {
      var _createGraph = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
        var db, _yield$db$graphReposi, _yield$db$graphReposi2, client, transaction, graph, DROP, CREATE, details, err;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              db = sessionService.get(req.sessionID);
              if (!db.isConnected()) {
                _context5.next = 49;
                break;
              }
              _context5.next = 4;
              return db.graphRepository.createTransaction();
            case 4:
              _yield$db$graphReposi = _context5.sent;
              _yield$db$graphReposi2 = (0, _slicedToArray2["default"])(_yield$db$graphReposi, 2);
              client = _yield$db$graphReposi2[0];
              transaction = _yield$db$graphReposi2[1];
              _context5.prev = 8;
              graph = new GraphCreator({
                nodes: req.files.nodes,
                edges: req.files.edges,
                graphName: req.body.graphName,
                dropGraph: req.body.dropGraph === 'true'
              });
              _context5.next = 12;
              return graph.parseData();
            case 12:
              DROP = graph.query.graph.drop;
              CREATE = graph.query.graph.create;
              if (!DROP) {
                _context5.next = 24;
                break;
              }
              _context5.prev = 15;
              _context5.next = 18;
              return client.query(DROP);
            case 18:
              _context5.next = 24;
              break;
            case 20:
              _context5.prev = 20;
              _context5.t0 = _context5["catch"](15);
              if (!(_context5.t0.code !== '3F000')) {
                _context5.next = 24;
                break;
              }
              throw _context5.t0;
            case 24:
              _context5.next = 26;
              return client.query(CREATE);
            case 26:
              _context5.next = 28;
              return transaction('BEGIN');
            case 28:
              _context5.next = 30;
              return Promise.all(graph.query.labels.map( /*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(q) {
                  return _regenerator["default"].wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return transaction(q);
                      case 2:
                        return _context2.abrupt("return", _context2.sent);
                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x6) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 30:
              _context5.next = 32;
              return Promise.all(graph.query.nodes.map( /*#__PURE__*/function () {
                var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(q) {
                  return _regenerator["default"].wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return transaction(q);
                      case 2:
                        return _context3.abrupt("return", _context3.sent);
                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x7) {
                  return _ref2.apply(this, arguments);
                };
              }()));
            case 32:
              _context5.next = 34;
              return Promise.all(graph.query.edges.map( /*#__PURE__*/function () {
                var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(q) {
                  return _regenerator["default"].wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return transaction(q);
                      case 2:
                        return _context4.abrupt("return", _context4.sent);
                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x8) {
                  return _ref3.apply(this, arguments);
                };
              }()));
            case 34:
              _context5.next = 36;
              return transaction('COMMIT');
            case 36:
              res.status(204).end();
              _context5.next = 46;
              break;
            case 39:
              _context5.prev = 39;
              _context5.t1 = _context5["catch"](8);
              _context5.next = 43;
              return transaction('ROLLBACK');
            case 43:
              details = _context5.t1.toString();
              err = _objectSpread(_objectSpread({}, _context5.t1), {}, {
                details: details
              });
              res.status(500).json(err).end();
            case 46:
              _context5.prev = 46;
              client.release();
              return _context5.finish(46);
            case 49:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[8, 39, 46, 49], [15, 20]]);
      }));
      function createGraph(_x3, _x4, _x5) {
        return _createGraph.apply(this, arguments);
      }
      return createGraph;
    }()
  }]);
  return CypherController;
}();
module.exports = CypherController;
//# sourceMappingURL=cypherController.js.map