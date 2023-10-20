import Pusher from 'pusher-js';
import * as PusherTypes from 'pusher-js';
import Echo from 'laravel-echo';

declare const presenceChannel: PusherTypes.PresenceChannel    // Enable pusher logging - don't include this in production
Pusher.logToConsole = true;


window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: "3224fc036aad38f7f6d7",
    cluster: "ap2",
    forceTLS: true
});
Echo.channel('chat')
    .listen('MessageSent',(e)=>{
        console.log('Произошел ивент')
    })
/*export const pusher = new Pusher('3224fc036aad38f7f6d7', {
    cluster: 'ap2'
});

const channel = pusher.subscribe('chatsChannel');
channel.bind('messageSent', function(data) {
    const jsonData = JSON.stringify(data)
    app.messages.push(jsonData);
    console.log(jsonData)
});*/

/*
/!*pusher.connection.bind( 'error', function( err) {
    if( err.data.code === 4004 ) {
        console.log('Over limit!');
    }
    console.log(typeof err)
});*!/
// pusher.subscribe('ChatChannel')
/!* const socket = new WebSocket('wss://ws.pusherapp.com/app/1681206?protocol=7&client=js&version=5.1.0')
socket.addEventListener('open',(evt)=>{
    console.log('connected')
    socket.onmessage = evt =>{
        console.log(evt)
    }
})
socket.onmessage = e =>{
    console.log('message sent')
}
socket.addEventListener('error', (event) => {
    console.error('WebSocket error:', event);
});*!/
export {pusher}*/
