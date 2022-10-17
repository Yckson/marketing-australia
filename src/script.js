var lastPage = ;


function changePage(id){
    let btn = document.getElementById(id);
    let page = document.getElementById(`p${id}`)
    for (let c = 0; c < btn.classList.length; c++){
        if (btn.classList[c] == 'pSelectionBtn-clicked'){
            return false;
        }
    }
    btn.classList.add('pSelectionBtn-clicked');
    page.classList
    
}