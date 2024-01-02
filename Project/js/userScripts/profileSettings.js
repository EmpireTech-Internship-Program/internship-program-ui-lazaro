const profilePic = document.getElementById('profilePic');
        const inputFile = document.getElementById('input-file');
        const returnButton = document.getElementById('returnButton');
        const confirmUpdateButton = document.getElementById('confirmUpdateButton');
        
        inputFile.onchange = function () {
        profilePic.src = URL.createObjectURL(inputFile.files[0]);
        }

        returnButton.addEventListener('click', function () {
            history.back();
        });

        function confirmUpdate() {
            console.log(inputFile.files);

            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                denyButtonColor: '#113946',
                showCancelButton: true,
                cancelButtonColor: '#BCA37F',
                confirmButtonText: "Save",
                confirmButtonColor: '#3F2305',
                denyButtonText: `Don't save`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Saved!",
                        icon: "success",
                        iconColor: '#113946',
                        confirmButtonColor: '#3F2305'
                    });
                    return true;
                } else if (result.isDenied) {
                    Swal.fire({
                        title: "Changes are not saved",
                        icon: "info",
                        iconColor: '#113946',
                        confirmButtonColor: '#3F2305'
                    });

                    return false;
                }
            });

            return false;
        }