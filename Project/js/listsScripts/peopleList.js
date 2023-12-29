const openSideBarMenu = document.getElementById('openSideBarMenu');
const closeSideBarMenu = document.getElementById('closeSideBarMenu');
const sideBar = document.getElementById('sideBar');
const header = document.getElementById('header');
const preview = document.querySelectorAll('.preview');
const edit = document.querySelectorAll('.edit');
const mainContent = document.getElementById('mainContent');
const deleteFunction = document.querySelectorAll('.delete');
const darkMode = document.getElementById('darkMode');

function closeMenu() {
    header.style.animation = 'slide 0.5s ease';
    header.style.left = '0';

    mainContent.style.animation = 'mainSlide 0.5s ease';
    mainContent.style.left = '140px';

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

    mainContent.style.animation = 'mainBackSlide 0.5s ease';
    mainContent.style.left = '280px';

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

darkMode.addEventListener('click', function (){
    alert('Dark Mode is not working :(');
});

preview.forEach(preview => {
    preview.addEventListener('click', function () {
        window.location.href = '../../screens/previews/peoplePreview.html';
    });
});

edit.forEach(edit => {
    edit.addEventListener('click', function () {
        window.location.href = '../../screens/listsEdit/peopleListEdit.html';
    });
});

deleteFunction.forEach(deleteFunction => {
    deleteFunction.addEventListener('click', function () {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            iconColor: '#113946',
            showCancelButton: true,
            confirmButtonColor: "#3F2305",
            cancelButtonColor: "#BCA37F",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Person has been deleted.",
                    icon: "success",
                    iconColor: '#113946',
                    confirmButtonColor: '#3F2305'
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swal.fire({
                    title: "Cancelled",
                    text: "Removal cancelled",
                    icon: "error",
                    iconColor: '#113946',
                    confirmButtonColor: '#3F2305'
                });
            }
        });
    });
});