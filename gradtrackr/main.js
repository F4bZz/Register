let i = 0
let e = true

function generateWorkList(){
    while(localStorage.getItem(`work${i}`)){
        let work = JSON.parse(localStorage.getItem(`work${i}`));
        if(true){ //work.state!='deleted'
            e = false
            let date = new Date(work.date);
            document.getElementById('work-list').innerHTML += `<a href="./view.html?wi=${i}" class="work-frame-wrapper"><div class="work-data-container"><h3 class="work-title title" id="title">${work.title}</h3><p class="work-subject subtitle" id="subject">${work.subject}</p><p class="work-date-display subtitle" id="">${'Para '+date.toLocaleDateString()}</p></div></a>`;
        };
        i++
    };
}

generateWorkList()

if(e){
    document.getElementById('work-list-overflow').innerHTML += '<div class="empty-display-wrapper"><h5 class="discrete title" style="text-align: center;">Você ainda não tem nenhum trabalho.<br>Crie um novo trabalho e ele aparecerá aqui</h5></div>';
};