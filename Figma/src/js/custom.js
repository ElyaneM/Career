var open_watch_lmb = document.getElementById("open-watch-list-modal");
var watchlist_modal = document.getElementById("watchlist-modal");
var close_watch_lmb = document.getElementById("close-watchlist");
var left_menu_modal = document.getElementById("left-menu-modal");
var open_left_menu_modal = document.getElementById("open-left-menu-modal");
var arrow_in_left_menu = document.querySelector("#open-left-menu-modal .fa-chevron-down");
var open_sign_in_modal = document.getElementById("open_sign_in_modal");
var close_sign_in_modal = document.querySelector("#sign-in-modal> .cross");
var open_sidebar = document.getElementById("open-sidebar");
var side_bar = document.getElementById("side-bar");

open_watch_lmb.addEventListener("click", function (e) {
    e.preventDefault();
    watchlist_modal.style.display = "flex"
})
close_watch_lmb.addEventListener("click", function (e) {
    watchlist_modal.style.display = "none"
})
open_left_menu_modal.addEventListener("click", function (e) {
    e.preventDefault()
    if (getComputedStyle(left_menu_modal).display == "flex") {
        left_menu_modal.style.display = "none"
        arrow_in_left_menu.style.rotate = '0deg'
    } else {
        left_menu_modal.style.display = "flex"
        arrow_in_left_menu.style.rotate = '180deg'
    }
    
})

open_sign_in_modal.addEventListener("click",function(e){
    e.preventDefault()
    document.getElementById("sign-in-modal-container").style.display = "flex"
    document.body.style.height = "100vh"
    document.body.style.overflow = "hidden"
})
close_sign_in_modal.addEventListener("click",function(e){
    e.preventDefault()
    document.getElementById("sign-in-modal-container").style.display = "none"
    document.body.style.minHeight = "100vh"
    document.body.style.overflowY = "auto"
})
var sideBarOpened = false
open_sidebar.addEventListener("click",function(e){
    e.preventDefault()
    if (!sideBarOpened){
        side_bar.style.left = "-300px"
        
    } else {
        side_bar.style.left = "0px"
    }
    sideBarOpened = !sideBarOpened
})

open_sidebar.click();
