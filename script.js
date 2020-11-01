// Project Name > Motorhive Websites
// Project Description > This is a static webpage which has the main function of selling cars online
// Author > Nkululeko Mbhele
// Date Started  > 29 October 2020
// Date Completed > 1 November 2020
// Comment > "It was a tough project because it was my first real world fictional project."








var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var search = document.getElementsByClassName("searchBar-2");
var menu = document.getElementById("menu");

sideNav.style.right = "-100%";
// search.style.display = "none";

menuBtn.onclick = function() {
    if (sideNav.style.right == "-100%") {
        sideNav.style.right = "0";
        menu.src = "Image/close.png";
        // search.style.display = "none";


    } else {

        sideNav.style.right = "-100%"
        menu.src = "Image/menu.png";
        // search.style.display = "flex";
    }
}