// const form=document.getElementById("form")

// const uname=document.getElementById("uname")

// const email=document.getElementById("email")

// const password=document.getElementById("password")

// const cpassword=document.getElementById("cpassword")

// const tandc=document.getElementById("tc")

// var isValidName = false;
// var isValidEmail = false;
// var isValidPassword = false;
// var isValidCPassword = false;
// var isTCChecked = false

// uname.addEventListener('keyup',checkUserName)
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()//
//     validate()
// })

// function validate(){
//     let nameValue=uname.value.trim()
//     let emailValue=email.value.trim()
//     let passwordValue=password.value.trim()
//     let cpasswordValue = cpassword.value.trim()
//     isValidName = false;
//     isValidEmail = false;
//     isValidPassword = false;
//     isValidCPassword = false;
//     isTCChecked = false

    

    
//     checkUserName()
    
    
//     //email check
//     if(emailValue==='')
//     {
//         setError(email,'Email cannot be empty')
//     }
//     else if(!emailCheck(emailValue)){
//         setError(email,'Enter Valid Email Id')
//     }
//     else{
//         setSuccess(email)
//         isValidEmail=true
//     }

//     //password check
//     if(passwordValue==='')
//     {
//         setError(password,' Password Cannot be Empty')
//     }
//     else if(passwordValue.length<8){
//         setError(password,' Password should be minimum 8 characters')
//     }
//     else{
//         setSuccess(password)
//         isValidPassword=true
//     }

//     //confirm password check
//     if(cpasswordValue==='')
//     {
//         setError(password,'Password Cannot be Empty')
//     }
//     else if(cpassword !==passwordValue){
//         setError(cpassword,'password not matched')
//     }
//     else{
//         setSuccess(cpassword)
//         isValidCPassword=true
//     }

//     //Terms and conditions check
//     if(!tandc.checked){
//         setError(tc,'click on agree terms Checkbox')
//     }
//     else{
//         setSuccess(tc)
//         isTCChecked=true
//     }

//     if(isValidName && isValidEmail && isValidPassword && isValidCPassword && isTCChecked){
    
//         form.submit()
//     }   


//     function emailCheck(input){
//         let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
//         let valid = emailReg.test(input)       
//         return valid
//     }
// }

//     function setError(input,message){
//         let parent=input.parentElement;
//         let small=parent.querySelector('small')
//         small.innerText=message
//         parent.classList.add('error')
//         parent.classList.remove('success')
//     }

//     function setSuccess(input){
//         let parent=input.parentElement;
//         parent.classList.add('success')
//         parent.classList.remove('error')
//     }

//     //user name check
//     function checkUserName(){
//         let nameValue = uname.value.trim()
//         if(nameValue===''){
//             setError(uname,'user name cannot be empty')
//         }
//         else if(nameValue.length<3){
//             setError(uname,'user name should be minimum 3 characters')
//         }
//         else{        
//             setSuccesss(uname)
//             isValidName =true
//         }
//     }

const form = document.getElementById("form")
const uname = document.getElementById("uname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const cpassword = document.getElementById("cpassword")
const tandc= document.getElementById("tc")

var isValidName = false;
var isValidEmail = false;
var isValidPassword = false;
var isValidCPassword = false;
var isTCChecked = false


uname.addEventListener('keyup',checkUserName)
form.addEventListener('submit',(e)=>{

    e.preventDefault()
    validate()
})



function validate(){
    let nameValue = uname.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let cpasswordValue = cpassword.value.trim()
    isValidName = false;
    isValidEmail = false;
    isValidPassword = false;
    isValidCPassword = false;
    isTCChecked = false



   checkUserName()

    //email check
    if(emailValue===''){
        setError(email,'Eamil cannot be empty')
    }  
    else if(!emailCheck(emailValue)){
        setError(email,'Enter Valid Email Id')
    }
    else{        
        setSuccesss(email)
        isValidEmail =true
    }

    
    //Password check

    if(passwordValue===''){
        setError(password,'password cannot be empty')
    }
    else if(passwordValue.length<8){
        setError(password,'password should be minimum 8 characters')
    }
    else{        
        setSuccesss(password)
        isValidPassword = true
    }

      
    //Confirm Password check

    if(cpasswordValue===''){
        setError(cpassword,'password cannot be empty')
    }
    else if(cpasswordValue !==passwordValue){
        setError(cpassword,'passwords not matched')
    }
    else{        
        setSuccesss(cpassword)
        isValidCPassword = true
    }

     //Terms and conditions check

     if(!tandc.checked){
         
        setError(tc,'click on agree terms checkbox')        
    }
    else{
        setSuccesss(tc)
        isTCChecked = true
    }
    

    if(isValidName && isValidEmail && isValidPassword && isValidCPassword && isTCChecked){
    
        form.submit()
    }   


    function emailCheck(input){
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let valid = emailReg.test(input)       
        return valid
    }
}

function setError(input,message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    small.innerText = message
    parent.classList.add('error')
    parent.classList.remove('success')
}
function setSuccesss(input){
    let parent = input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')
}

//User name check
function checkUserName(){
    let nameValue = uname.value.trim()
    if(nameValue===''){
        setError(uname,'user name cannot be empty')
    }
    else if(nameValue.length<3){
        setError(uname,'user name should be minimum 3 characters')
    }
    else{        
        setSuccesss(uname)
        isValidName =true
    }
}

