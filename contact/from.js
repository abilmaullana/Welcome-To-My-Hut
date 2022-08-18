alert("Selamat Datang")
alert("Get in Touch")

function submitData(){

    

    let name = document.getElementById("name").value
    let phone = document.getElementById("phone").value
    let email = document.getElementById("email").value
    let subject =document.getElementById("subject").value
    let massage =document.getElementById("message").value




    if(name ===""){
        return alert("name wajib di isi!")
    
    }
    else if(phone ===""){
        return alert("phone wajib di isi!")
    }        

    else if(email ===""){
        return alert("email wajib di isi!")
    }
    else if(subject ===""){
        return alert("subject wajib di isi!")
    }
    else if(message ===""){
        return alert("message wajib di isi!")
    }
    
    console.log(name)
    console.log(phone)
    console.log(email)
    console.log(subject)
    console.log(massage)

    // <a href ="mailto:abilmaulana2001@gmail.com.com?subject=hello = pesan">example</a>
    let emailRecaiver = "abilmaullana10@gmail.com"

    let a = document.createElement("a") 
    a.href=`mailto:${emailRecaiver}?subject=${subject}&body= hai selamat pagi nama saya ${name} silakan hubungi melalui email: ${email} dan phone: ${phone} ${massage}`
    a.click()


    

}