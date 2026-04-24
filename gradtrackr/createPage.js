const params = new URLSearchParams(window.location.search);
let collab

if (!localStorage.getItem('works')){
    localStorage.setItem('works', '{}')
}

if(params.get('title')){
    let id = Math.round(Math.random()*100000)
    let works = JSON.parse(localStorage.getItem('works'))
    let data = {
        'title': params.get('title'),
        'subject': params.get('subject'),
        'creator': 'guest',
        'date': params.get('date'),
        'collab': '',
        'description': params.get('description'),
        'state': 'pending'
    }
    
    let i = 0
    while(localStorage.getItem(`work${i}`)){
        i++
    }

    localStorage.setItem(`work${i}`, JSON.stringify(data))
    window.location.href = './index.html'
}

history.replaceState({}, "", window.location.pathname)

function updateCollabList(t) {
    let n = Math.round(document.getElementById('collaborators').value)-1
    let list = document.getElementById('collaborators-list')
    let listLineModel = '<li><input style="width: 80%; border-top-right-radius: 0; border-bottom-right-radius: 0;" type="text" placeholder="Nome do aluno" class="collaborator-name-input cName" oninput="updateCollabList(false)"><input style="width: 20%; border-top-left-radius: 0; border-bottom-left-radius: 0;" type="number" placeholder="Número" class="collaborator-number-input cNumber" oninput="updateCollabList(false)"></ul>'
    
    
    if(t){
        collab = {}
        list.replaceChildren()
        for (let i = 0; i <= n; i++){
            list.innerHTML += listLineModel
        }
    } else {
        for (let i = 0; i <= n; i++){
            collab+={name: document.getElementsByClassName('collaborator-number-input')[i].value, number: document.getElementsByClassName('collaborator-name-input')[i].value}
        }
        alert(collab)
    }
    
}

