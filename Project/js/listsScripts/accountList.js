const openSideBarMenu = document.getElementById('openSideBarMenu');
const closeSideBarMenu = document.getElementById('closeSideBarMenu');
const sideBar = document.getElementById('sideBar');
const header = document.getElementById('header');
const preview = document.querySelectorAll('.preview');
const edit = document.querySelectorAll('.edit');

function closeMenu() {
    header.style.animation = 'slide 0.5s ease';
    header.style.left = '0';

    sideBar.style.animation = 'shrink 0.5s ease';
    sideBar.style.width = '0';

    closeSideBarMenu.style.animation = 'transition1 0.5s ease';
    closeSideBarMenu.style.opacity = '0';
    closeSideBarMenu.style.pointerEvents = 'none';
    closeSideBarMenu.style.display = 'none ease';

    openSideBarMenu.style.display = 'inline-block';
    openSideBarMenu.style.opacity = '1';
    openSideBarMenu.style.animation = 'transition2 0.5s ease';
}

function openMenu() {
    header.style.animation = 'backSlide 0.5s ease';
    header.style.left = '280px';

    sideBar.style.animation = 'expand 0.5s ease';
    sideBar.style.width = '280px';

    openSideBarMenu.style.animation = 'transition1 0.5s ease';
    openSideBarMenu.style.opacity = '0';
    openSideBarMenu.style.display = 'none';

    closeSideBarMenu.style.opacity = '1';
    closeSideBarMenu.style.display = 'inline-block ease';
    closeSideBarMenu.style.animation = 'transition2 0.5s ease';
    closeSideBarMenu.style.pointerEvents = 'auto';
}

preview.forEach(preview => {
    preview.addEventListener('click', function () {
        window.location.href = '../../screens/previews/accountPreview.html';
    });
});

edit.forEach(edit => {
    edit.addEventListener('click', function () {
        window.location.href = '../../screens/listsEdit/bankListEdit.html';
    });
});