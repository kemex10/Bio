let btn = document.getElementById('contactButton'); //henter det valgte ID
btn.addEventListener("click", function () {

    let hasErrors = false;

    let name = document.getElementById("contactname"); //henter det valgte ID
    if (!name.value) {
        name.style.border = "2px solid red"
        name.focus();
        hasErrors = true;
        return false;
        //gør feltets kant rød hvis det er tomt, når der trykkes på 'send'
    }

    let email = document.getElementById("contactmail"); //henter det valgte ID
    if (!email.value) {
        email.style.border = "2px solid red"
        email.focus();
        hasErrors = true;
        return false;
        //gør feltets kant rød hvis det er tomt, når der trykkes på 'send'
    }
    let message = document.getElementById("contactDescribe"); //henter det valgte ID
    if (!message.value) {
        message.style.border = "2px solid red"
        message.focus();
        hasErrors = true;
        return false;
        //gør feltets kant rød hvis det er tomt, når der trykkes på 'send'
    }
    if (!hasErrors) {
        document.getElementById("contactform").submit();
        //Lader formularen blive indsent hvis alle felter er udfyldt
    }

});