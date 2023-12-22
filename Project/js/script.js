const hiddenContainer = document.getElementById('hidden-container');
const container = document.getElementById('container');
const toggleContainer = document.getElementById('toggle-container');

function showHiddenContainer() {
    hiddenContainer.style.opacity = '1';
    hiddenContainer.style.zIndex = '5';
    hiddenContainer.style.animation = 'fadeOutSlide 0.6s ease';

    toggleContainer.style.animation = 'hideSlideRightToCenter 0.6s ease';
    toggleContainer.style.visibility = 'hidden';

    container.style.opacity = '0';
    container.style.zIndex = '0';
    container.style.animation = 'hideSlideLeftToCenter 0.6s ease';
}

function loginReturn() {
    hiddenContainer.style.animation = 'hideSlide 0.6s ease';
    hiddenContainer.style.opacity = '0';
    hiddenContainer.style.zIndex = '0';

    toggleContainer.style.visibility = 'visible';
    toggleContainer.style.animation = 'backSlideHiddenToRight 0.6s ease';
    toggleContainer.style.zIndex = '1';
    
    container.style.opacity = '1';
    container.style.animation = 'backSlideHiddenToLeft 0.6s ease';
    container.style.zIndex = '2';
}