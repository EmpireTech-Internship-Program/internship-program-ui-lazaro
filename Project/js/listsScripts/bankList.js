const preview = document.querySelectorAll('.preview');

preview.forEach(preview => {
    preview.addEventListener('click', function () {
        window.location.href = '../../screens/previews/bankPreview.html';
    });
});