import io from 'socket.io-client';
import util from './util'

const socket = io('http://localhost:3000');

export default function so(){
  const container = document.getElementById('socket-container')
  util.queryButton(container).onclick = (e)=>{
      util.emptyMessage(e)
      const value = util.getValue(e)
      const tab = util.getTab()
      socket.emit('message', {value, tab});

  }
  socket.on('connect', function(ser){
    // socket.join('room one');
    socket.on('message', function(msg){
      console.log(msg)
    });
  });
}