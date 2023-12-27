const profilePic = document.getElementById('profilePic');
const inputFile = document.getElementById('input-file');

inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}