
    let name=document.getElementById("name");
    let Email=document.getElementById("Email");
    let Subject=document.getElementById("Subject");
    let message=document.getElementById("Message");

    let name_error=document.getElementById('name_error');

    // validating items
    form.addEventListener('submit',()=>
    {
        var email_check = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(name.value === '' || name.value == null)
            {
                event.preventDefault();
                name_error.innerHTML = "Name is required";
            }
        if(!Email.value.match(email_check))
            {
                event.preventDefault();
                mail_error.innerHTML = "Valid Email is required";
             }
        if(Subject.value === '' || Subject.value == null)
            {
                event.preventDefault();
                subject_error.innerHTML = "Subject is required";
            }
        if(message.value === '' || message.value == null)
             {
                event.preventDefault();
                message_error.innerHTML = "Message is required";
            }
            
    })




