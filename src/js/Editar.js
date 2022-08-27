import { Api } from "./Api.js"
export class Editar {
    static capturarDados(id){
        const  modal    = document.querySelectorAll(".modal")[2].addEventListener("click",enviarEdicao)
        
     async  function   enviarEdicao(event){
            if (event.target.tagName === "BUTTON") {
                let textarea = event.target.parentElement.children[0].children[1].children[0];
                let data = {
                    "content": `${textarea.value}`
                  };
                  
                 await Api.editarPost(id,data);  
            };
        };
    };
};