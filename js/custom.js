function login_usu(){
    usuario = document.getElementById("l_nombre");
    contra = document.getElementById("l_contra");
    if (usuario.value == "gabriel" && contra.value == "gabri123"){
        window.location = "dash.html";
    }
    else{
        alert(`Usuario ${usuario.value} y contraseña  ${contra.value} incorrecta`);
    }
}

