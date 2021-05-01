form.addEventListener("submit",(event)=>{
    event.preventDefault();
 // console.log(form,username,Email,password,cpassword,tel)
  validate();
})


const validate = () => {
    const form=document.getElementById("form")
const username=document.getElementById("username").value.trim();
const Email=document.getElementById("Email").value.trim();
const password=document.getElementById("password").value.trim();
const cpassword=document.getElementById("cpassword").value.trim();
const tel=document.getElementById("tel").value.trim();
var a=0;
nvalidate();
evalidate();
ephone();
epassword();
ccpassword();
success(username);
function nvalidate(){
if(username === "")
{
    
    const  msg=document.getElementById("msg")

    msg.innerHTML="Username cannot be empty"
   var k= msg.style.visibility="visible";
   const  msgg=document.getElementById("1")
   msgg.style.visibility="visible";
   msgg.style.color="red";
   const  msggg=document.getElementById("2")
    msggg.style.visibility="hidden";

}

else if(username.length <=10)
{
    const  msg=document.getElementById("msg")
  
    msg.innerHTML="Username must be greater than 10 characters"
   var k= msg.style.visibility="visible";
   const  msgg=document.getElementById("1")
   console.log(msgg)
   msgg.style.visibility="visible";
   msgg.style.color="red";
   const  msggg=document.getElementById("2")
    msggg.style.visibility="hidden";

}



else{
    const  msgg=document.getElementById("2")
    console.log(msgg)
    msgg.style.visibility="visible";
    msgg.style.color="green";
    const  msg=document.getElementById("msg")
  a=a+1;
    msg.innerHTML="Username cannot be empty"
   var k= msg.style.visibility="hidden";
   const  msggg=document.getElementById("1")
   msggg.style.visibility="hidden";
   msggg.style.color="red";
   console.log(a);

}
}



function evalidate(){

if(Email === "")
{
    const  msg=document.getElementById("emsg")
  
    msg.innerHTML="email cannot be empty"
   var k= msg.style.visibility="visible";
   const  msgg=document.getElementById("3")
   msgg.style.visibility="visible";
   msgg.style.color="red";
   const  msggg=document.getElementById("4")
    msggg.style.visibility="hidden";


}


else if(Email.length <= 10)
{
    const  msg=document.getElementById("emsg")
  
    msg.innerHTML="email is invalid"
   var k= msg.style.visibility="visible";
   const  msgg=document.getElementById("3")
   msgg.style.visibility="visible";
   msgg.style.color="red";
   const  msggg=document.getElementById("4")
    msggg.style.visibility="hidden";


}



else{
    const  msgg=document.getElementById("4")
    msgg.style.visibility="visible";
    msgg.style.color="green";
    const  msg=document.getElementById("emsg")
   msg.style.visibility="hidden";
   const  msggg=document.getElementById("3")
   msggg.style.visibility="hidden";
   msggg.style.color="red";
   a=a+1;
   console.log(a);

}

}

function ephone(){
    
if(tel === "")
{
    const  msg=document.getElementById("eemsg")
  
    msg.innerHTML="number cannot be empty"
   var k= msg.style.visibility="visible";
   const  msgg=document.getElementById("5")
   msgg.style.visibility="visible";
   msgg.style.color="red";
   const  msggg=document.getElementById("6")
    msggg.style.visibility="hidden";


}

else if(tel.length != 10)
{
    const  msg=document.getElementById("eemsg")
  
    msg.innerHTML="number must have 10 numerical digits"
   var k= msg.style.visibility="visible";
   const  msgg=document.getElementById("5")
   msgg.style.visibility="visible";
   msgg.style.color="red";
   const  msggg=document.getElementById("6")
    msggg.style.visibility="hidden";

}


else{
    const  msgg=document.getElementById("6")
    console.log(msgg)
    msgg.style.visibility="visible";
    msgg.style.color="green";
    const  msg=document.getElementById("eemsg")
  
    msg.innerHTML="Username cannot be empty"
   var k= msg.style.visibility="hidden";
   const  msggg=document.getElementById("5")
   msggg.style.visibility="hidden";
   msggg.style.color="red";
   a=a+1;
   console.log(a);

}
}

function epassword(){
    
    if(password === "")
    {
        const  msg=document.getElementById("eeemsg")
      
        msg.innerHTML="password cannot be empty"
       var k= msg.style.visibility="visible";
       const  msgg=document.getElementById("7")
       msgg.style.visibility="visible";
       msgg.style.color="red";
       const  msggg=document.getElementById("8")
        msggg.style.visibility="hidden";
    
    
    }
    
    else if(password.length <= 10)
    {
        const  msg=document.getElementById("eeemsg")
      
        msg.innerHTML="password must be greater than 10 characters"
       var k= msg.style.visibility="visible";
       const  msgg=document.getElementById("7")
       msgg.style.visibility="visible";
       msgg.style.color="red";
       const  msggg=document.getElementById("8")
        msggg.style.visibility="hidden";
    
    }
    
    
    else{
        const  msgg=document.getElementById("8")
        console.log(msgg)
        msgg.style.visibility="visible";
        msgg.style.color="green";
        const  msg=document.getElementById("eeemsg")
      
        msg.innerHTML="Username cannot be empty"
       var k= msg.style.visibility="hidden";
       const  msggg=document.getElementById("7")
       msggg.style.visibility="hidden";
       msggg.style.color="red";
       a=a+1;
       console.log(a);
    }
    }


    function ccpassword(){
    
        if(cpassword === "")
        {
            const  msg=document.getElementById("eeeemsg")
          
            msg.innerHTML="u need to enter password to verify"
           var k= msg.style.visibility="visible";
           const  msgg=document.getElementById("9")
           msgg.style.visibility="visible";
           msgg.style.color="red";
           const  msggg=document.getElementById("10")
            msggg.style.visibility="hidden";
        
        
        }
        
        else if(password != cpassword)
        {
            const  msg=document.getElementById("eeeemsg")
          
            msg.innerHTML="password did not match"
           var k= msg.style.visibility="visible";
           const  msgg=document.getElementById("9")
           msgg.style.visibility="visible";
           msgg.style.color="red";
           const  msggg=document.getElementById("10")
            msggg.style.visibility="hidden";
        
        }
        
        
        else{
            const  msgg=document.getElementById("10")
            console.log(msgg)
            msgg.style.visibility="visible";
            msgg.style.color="green";
            const  msg=document.getElementById("eeeemsg")
          
            msg.innerHTML="Username cannot be empty"
           var k= msg.style.visibility="hidden";
           const  msggg=document.getElementById("9")
           msggg.style.visibility="hidden";
           msggg.style.color="red";
           a=a+1;
   console.log(a);
        
        }
        }

        function success(username){
           if(a==5){
            document.getElementById("body").style.backgroundColor="green"
            alert("welcome " +username+" registration success");
            document.getElementById("form").reset();
           }
        }
    }






 
   /* setTimeout(p, 3000);
    
    function p(){
    document.body.style.backgroundImage="url('https://steamuserimages-a.akamaihd.net/ugc/392174704174292655/E098E48F1214C7C747707AEE2B67FC290AFF251B/')";
    setTimeout(c, 3000);
    }
    
    
    function c(){
    document.body.style.backgroundImage="url('https://i.pinimg.com/originals/e5/4c/b4/e54cb409a6ee19a9c89c4ee1d5e5658f.gif')";
    setTimeout(p, 3000);
    }*/
    
    
   /* function k(){
        document.getElementById("1").style.backgroundImage="url('https://i.gifer.com/Rc45.gif')";
        setTimeout(d, 3000);
        }
    
        
    function d(){
        document.getElementById("1").style.backgroundImage="url('https://i.pinimg.com/originals/5f/ee/45/5fee4571f32a803f260914810ae46c1a.gif')";
        setTimeout(p, 3000);
        }*/
    