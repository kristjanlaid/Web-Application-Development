document.getElementById("dropdown-button").addEventListener("click", function (e) {
    document.getElementById("user-dropdown").classList.toggle("show");
});

window.addEventListener("click", function (event) {
    if (!event.target.matches('.dropdownbtn')) {
        document.querySelectorAll(".dropdown-content.show")
            .forEach(openDropdown => openDropdown.classList.remove('show'))
    }
});
