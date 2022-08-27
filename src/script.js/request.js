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

            if(token){
                localStorage.setItem("@blogKenzie:Usuario_Id", res.userId)
                localStorage.setItem("@blogKenzie:token" , res.token)
                window.location.assign("src/pages/home.html")
            }

        })
        .catch(err => console.log(err))

        return usuarioLogin
    }

    static async criarPostagem (body){
        const novaPostagem = await fetch (`${this.baseUrl}/posts`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            window.location.assign("../pages/home.html")

            return res
        })
        .catch(err => console.log(err))

        return novaPostagem
    }
}   