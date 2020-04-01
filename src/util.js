export const getValue = (e)=>{
  return e.target.previousSibling.value
}
export const emptyMessage = (e)=>{
  e.target.nextSibling.innerText = ''
}
export const getTab = ()=>{
  return document.getElementById('title').innerText
}

