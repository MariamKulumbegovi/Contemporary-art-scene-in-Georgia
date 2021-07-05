let mainicon=document.getElementById('mainicon')
let riabidicon=document.getElementsByClassName('riabidicon')


  $(mainicon).hover(function () {
    $( riabidicon ).addClass( "riabidiconshow" );
          
      }, function () {
        $( riabidicon).removeClass( "riabidiconshow" );
      }
  );


let subscribebtn=document.getElementById('subscribebtn')
let emailinput=document.getElementById('email')

subscribebtn.addEventListener('click',function () {
    console.log(emailinput.value)
    emailinput.value=""
    

})

let photohover=document.getElementById('photo')

$(photohover).hover(function () {
    $( this ).addClass( "riabidiconshow" );
          
      }, function () {
        $( this).removeClass( "riabidiconshow" );
      }
  );