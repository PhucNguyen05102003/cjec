$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:3000/data',
        type: 'GET',
        dataType: 'json',
        success: function (data) {  
            console.log(data);
            // $('#rac_huuco').text(data[0].huu_co);
            // $('#rac_taiche').text(data[0].tai_che);
            // $('#rac_nilong').text(data[0].ni_long);
            // $('#rac_chuaphanloai').text(data[0].chua_phanloai);
        },
        error: function (error) {
            console.log('Error:', error);
        }
    });
});