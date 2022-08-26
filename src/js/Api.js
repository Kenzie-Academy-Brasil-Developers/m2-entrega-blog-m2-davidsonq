export class Api {
    static urlApi      = "https://blog-m2.herokuapp.com"
    static myId        = localStorage.getItem("MyId") 
    static token       = localStorage.getItem("token") 

    static async rendPost(number = "page=1"){
        const response = await fetch(`${this.urlApi}/posts?${number}`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${this.token}` 
              }
        })
                                .then(res => res.json())
                                .catch(err => console.log(err))
        return response
    };
    static async infUser (){
        const response = await fetch(`${this.urlApi}/users/${this.myId}`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${this.token}` 
              }
        })
                                .then(res => res.json())
                                .catch(err => console.log(err))
        return response
    }
};
