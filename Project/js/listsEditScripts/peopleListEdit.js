function confirmRegist() {
    event.preventDefault();
    Swal.fire({
        title: "Confirm the edits?",
        text: "",
        icon: "question",
        iconColor: '#113946',
        showCancelButton: true,
        confirmButtonColor: "#3F2305",
        cancelButtonColor: "#BCA37F",
        confirmButtonText: "Yes"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Edit saved!",
                text: "Person has been edited.",
                icon: "success",
                iconColor: '#113946',
                confirmButtonColor: '#3F2305'
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swal.fire({
                title: "Cancelled",
                text: "",
                icon: "error",
                iconColor: '#113946',
                confirmButtonColor: '#3F2305'
            });
        }
    });
}