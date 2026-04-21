let i = 0

while(localStorage.getItem(`work${i}`)){
    let work = JSON.parse(localStorage.getItem(`work${i}`));
    if(work.completed){break};
    let date = new Date(work.date);
    document.getElementById('work-list').innerHTML += `<a href="" class="work-frame-wrapper"><div class="work-data-container"><h3 class="work-title title" id="title">${work.title}</h3><p class="work-subject subtitle" id="subject">${work.subject}</p><p class="work-date-display subtitle" id="">${'Para '+date.toLocaleDateString()}</p></div></a>`;

    item.AddEventListener("click", (t) => {
        let popup = document.getElementById('work-options-popup')
        popup.style.left = `${t.clientX}px`
        popup.style.top = `${t.clientY}px`
    })
    i++
};



if(i==0){
    document.getElementById('work-list-overflow').innerHTML += '<div class="empty-display-wrapper"><h5 class="discrete title" style="text-align: center;">Você ainda não tem nenhum trabalho.<br>Crie um novo trabalho e ele aparecerá aqui</h5></div>';
};