import { Api } from "./Api.js";
export class Deletar {
    static capturarDados(id){
        const  modal    = document.querySelectorAll(".modal")[3].addEventListener("click",deletarPost)
        
     async  function   deletarPost(event){
            if (event.target.tagName === "BUTTON") {
                 await Api.deletar(id);  
                 location.reload()
            };
        };
    };
};
