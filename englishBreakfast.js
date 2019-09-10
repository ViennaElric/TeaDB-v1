window.onload = function load() {
  //document.write("JavaScript here!");

}
function mrbutton(){
  $.get("https://tea-adventure.firebaseio.com/teas/englishBreakfast", function( data ) {
    var ted = JSON.stringify(data);
    document.write("Data Loaded" + ted);
  });


}
