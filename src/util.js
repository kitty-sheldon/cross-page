
const util = {
  getValue(e) {
    return e.target.previousElementSibling.value
  },
  emptyMessage(e) {
    e.target.nextElementSibling.innerText = ''
  },
  getTab() {
    return document.getElementById('title').innerText
  },
  getParentNode(ele) {
    return ele.parentNode
  },
  updateTextAndInput(container, from, text){
    if(isSameTab(from)) return
    container.querySelector('.message').innerText = `[message]: get ${text} from ${from}`
    this.getInput(container).value = text
  },
  getInput(container){
    return container.querySelector('.input')
  },
  queryButton(container){
    return container.querySelector('.btn')
  }
}


function isSameTab(from){
  return from === util.getTab()

}
export default util