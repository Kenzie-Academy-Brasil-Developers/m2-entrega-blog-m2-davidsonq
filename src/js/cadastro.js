import { Api } from "./Api.js";
import { Modal } from "./modal.js";
class Cadastro {
    static button = document.querySelectorAll("button")[2].addEventListener("click", this.registarEnvio);
    static span   = document.querySelector("span").addEventListener("click",this.voltarLogin)
    static  async registarEnvio(event) {
        event.preventDefault();
        const inputs = document.querySelectorAll("input");
        const objCadastro = {
            "username": inputs[0].value,
            "email": inputs[1].value,
            "avatarUrl": inputs[2].value,
            "password": inputs[3].value
        };

        let modalErro = document.querySelectorAll(".modal")[1] ;
        let modal = document.querySelectorAll(".modal")[0];

        for (const key in objCadastro) {
           if (!objCadastro[key]) {
            return modalErro.classList.remove("modal--modifere") ; 
           };
        };

        let resposta = await Api.cadastrarUser(objCadastro);

        if(!!resposta.id){
            return modal.classList.remove("modal--modifere") ;
        }else{
            return modalErro.classList.remove("modal--modifere") ; 
        };

    };
    static voltarLogin(){
        let url = location.href.replace("/src/pages/cadastro.html","/index.html");
        window.location.assign(url);
    };
};  
Cadastro.span
Cadastro.button