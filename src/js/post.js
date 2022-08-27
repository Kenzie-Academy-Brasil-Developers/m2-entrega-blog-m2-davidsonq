import { ApiRequest } from "../script/request.js"
// import { Modal } from "./modal.js";
export class Postagem {
    static button = document.querySelectorAll("button")[3].addEventListener("click",this.callBackButton)
    static async callBackButton(event){
        event.preventDefault()
        const textarea = document.querySelector("textarea")
        const objApi   = {
            "content": textarea.value
          }
          
        let response = await ApiRequest.criarPostagem(objApi)
        if (!!response.message) {
        let modalErro = document.querySelector(".modal") ;
          return modalErro.classList.remove("modal--modifere") ;
        }
        location.reload()
    }
};
