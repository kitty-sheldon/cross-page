import util from './util'

export default function sw() {
  if ('serviceWorker' in navigator) {
    const container = document.getElementById('sw-container');
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      const contentDom = container.querySelector('#sw-state');  //状态，方便调试chrome://inspect/#service-workers
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
          //active状态有postMessage方法，其他navigator.serviceWorker.controller =null
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