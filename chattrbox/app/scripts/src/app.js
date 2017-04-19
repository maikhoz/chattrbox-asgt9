class ChatApp {
    constructor() {
        console.log('Hello ES6!');
    }
}

export default ChatApp;

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
