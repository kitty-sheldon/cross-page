import broad from './src/broad'
import local from './src/local'
import sw from './src/sw'

window.onload = ()=>{
    const {type} = performance.navigation
    const isRefresh = type === 1
    let num = /new/.test(location.search) ? Number(localStorage.getItem('xx_broad')) : 1
    //刷新不更改数字
    if((num && !isRefresh) || !num ){
        num++
    }
    localStorage.setItem('xx_broad', num)
    document.getElementById('title').innerText = `Tab${num}` 
    broad()
    local()
    sw()
}

window.onpenNewTab = function(){
  window.open(`${location.href}?new=1`)
}
