window.onload = function load() {
  //document.write("JavaScript here!");

}
function mrbutton(){
  $.get("https://tea-adventure.firebaseio.com/teas.json", function( data ) {
    var ted = JSON.stringify(data);
    document.write("Data Loaded" + ted);
  });


}

// $.ajax({
//             cache: false,
//             type: "GET",
//             async: false,
//             data: {},
//             url: http:xxxxxxxxxxxx.svc/webBinding/Result?metaTag=" + meta,
//             contentType: "application/json; charset=utf-8",
//             dataType: "json",
//             crossDomain: true,
//             success:function(result){},
//             error: function(){alert(err);}
//  });
