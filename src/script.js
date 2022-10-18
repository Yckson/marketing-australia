var lastBtn = 'home';


function changePage(id){
    let btn = document.getElementById(id);
    let page = document.getElementById(`p${id}`);
    let lastButton = document.getElementById(lastBtn);
    let lastPage = document.getElementById(`p${lastBtn}`);
    for (let c = 0; c < btn.classList.length; c++){
        if (btn.classList[c] == 'pSelectionBtn-clicked'){
            return false;
        }
    }
    btn.classList.add('pSelectionBtn-clicked');
    lastButton.classList.remove('pSelectionBtn-clicked');
    page.classList.remove('hide');
    lastPage.classList.add('hide');
    lastBtn = id;
}