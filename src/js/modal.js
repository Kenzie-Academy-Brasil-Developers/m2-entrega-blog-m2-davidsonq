export class Modal{
    static modal = document.querySelectorAll(".modal")[0].addEventListener("click",this.actionPass)
    static modalErro = document.querySelectorAll(".modal")[1].addEventListener("click",this.actionBack);
    static actionPass(event){
        if (event.target.tagName === "BUTTON") {
            let url = location.href.replace("/src/pages/cadastro.html","/index.html");
            window.location.assign(url);
     }
    }
    static actionBack(event){
         if (event.target.tagName === "BUTTON") {
                event.target.closest(".modal").classList.add("modal--modifere")
         }
    }
    
};