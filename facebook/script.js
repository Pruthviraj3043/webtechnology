function validation()
{
    let fname=document.getElementsByName('email')[0].value
    let fpassword=document.getElementsByName('password')[0].value
    if(fname === ""||fname === null)
    {
        let x=document.getElementsByName('email')
        x[0].style.border="solid 1px red"

        let y=document.getElementsByClassName('emailtext')
        y[0].innerText="This feild is empty! please fill it by email"
        y[0].style.color="red"
        return false;
    }
    else if(fpassword === "" || fpassword === null)
    {
        let x1=document.getElementsByName('password')
        x1[0].style.border="solid 1px red"

        let y1=document.getElementsByClassName('passwordtext')
        y1[0].innerText="This feild is empty! Please fill it by password"
        y1[0].style.color="red"
        return false;
    }

}