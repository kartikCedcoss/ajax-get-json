$(document).ready(function(){
    $('#btn').on('click',function(){
        $.ajax({
            url : "https://jsonplaceholder.typicode.com/posts",
            type: "GET",
            datatype : "JSON",
            success : function(dataget){
                $.each(dataget,function(key,value) {
                    $('#display').append(value.id+"<br> "+value.title+"<br> "+value.body+ "<br><br>");
                })
            }
        })
    })
})