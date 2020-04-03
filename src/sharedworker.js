import util from './util'

export default function shared(){
  const sharedworker = new SharedWorker('../shared.js')
  const container = document.getElementById('shared-container')
  sharedworker.port.start()
  sharedworker.port.onmessage = evt => {
    util.updateTextAndInput(container, tab, value)
  }

  util.queryButton(container).onclick = (e)=>{
      util.emptyMessage(e)
      const value = util.getValue(e)
      const tab = util.getTab()
      sharedworker.port.postMessage({
        value,
        tab
      })
      
  }
  
}


