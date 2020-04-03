let ports = []
onconnect = e => {
	const port = e.ports[0]
	ports.push(port)
	port.onmessage = evt => {
		ports.filter(p => p !== port) //exclude self
		.forEach(p => p.postMessage(evt.data))  
	}
}