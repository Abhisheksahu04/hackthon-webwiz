var items = document.querySelectorAll(".timeline_container li");

function isElementInViewport(item) {
    var rect = item.getBoundingClientRect();
    if (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight) &&
        rect.right <= (window.innerWidth)
    ) return true;
    else return false;
}

function showDiv() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            if (!items[i].classList.contains("in-view")) {
                items[i].classList.add("in-view");
            }
        } else if (items[i].classList.contains("in-view")) {
            items[i].classList.remove("in-view");
        }
    }
}

window.addEventListener("load", showDiv);
window.addEventListener("scroll", showDiv);
