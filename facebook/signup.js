function signup()
{
    let fname=document.getElementsByName("FirstName") [0].value;
    let lname=document.getElementsByName("LastName") [0].value;
    let femail=document.getElementsByName('email')[0].value
    let fpassword=document.getElementsByName('password')[0].value
    let gender=document.getElementsByName('sex')[0].value
    if(fname === ""||fname === null)
    {
        let a=document.getElementsByName('FirstName')
        a[0].style.border="solid 1px red"

        return false;
    }
    else if(lname === ""||lname === null)
    {
        let b=document.getElementsByName('LastName')
        b[0].style.border="solid 1px red"

        return false;
    }
    else if(femail === ""||femail === null)
    {
        let x=document.getElementsByName('email')
        x[0].style.border="solid 1px red"

        return false;
    }
    else if(fpassword === "" || fpassword === null)
    {
        let x1=document.getElementsByName('password')
        x1[0].style.border="solid 1px red"

        return false;
    }
    else if(gender === "" || gender === null)
    {
        let x1=document.getElementsByName('sex')
        x1[1].style.border="solid 1px red"

        return false;
    }

}
