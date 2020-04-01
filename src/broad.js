import {emptyMessage, getValue, getTab} from './util'

export default function broad() {
    const bc = new BroadcastChannel('Xiao')

    document.getElementById('broadcast').onclick = (e) => {
        emptyMessage(e)
        const value = getValue(e)
        const tab = getTab()
        bc.postMessage({
            value,
            tab
        })
    }
    bc.onmessage = (res) => {
        const {
            value,
            tab
        } = res.data;
        document.getElementById('bc-message').innerText = `[message]: get ${value} from ${tab}`
        document.getElementById('bc-input').value = value
    }
}