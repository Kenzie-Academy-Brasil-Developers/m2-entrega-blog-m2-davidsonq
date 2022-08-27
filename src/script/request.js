import { Modal } from "../js/modal.js";
export class ApiRequest {
    static baseUrl = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem("@blogKenzie:token")
    static headers = {

        "Content-Type": "application/json" 

    }
    static async login (body){
        const usuarioLogin = await fetch(`${this.baseUrl}/users/login`,{
            method: "POST",
            headers : this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {

            if(!!res.token){
                localStorage.setItem("@blogKenzie:Usuario_Id", res.userId)
                localStorage.setItem("@blogKenzie:token" , res.token)
                window.location.assign("src/pages/home.html")
            }else{
                let modalErro = document.querySelectorAll(".modal")[1] ;
                return modalErro.classList.remove("modal--modifere");
            }

        })
        .catch(err => console.log(err))

        return usuarioLogin
    }

    static async criarPostagem (body){
        const novaPostagem = await fetch (`${this.baseUrl}/posts`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${this.token}` 
              },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .catch(err => err)

        return novaPostagem
    }
}  