//document.write("<h2 style='color:blue'>javascript rules!</h2>");
//document.write("<hr>");
//alert("this file is working");
function validateForm(e) {
    e.preventDefault()
    var name = document.loginForm.name.value
    var password = document.loginForm.password.value
   if (name.length==0)
    return alert(`name is required`)
   if (password.length<5)
    return alert(`password length should more than 5`)
   }