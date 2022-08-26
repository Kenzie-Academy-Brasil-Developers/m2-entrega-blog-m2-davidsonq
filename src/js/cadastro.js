import { Api } from "./Api.js";
class Cadastro {
    static button = document.querySelector("button").addEventListener("click", this.registarEnvio);
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
        for (const key in objCadastro) {
           if (!objCadastro[key]) {
              return  alert("Preencha os campos corretamente!");
           };
        };
        let resposta = await Api.cadastrarUser(objCadastro);
        if(!!resposta.id){
                alert("Cadastro completo!");
                let url = location.href.replace("/src/pages/cadastro.html","/index.html");
                window.location.assign(url);
        }else{
            if (resposta.message.includes("password")) {
                return alert("A senha deve ter pelo menos seis dígitos, uma letra maiúscula e um número")
            }
            alert(`Um usuário com o mesmo nome de usuário já está registrado`);
        };

    };
    static voltarLogin(){
        let url = location.href.replace("/src/pages/cadastro.html","/index.html");
        window.location.assign(url);
    };
};  
Cadastro.span
Cadastro.button