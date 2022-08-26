import {ApiRequest} from "./request.js";

class PaginaLogin {
    static renderizarPaginaLogin (){    
        const emailInput = document.getElementById("emailInput")
        const passwordInput = document.getElementById("passwordInput")
        const btnLogin = document.getElementById("btnLogin")
        
        btnLogin.addEventListener("click" , (e) =>{
            e.preventDefault()
            
            const dados = {
                email: emailInput.value,  
                password : passwordInput.value
            }
            ApiRequest.login(dados)
        })
    }
    static cadastreAqui() {
        const cliqueAqui = document.getElementById("cliqueCadastro")
        cliqueAqui.addEventListener("click", () =>{
            window.location.assign("src/pages/cadastro.html")
        })
    }
}
PaginaLogin.renderizarPaginaLogin()
PaginaLogin.cadastreAqui()