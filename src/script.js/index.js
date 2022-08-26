import {ApiRequest} from "./request.js";

class PaginaLogin {
    static renderizarPaginaLogin (){
        const token = localStorage.getItem("@blogKenzie:token")

        if(token) {
            window.location.assign("src/pages/home.html")
        }
        const emailInput = document.getElementById("emailInput")
        const passwordInput = document.getElementById("passwordInput")
        const btnLogin = document.getElementById("btnLogin")

        btnLogin.addEventListener("click" , (e) =>{
            e.preventDefault()

            const dados = {
                email: emailInput.value,  
                passwordInput : passwordInput.value
            }
            ApiRequest.login(dados)
        })
    }
    static cadastreAqui() {
        const cliqueAqui = document.getElementById("cliqueCadastro")
        cliqueAqui.addEventListener("click", () =>{
            window.location.assign("src/pages/home.html")
        })
    }
}
PaginaLogin.renderizarPaginaLogin()
PaginaLogin.cadastreAqui()