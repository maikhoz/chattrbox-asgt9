(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
    _classCallCheck(this, ChatApp);

    console.log('Hello ES6!');
};

exports.default = ChatApp;

/*
resume at pg 339
import socket from './ws-client';

class ChatApp {
    constructor() {
        socket.init('ws://localhost:3001');
    }
}

class ChatMessage {
    constructor({
        message: m,
        user: u = 'batman',
        timestamp: t = (new Date()).getTime()
    }) {
        this.message = m;
        this.user = u;
        this.timestamp = t;
    }
    serialize() {
        return {
            user: this.user,
            message: this.message,
            timestamp: this.timestamp
        };
    }
}

export default ChatApp

*/

},{}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztJQ0FNLE8sR0FDRixtQkFBYztBQUFBOztBQUNWLFlBQVEsR0FBUixDQUFZLFlBQVo7QUFDSCxDOztrQkFHVSxPOztBQUVmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7O0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgQ2hhdEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdIZWxsbyBFUzYhJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0QXBwO1xuXG4vKlxucmVzdW1lIGF0IHBnIDMzOVxuaW1wb3J0IHNvY2tldCBmcm9tICcuL3dzLWNsaWVudCc7XG5cbmNsYXNzIENoYXRBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzb2NrZXQuaW5pdCgnd3M6Ly9sb2NhbGhvc3Q6MzAwMScpO1xuICAgIH1cbn1cblxuY2xhc3MgQ2hhdE1lc3NhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgbWVzc2FnZTogbSxcbiAgICAgICAgdXNlcjogdSA9ICdiYXRtYW4nLFxuICAgICAgICB0aW1lc3RhbXA6IHQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG4gICAgfSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtO1xuICAgICAgICB0aGlzLnVzZXIgPSB1O1xuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IHQ7XG4gICAgfVxuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZXI6IHRoaXMudXNlcixcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGhpcy50aW1lc3RhbXBcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRBcHBcblxuKi9cbiIsImltcG9ydCBDaGF0QXBwIGZyb20gJy4vYXBwJztcbm5ldyBDaGF0QXBwKCk7XG4iXX0=
