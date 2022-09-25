function toggleExp(el) {
    if (el.classList.contains("expanded")) {
        el.classList.remove("expanded");
    } else {
        el.classList.add("expanded");
    }
}

function togglePage(el, page) {
    if (el.classList.contains("selected")) {

    } else {
        for (let element of document.getElementsByClassName("page selected")) {
            element.classList.remove("selected");
        }
        for (let i = 1; i <= 3; i++) {
            if (page !== i) {
                document.getElementsByClassName("page" + i)[0].classList.remove("selected");
            } else {
                document.getElementsByClassName("page" + i)[0].classList.add("selected");
            }
        }
        el.classList.add("selected");

    }
}

function openMenu() {
    const menu = document.getElementsByClassName("menu")[0];
    if (menu.classList.contains("expanded")) {
        menu.classList.remove("expanded");
    }else{
        menu.classList.add("expanded")
    }
}