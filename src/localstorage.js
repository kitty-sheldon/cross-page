import util from './util'

export default function local(){
    const container = document.getElementById('ls-container')
    util.queryButton(container).onclick = (e)=>{
        util.emptyMessage(e)
        const value = util.getValue(e)
        const tab = util.getTab()
        localStorage.setItem('message', JSON.stringify({
            value,
            tab
        }))
    }
    window.onstorage = (res)=>{
        const {key, newValue} = res
        const {value, tab} = JSON.parse(newValue)
        if(key !== 'message') return
        util.updateTextAndInput(container, tab, value)
    }
}
