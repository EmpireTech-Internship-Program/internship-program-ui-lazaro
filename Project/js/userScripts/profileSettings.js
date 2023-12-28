const profilePic = document.getElementById('profilePic');
const inputFile = document.getElementById('input-file');
const returnButton = document.getElementById('returnButton')

inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}

returnButton.addEventListener('click', function() {
    history.back();
});
