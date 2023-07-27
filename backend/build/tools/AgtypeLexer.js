"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _antlr = _interopRequireDefault(require("antlr4"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /*
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
                                                                                                                                                                                                                                                                                                                                           */ // Generated from src/tools/Agtype.g4 by ANTLR 4.9.2
// jshint ignore: start
var serializedATN = ["\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786", "\u5964\x02\x15\xB9\b\x01\x04\x02\t\x02\x04\x03\t\x03", "\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07", "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\x0B\t\x0B\x04", "\f\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10", "\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04\x13\t\x13", "\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17", "\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A", "\x04\x1B\t\x1B\x03\x02\x03\x02\x03\x02\x03\x02", "\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03", "\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04", "\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07", "\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\x0B\x03\x0B", "\x03\x0B\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r", "\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E", "\x03\x0E\x03\x0F\x03\x0F\x07\x0Fh\n\x0F\f\x0F\x0E", "\x0Fk\x0B\x0F\x03\x10\x03\x10\x03\x10\x07\x10", "p\n\x10\f\x10\x0E\x10s\x0B\x10\x03\x10\x03\x10\x03", "\x11\x03\x11\x03\x11\x05\x11z\n\x11\x03\x12\x03", "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03", "\x13\x03\x14\x03\x14\x03\x15\x05\x15\x87\n\x15", "\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x07\x16", "\x8E\n\x16\f\x16\x0E\x16\x91\x0B\x16\x05\x16\x93", "\n\x16\x03\x17\x05\x17\x96\n\x17\x03\x17\x03\x17", "\x03\x17\x03\x18\x05\x18\x9C\n\x18\x03\x18\x03", "\x18\x05\x18\xA0\n\x18\x03\x18\x03\x18\x03\x19", "\x03\x19\x06\x19\xA6\n\x19\r\x19\x0E\x19\xA7\x03", "\x1A\x03\x1A\x05\x1A\xAC\n\x1A\x03\x1A\x06\x1A", "\xAF\n\x1A\r\x1A\x0E\x1A\xB0\x03\x1B\x06\x1B\xB4", "\n\x1B\r\x1B\x0E\x1B\xB5\x03\x1B\x03\x1B\x02\x02", "\x1C\x03\x03\x05\x04\x07\x05\t\x06\x0B\x07\r\b\x0F", "\t\x11\n\x13\x0B\x15\f\x17\r\x19\x0E\x1B\x0F\x1D", "\x10\x1F\x11!\x02#\x02%\x02'\x02)\x12+\x02-\x13", "/\x141\x023\x025\x15\x03\x02\f\x05\x02C\\aac|\x07", "\x02&&2;C\\aac|\n\x02$$11^^ddhhppttvv\x05\x022;CHch\x05\x02", "\x02!$$^^\x03\x023;\x03\x022;\x04\x02GGgg\x04\x02", "--//\x05\x02\x0B\f\x0F\x0F\"\"\x02\xBF\x02\x03\x03", "\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03", "\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\x0B\x03", "\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03", "\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03", "\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03", "\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03", "\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03", "\x02\x02\x02\x02)\x03\x02\x02\x02\x02-\x03\x02", "\x02\x02\x02/\x03\x02\x02\x02\x025\x03\x02\x02", "\x02\x037\x03\x02\x02\x02\x05<\x03\x02\x02\x02", "\x07B\x03\x02\x02\x02\tG\x03\x02\x02\x02\x0BI\x03", "\x02\x02\x02\rK\x03\x02\x02\x02\x0FM\x03\x02\x02", "\x02\x11O\x03\x02\x02\x02\x13Q\x03\x02\x02\x02", "\x15S\x03\x02\x02\x02\x17V\x03\x02\x02\x02\x19", "X\x03\x02\x02\x02\x1Ba\x03\x02\x02\x02\x1De\x03", "\x02\x02\x02\x1Fl\x03\x02\x02\x02!v\x03\x02\x02", "\x02#{\x03\x02\x02\x02%\x81\x03\x02\x02\x02'\x83", "\x03\x02\x02\x02)\x86\x03\x02\x02\x02+\x92\x03", "\x02\x02\x02-\x95\x03\x02\x02\x02/\x9B\x03\x02", "\x02\x021\xA3\x03\x02\x02\x023\xA9\x03\x02\x02", "\x025\xB3\x03\x02\x02\x0278\x07v\x02\x0289\x07t", "\x02\x029:\x07w\x02\x02:;\x07g\x02\x02;\x04\x03", "\x02\x02\x02<=\x07h\x02\x02=>\x07c\x02\x02>?\x07", "n\x02\x02?@\x07u\x02\x02@A\x07g\x02\x02A\x06\x03", "\x02\x02\x02BC\x07p\x02\x02CD\x07w\x02\x02DE\x07", "n\x02\x02EF\x07n\x02\x02F\b\x03\x02\x02\x02GH\x07", "}\x02\x02H\n\x03\x02\x02\x02IJ\x07.\x02\x02J\f\x03", "\x02\x02\x02KL\x07\x7F\x02\x02L\x0E\x03\x02\x02", "\x02MN\x07<\x02\x02N\x10\x03\x02\x02\x02OP\x07]", "\x02\x02P\x12\x03\x02\x02\x02QR\x07_\x02\x02R\x14", "\x03\x02\x02\x02ST\x07<\x02\x02TU\x07<\x02\x02U", "\x16\x03\x02\x02\x02VW\x07/\x02\x02W\x18\x03\x02", "\x02\x02XY\x07K\x02\x02YZ\x07p\x02\x02Z[\x07h\x02", "\x02[\\\x07k\x02\x02\\]\x07p\x02\x02]^\x07k\x02\x02", "^_\x07v\x02\x02_`\x07{\x02\x02`\x1A\x03\x02\x02", "\x02ab\x07P\x02\x02bc\x07c\x02\x02cd\x07P\x02\x02", "d\x1C\x03\x02\x02\x02ei\t\x02\x02\x02fh\t\x03\x02", "\x02gf\x03\x02\x02\x02hk\x03\x02\x02\x02ig\x03\x02", "\x02\x02ij\x03\x02\x02\x02j\x1E\x03\x02\x02\x02", "ki\x03\x02\x02\x02lq\x07$\x02\x02mp\x05!\x11\x02", "np\x05'\x14\x02om\x03\x02\x02\x02on\x03\x02\x02", "\x02ps\x03\x02\x02\x02qo\x03\x02\x02\x02qr\x03\x02", "\x02\x02rt\x03\x02\x02\x02sq\x03\x02\x02\x02tu\x07", "$\x02\x02u \x03\x02\x02\x02vy\x07^\x02\x02wz\t\x04", "\x02\x02xz\x05#\x12\x02yw\x03\x02\x02\x02yx\x03", "\x02\x02\x02z\"\x03\x02\x02\x02{|\x07w\x02\x02|", "}\x05%\x13\x02}~\x05%\x13\x02~\x7F\x05%\x13\x02", "\x7F\x80\x05%\x13\x02\x80$\x03\x02\x02\x02\x81", "\x82\t\x05\x02\x02\x82&\x03\x02\x02\x02\x83\x84", "\n\x06\x02\x02\x84(\x03\x02\x02\x02\x85\x87\x07", "/\x02\x02\x86\x85\x03\x02\x02\x02\x86\x87\x03", "\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x05", "+\x16\x02\x89*\x03\x02\x02\x02\x8A\x93\x072\x02", "\x02\x8B\x8F\t\x07\x02\x02\x8C\x8E\t\b\x02\x02\x8D", "\x8C\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F", "\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90", "\x93\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x92", "\x8A\x03\x02\x02\x02\x92\x8B\x03\x02\x02\x02\x93", ",\x03\x02\x02\x02\x94\x96\x07/\x02\x02\x95\x94", "\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97", "\x03\x02\x02\x02\x97\x98\x05+\x16\x02\x98\x99", "\x051\x19\x02\x99.\x03\x02\x02\x02\x9A\x9C\x07", "/\x02\x02\x9B\x9A\x03\x02\x02\x02\x9B\x9C\x03", "\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9F\x05", "+\x16\x02\x9E\xA0\x051\x19\x02\x9F\x9E\x03\x02", "\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA1\x03\x02", "\x02\x02\xA1\xA2\x053\x1A\x02\xA20\x03\x02\x02", "\x02\xA3\xA5\x070\x02\x02\xA4\xA6\t\b\x02\x02\xA5", "\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7", "\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8", "2\x03\x02\x02\x02\xA9\xAB\t\t\x02\x02\xAA\xAC\t", "\n\x02\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03", "\x02\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD\xAF\t", "\b\x02\x02\xAE\xAD\x03\x02\x02\x02\xAF\xB0\x03", "\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03", "\x02\x02\x02\xB14\x03\x02\x02\x02\xB2\xB4\t\x0B", "\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02", "\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02", "\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\b\x1B", "\x02\x02\xB86\x03\x02\x02\x02\x11\x02ioqy\x86\x8F", "\x92\x95\x9B\x9F\xA7\xAB\xB0\xB5\x03\b\x02\x02"].join("");
var atn = new _antlr["default"].atn.ATNDeserializer().deserialize(serializedATN);
var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new _antlr["default"].dfa.DFA(ds, index);
});
var AgtypeLexer = /*#__PURE__*/function (_antlr4$Lexer) {
  (0, _inherits2["default"])(AgtypeLexer, _antlr4$Lexer);
  var _super = _createSuper(AgtypeLexer);
  function AgtypeLexer(input) {
    var _this;
    (0, _classCallCheck2["default"])(this, AgtypeLexer);
    _this = _super.call(this, input);
    _this._interp = new _antlr["default"].atn.LexerATNSimulator((0, _assertThisInitialized2["default"])(_this), atn, decisionsToDFA, new _antlr["default"].PredictionContextCache());
    return _this;
  }
  (0, _createClass2["default"])(AgtypeLexer, [{
    key: "atn",
    get: function get() {
      return atn;
    }
  }]);
  return AgtypeLexer;
}(_antlr["default"].Lexer);
exports["default"] = AgtypeLexer;
(0, _defineProperty2["default"])(AgtypeLexer, "grammarFileName", "Agtype.g4");
(0, _defineProperty2["default"])(AgtypeLexer, "channelNames", ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"]);
(0, _defineProperty2["default"])(AgtypeLexer, "modeNames", ["DEFAULT_MODE"]);
(0, _defineProperty2["default"])(AgtypeLexer, "literalNames", [null, "'true'", "'false'", "'null'", "'{'", "','", "'}'", "':'", "'['", "']'", "'::'", "'-'", "'Infinity'", "'NaN'"]);
(0, _defineProperty2["default"])(AgtypeLexer, "symbolicNames", [null, null, null, null, null, null, null, null, null, null, null, null, null, null, "IDENT", "STRING", "INTEGER", "RegularFloat", "ExponentFloat", "WS"]);
(0, _defineProperty2["default"])(AgtypeLexer, "ruleNames", ["T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", "IDENT", "STRING", "ESC", "UNICODE", "HEX", "SAFECODEPOINT", "INTEGER", "INT", "RegularFloat", "ExponentFloat", "DECIMAL", "SCIENTIFIC", "WS"]);
AgtypeLexer.EOF = _antlr["default"].Token.EOF;
AgtypeLexer.T__0 = 1;
AgtypeLexer.T__1 = 2;
AgtypeLexer.T__2 = 3;
AgtypeLexer.T__3 = 4;
AgtypeLexer.T__4 = 5;
AgtypeLexer.T__5 = 6;
AgtypeLexer.T__6 = 7;
AgtypeLexer.T__7 = 8;
AgtypeLexer.T__8 = 9;
AgtypeLexer.T__9 = 10;
AgtypeLexer.T__10 = 11;
AgtypeLexer.T__11 = 12;
AgtypeLexer.T__12 = 13;
AgtypeLexer.IDENT = 14;
AgtypeLexer.STRING = 15;
AgtypeLexer.INTEGER = 16;
AgtypeLexer.RegularFloat = 17;
AgtypeLexer.ExponentFloat = 18;
AgtypeLexer.WS = 19;
//# sourceMappingURL=AgtypeLexer.js.map