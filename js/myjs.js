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
    $('#logApp').change(function(){
        if(this.checked){
            $('#logAppDisplay').show()
        }else{
            $('#logAppDisplay').hide()
        }
    })
    $('#logSite').change(function(){
        if(this.checked){
            $('#logSiteDisplay').show()
        }else{
            $('#logSiteDisplay').hide()
        }
    })
    $('.companySettings').change(function(){
        if(this.checked){
            $('.deduct').hide()
        }else{
            $('.deduct').show()
        }
    })
    $('#show').change(function(){
        if(this.checked){
            $('.limitedPermission').show()
        }else{
            $('.limitedPermission').hide()
        }
    })
    $('#hide').change(function(){
        if(this.checked){
            $('.limitedPermission').hide()
        }
    })
});