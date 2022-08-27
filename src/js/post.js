import { Api } from "./Api.js"
export class Postagem {
    static button = document.querySelectorAll("button")[1].addEventListener("click",this.callBackButton)
    static async callBackButton(event){
        event.preventDefault()
        const textarea = document.querySelector("textarea")
        const objApi   = {
            "content": textarea.value
          }
          
        let response = await Api.createrPost(objApi)
        console.log(response.message);
        if (!!response.message) {
            return alert("conteúdo é um campo obrigatório; O conteúdo deve ter conteúdo")
        }
        location.reload()
    }
};
