$(document).ready(function () {
    $('img').on('click', function () {
        var image = $(this).attr('src');
        //alert(image);
        $('#myModal').on('show.bs.modal', function () {
            $(".showimage").attr("src", image);
        });
    });
});




$(document).ready(function(){
    $('.notify').change(function(){
        if(this.checked){
            $('.reveal').show()
        }else{
            $('.reveal').hide()
        }
    })
});