const params = new URLSearchParams(window.location.search);
if(!params.get('wi')){window.location.href = './'}

let wi = params.get('wi')
let data = JSON.parse(localStorage.getItem(`work${wi}`))



function deleteCurrentWork(){
    const c = confirm(`Você tem certeza de que quer deletar esse trabalho? (Essa ação pode ser revertida)`)
    if(c){
        data.state = 'deleted'
        localStorage.setItem(`work${wi}`, JSON.stringify(data))
        window.location.href = './index.html'
    } else {
        return
    }
}

function submitCurrentWork(){
    const c = confirm(`Você realmente completou esse trabalho?`)
    if(c){
        data.state = 'completed'
        localStorage.setItem(`work${wi}`, JSON.stringify(data))
        window.location.href = './index.html'
    } else {
        return
    }
}

function clip(){
    let d = data
    d.state = 'pending'
    navigator.clipboard.writeText(JSON.stringify(d))
    alert('Texto Copiado!')
}

document.title = `Visualizando ${data.title}`
document.getElementById('title-display').innerText = data.title
document.querySelector('.header-title').innerText = data.title
document.getElementById('creator-display').innerText = 'Anônimo'
document.getElementById('subject-display').innerText = data.subject
document.getElementById('date-display').innerText = new Date(data.date).toLocaleDateString()
document.getElementById('description-display').innerText = data.description

switch(data.state){
    case 'completed':
        document.getElementById('state-display').innerText = 'Completo'
        document.getElementById('state-display').style.color = 'rgb(78, 185, 78)'
        document.querySelector('footer').remove()
    break

    case 'deleted':
        document.getElementById('state-display').innerText = 'Excluído'
        document.getElementById('state-display').style.color = 'rgb(185, 78, 78)'
        document.querySelector('footer').remove()
    break
    case 'pending':
        document.getElementById('state-display').innerText = 'Pendente'
    break
    case 'lost':
        document.getElementById('subject-display').innerText = 'Fora do prazo'
        document.getElementById('state-display').style.color = 'rgb(185, 78, 78)'
        document.querySelector('footer').remove()
    break
}

if(data.description.length<1){
    document.getElementById('description-display').innerText = '<Vazio>'
}
