export class Message {
    messageId?: number
    messageSenderId?: number
    messageReceiverId: number
    messageText: string

    constructor(messageReceiverId: number, messageText: string, messageId?: number, messageSenderId?: number,) {
        this.messageId = messageId;
        this.messageSenderId = messageSenderId;
        this.messageReceiverId = messageReceiverId;
        this.messageText = messageText;
    }
}