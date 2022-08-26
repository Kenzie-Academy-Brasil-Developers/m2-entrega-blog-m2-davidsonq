export class ApiRequest {
    static baseUrl = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem("@blogKenzie:token")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }
    static async login (body){
        const usuarioLogin = await fetch(`${this.baseUrl}/users/login`,{
            method: "POST",
            headers : this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            localStorage.setItem("@blogKenzie:token" , res.token)
            localStorage.setItem("@blogKenzie:Usuario_Id", res.userId)
        })
        .catch(err => console.log(err))

        return usuarioLogin
    }
}   