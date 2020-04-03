import util from './util'

export default function broad() {
    let bc;
    try {
        bc = new BroadcastChannel('Xiao')
    } catch (error) {
        console.log('browser unsupport broadcast')
        return
    }
    const container = document.getElementById('bc-container')
    util.queryButton(container).onclick = (e) => {
        util.emptyMessage(e)
        const value = util.getValue(e)
        const tab = util.getTab()
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
        util.updateTextAndInput(container, tab, value)
    }
}