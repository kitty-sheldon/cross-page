import broad from './src/broad'
import local from './src/local'

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

}

window.onpenNewTab = function(){
  window.open(`${location.href}?new=1`)
}


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/src/sw.js').then(function(reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg);
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
  }