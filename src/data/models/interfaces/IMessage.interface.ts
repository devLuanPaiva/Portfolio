export interface IMessage {
    id: string;
    text: string
    author: string
    side: 'left' | 'right'
}