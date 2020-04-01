import {emptyMessage, getValue, getTab} from './util'

export default function local(){
    document.getElementById('localstorage').onclick = (e)=>{
        emptyMessage(e)
        const value = getValue(e)
        const tab = getTab()
        localStorage.setItem('message', JSON.stringify({
            value,
            tab
        }))
        
    }
    window.onstorage = (res)=>{
        const {key, newValue} = res
        const {value, tab} = JSON.parse(newValue)
        if(key !== 'message') return
        document.getElementById('ls-message').innerText = `[message]: get ${value} from ${tab}`
        document.getElementById('ls-input').value = value
    }
}
