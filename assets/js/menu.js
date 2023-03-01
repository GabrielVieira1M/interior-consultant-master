let btn = document.getElementById('btn')
let menu = document.getElementById('menu')
btn.addEventListener('click', function() {
  if(menu.classList.contains('menuOpened') === true) {
    closeMenu(menu)
    btn.setAttribute('src', 'assets/images/menu-opened.svg')
    menu.classList.add('menuClosed')
  }else {
    closeMenu(menu)
    btn.setAttribute('src', 'assets/images/menu-closed.svg')
    menu.classList.add('menuOpened')
  }
})

function closeMenu(menu) {
  menu.classList.remove('menuOpened')
  menu.classList.remove('menuClosed')
}