import util from './util'

export default function sw() {
  if ('serviceWorker' in navigator) {
    const container = document.getElementById('sw-container');
    navigator.serviceWorker.register('/service.js').then(function (registration) {
      const contentDom = container.querySelector('#sw-state');  //for debug chrome://inspect/#service-workers
      if (registration.installing) {
        contentDom.textContent = 'installing ';
      } else if (registration.waiting) {
        contentDom.textContent = 'waiting ';
      } else if (registration.active) {
        contentDom.textContent = 'active ';
        util.queryButton(container).addEventListener('click', (e) => {
          util.emptyMessage(e)
          const value = util.getValue(e)
          const tab = util.getTab()
          //registration.active avoid navigator.serviceWorker.controller =null
          navigator.serviceWorker.controller.postMessage({
            value,
            tab
          })
        })
      }
    }, function (err) {
      console.log('ServiceWorker registration failed: ', err);
    });
    
    navigator.serviceWorker.addEventListener('message',  (e={}) =>{
      const {value, tab} = e.data
      util.updateTextAndInput(container, tab, value)
  });
  }
}