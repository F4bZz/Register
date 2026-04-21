const params = new URLSearchParams(window.location.search);

document.querySelector('.header-title').innerText = params.get('title')