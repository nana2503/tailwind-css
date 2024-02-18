const topMenu = document.getElementById('top-menu')
const topMenuIcon = document.getElementById('toggle-menu-icon')
document.addEventListener('click', (e) => {
    if (topMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('ct-top-menu-expand')
    } else {
        if(topMenu.classList.contains('ct-top-menu-expand')) {
            topMenu.classList.remove('ct-top-menu-expand')
            topMenu.classList.add('hidden')
        }
    }
})