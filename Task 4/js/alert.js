function customAlert(error) {
    $('#alertModal').modal('toggle')
    $('#alertModal .modal-body').html(`<h3>${error}</h3>`)
}
