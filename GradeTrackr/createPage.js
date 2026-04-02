const params = new URLSearchParams(window.location.search);

if(params.get('title')){
    let id = Math.round(Math.random()*100000)
    let data = {
        title: params.get('title'),
        subject: params.get('subject'),
        date: params.get('date')
    }
    while(localStorage.getItem(id)){
        id = Math.round(Math.random()*100000)
    }
    alert(JSON.stringify(data))
    localStorage.setItem(id, JSON.stringify(data))
    window.location.href = './index.html'
}
history.replaceState({}, "", window.location.pathname)
function updateCollabList() {
    let n = Math.round(document.getElementById('collaborators').value)-1
    let list = document.getElementById('collaborators-list')
    let listLineModel = '<li><input type="text" placeholder="Nome do aluno" class="collaborator-name-input cName"><input type="number" placeholder="Número" class="collaborator-number-input cNumber"></ul>'
    list.replaceChildren()

    for (let i = 0; i <= n; i++){
        list.innerHTML += listLineModel
    }
}

document.getElementById('work-data-form').addEventListener("submit", (e) => {
  const data = new FormData(document.getElementById('work-data-form'))
});