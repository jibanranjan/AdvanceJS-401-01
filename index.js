function submit(){
    var temp = document.getElementById("name").value;
    var greeting= temp ;
    var para= document.getElementsByTagName("p");
    para[0].innerHTML= greeting;
}