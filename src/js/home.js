import { Api } from "./Api.js";
import {Postagem} from "./post.js";
import { Modal } from "./modal.js";
import { Editar } from "./Editar.js";
import { Deletar } from "./Deletar.js";

export class RendHome{
    static ul        = document.querySelector(".secao__lista");
    static limparUl (){
        this.ul.innerHTML = "";
    };
    static async creatElement(objApi){
        if (!localStorage.getItem("@blogKenzie:token")) {
            let url = location.href.replace("/src/pages/home.html","/index.html");
            window.location.assign(url);
        };
        this.limparUl()
        objApi.data.forEach(el => {
            const li             = document.createElement("li");
            const figure         = document.createElement("figure");
            const img            = document.createElement("img");
            const figcaption     = document.createElement("figcaption");
            const p              = document.createElement("p");
            const span           = document.createElement("span");
            const div            = document.createElement("div");
            const button1        = document.createElement("button");
            const button2        = document.createElement("button");
            const imgEdit        = document.createElement("img");
            const imgDelet       = document.createElement("img");
            let tratamentoData   = el.createdAt.replace("T00:00:00.000Z","").split("-").reverse().join("-");
            
            img.src              = `${el.user.avatarUrl}`;
            img.alt              = `Foto de Perfil`;
            figcaption.innerText = `${el.user.username}`;
            p.innerText          = `${el.content}`;
            span.innerText       =`${tratamentoData}`;
            div.classList.add("secao__lista-divHiden");
            if (el.user.id == localStorage.getItem("@blogKenzie:Usuario_Id")) {
                div.classList.add("secao__lista__div")
            }
            imgEdit.src          = "../img/edit 1.png";
            imgEdit.alt          = "edit";
            imgDelet.src         = "../img/trash-bin 1.png";
            imgDelet.id          = "trash";
            imgDelet.alt         = "trash";

            button1.addEventListener("click",(event) => {
                event.preventDefault();
                const texto    = event.currentTarget.parentElement.parentElement.children[1].innerText;
                const modal    = document.querySelectorAll(".modal")[2];
                let textarea   = modal.children[1].children[0].children[1].children[0];
                console.log(textarea);
                textarea.value = texto;
                modal.classList.remove("modal--modifere") ; 
                Editar.capturarDados(el.id);
            });
            button2.addEventListener("click",(event) => {
                event.preventDefault();
                const modal = document.querySelectorAll(".modal")[3]
                modal.classList.remove("modal--modifere");
                Deletar.capturarDados(el.id);
            });

            button2.appendChild(imgDelet);
            button1.appendChild(imgEdit);
            div.append(button1,button2);
            figure.append(img,figcaption);
            li.append(figure,p,span,div);
            this.ul.appendChild(li);
        });
        const setinha1     = document.querySelectorAll(".footer__setinha")[0];
        const setinha2     = document.querySelectorAll(".footer__setinha")[1];
        const pagina       = document.querySelector(".footer__pagina")

        pagina.innerText   = Number(objApi.nextPage.replace("page=","")) - 1
            if (!!objApi.previousPage) {
                setinha1.innerText = "<";
            }else{
                setinha1.innerText = "";
            };
            if (!!objApi.nextPage) {
                setinha2.innerText = ">";
            } else {
                setinha2.innerText = "";
            };            
            setinha1.id    = objApi.previousPage;
        
        setinha2.id        = objApi.nextPage;
    };
    static voltarPagina     = document.querySelectorAll(".footer__setinha")[0].addEventListener("click",async () => {
        RendHome.creatElement(await Api.rendPost(document.querySelectorAll(".footer__setinha")[0].id));
    });
    static proximaPagina     = document.querySelectorAll(".footer__setinha")[1].addEventListener("click",async () =>{
        RendHome.creatElement(await Api.rendPost(document.querySelectorAll(".footer__setinha")[1].id));
    });   
    static perfilRend(objApi){
        const figure      = document.querySelector(".cabecalho__figure");
        const imgPerfil   = figure.children[0];
        const usuario     = figure.children[1];
        imgPerfil.src     = objApi.avatarUrl;
        usuario.innerText = objApi.username;
    };
    static callLogout(){
        const cabecalho = document.querySelector(".cabecalho").addEventListener("click",(event) =>{
             if (event.target.tagName === "BUTTON") {
                localStorage.removeItem("@blogKenzie:Usuario_Id");
                localStorage.removeItem("@blogKenzie:token");
                let url = location.href.replace("src/pages/home.html","index.html");
                window.location.assign(url);
             };
        });
    };
    static modalFechar = document.querySelectorAll(".modal__fechar")[0].addEventListener("click",this.callFechar);
    static modalFechar2 = document.querySelectorAll(".modal__fechar2")[0].addEventListener("click",this.callFechar);
    static callFechar(event){
        event.preventDefault()

        const modal = document.querySelectorAll(".modal")[2]
        const modal2 = document.querySelectorAll(".modal")[3]
       
        modal2.classList.add("modal--modifere")
        modal.classList.add("modal--modifere");
        
        
    };
};
RendHome.modalFechar
RendHome.modalFechar2
RendHome.callLogout()
RendHome.creatElement(await Api.rendPost())
RendHome.perfilRend(await Api.infUser())
Postagem.button
RendHome.voltarPagina
RendHome.proximaPagina

