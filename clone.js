//---------------------------------------regular expression---------------------------------------------------
function validateEmail() {
    const emailInput = document.getElementById('emailAddress').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(emailInput)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}
// --------------------------------------------pull down menu--------------------------------------------------
function displayPage(Choice){
page=Choice.options[Choice.selectedIndex].value;
if(page!="")
{
    window.location=page;
}
}

