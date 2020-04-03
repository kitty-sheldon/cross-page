import util from './util'
export default function winopen(openers) {
  const container = document.getElementById('open-container')
  util.queryButton(container).onclick = (e) => {
    util.emptyMessage(e)
    const value = util.getValue(e)
    const tab = util.getTab()
    openers.filter(w => !w.closed).forEach(w => w.postMessage({
      value,
      tab
    }))
  }
  window.onmessage = e => {
    const {data = {}} = e
    const {
      tab,
      value
    } = data
    if(!tab || util.isSameTab(tab)) return
    util.updateTextAndInput(container, tab, value)
  }
}