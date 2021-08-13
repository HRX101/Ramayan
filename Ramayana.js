var firebaseConfig = {
    apiKey: "AIzaSyCk-yOIeaXIFX7LjCTQEfwjiPsQQMOel2w",
    authDomain: "ramayana-78168.firebaseapp.com",
    databaseURL: "https://ramayana-78168-default-rtdb.firebaseio.com",
    projectId: "ramayana-78168",
    storageBucket: "ramayana-78168.appspot.com",
    messagingSenderId: "170395780679",
    appId: "1:170395780679:web:feda3a9924f4edb2421362",
    measurementId: "G-40GEQCJPCG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var messagesref=firebase.database().ref('message');
document.getElementById('form').addEventListener('submit',submitform);
function submitform(e){
    e.preventDefault();
    var name=getInputVal('name');
    var email=getInputVal('email');
    var phone=getInputVal('phone');
    var Field=getInputVal('Field');

    
    
    //checkIfUserExists(name);
    savemessage(name,email,phone,Field);
    
    messagesref.on("value", function(snapshot) {
      var nk=getInputVal('email');
      var scores=snapshot.val();
      var keys=Object.keys(scores);
      for(var i=0;i<keys.length-1;i++){
          var k=keys[i];
          var namess=scores[k].email;
          if(namess==nk){
            document.querySelector('.alert2').style.display="block";
            document.querySelector('.alert').style.display="none";
            setTimeout(function(){
              document.querySelector('.alert2').style.display="none";  
          },3000)
          dshow1();
            break;
          
          }
          else{
            document.querySelector('.alert').style.display="block";
            document.querySelector('.alert2').style.display="none";
            setTimeout(function(){
              document.querySelector('.alert').style.display="none";  
          },3000)
          dshow();
        }
      }
    })
    
    
}
function getInputVal(id){
    return document.getElementById(id).value;
}
function savemessage(name,email,phone,Field){
    var messageref1=messagesref.push();

          messageref1.set({
            name:name,
            email:email,
            phone:phone,
            Field:Field
        })
 
}


function userExistsCallback(nam1, exists) {
    if (exists) {
      alert('user ' + nam1 + ' exists!');
    } else {
      alert('user ' + nam1 + ' does not exist!');
    }
}




/*
function checkIfUserExists(userId) {
    messagesref.child(userId).once('value', function(snapshot) {
       console.log(snapshot.val())
        var exists = (snapshot.val() !== null);
      userExistsCallback(userId, exists);
    });
  }
*/

  function reload(){
    window.location.reload();
}
function dshow(){
  document.getElementById("btn").style.display ="block";
}
function dshow1(){
  document.getElementById("btn").style.display ="none";
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function brakechain() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf0c1;";
  setTimeout(function () {
      a.innerHTML = "&#xf127;";
    }, 1000);
}
brakechain();
setInterval(brakechain, 2000);
