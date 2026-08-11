 const xhr=new XMLHttpRequest();

 xhr.addEventListener("load",()=>{
   console.log(xhr.response);
 });
 xhr.open("GET","Https://supersimplebackend.dev/images/apple.jpg");
 xhr.send();
 xhr.response