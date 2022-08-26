import { Api } from "./Api.js";
export class RendHome{
    static ul        = document.querySelector(".secao__lista");
    static limparUl (){
        this.ul.innerHTML = "";
    };
    static creatElement(objApi){
        this.limparUl()
        console.log(objApi.data);
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
            if (el.user.id == localStorage.getItem("MyId")) {
                div.classList.add("secao__lista__div")
            }
            imgEdit.src          = "../img/edit 1.png";
            imgEdit.alt          = "edit";
            imgDelet.src         = "../img/trash-bin 1.png";
            imgDelet.id          = "trash";
            imgDelet.alt         = "trash";

            button2.appendChild(imgDelet);
            button1.appendChild(imgEdit);
            div.append(button1,button2);
            figure.append(img,figcaption);
            li.append(figure,p,span,div);
            this.ul.appendChild(li);
        });
    }
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
                localStorage.removeItem("token")
                localStorage.removeItem("MyId")
                let url = location.href.replace("src/pages/home.html","index.html")
                window.location.assign(url)
             }
        });
    }
};
RendHome.callLogout()
RendHome.creatElement(await Api.rendPost())
RendHome.perfilRend(await Api.infUser())




