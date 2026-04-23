const params = new URLSearchParams(window.location.search);

if(!params.get('title')&&!params.get('subject')){window.location.href = './index.html'}
document.querySelector('.header-title').innerText = params.get('title')
document.title = `Visualizando ${params.get('title')}`