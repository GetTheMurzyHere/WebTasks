function customAlert(error) {
    $('#alertModal').modal('toggle')
    $('#alertModal .modal-body').html(`<h4>${error}</h4>`)
}
