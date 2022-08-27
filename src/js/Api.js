export class Api {
    static urlApi      = "https://blog-m2.herokuapp.com";
    static myId        = localStorage.getItem("@blogKenzie:Usuario_Id"); 
    static token       = localStorage.getItem("@blogKenzie:token") ;

    static async rendPost(number = "page=1"){
        const response = await fetch(`${this.urlApi}/posts?${number}`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${this.token}` 
              }
        })
                                .then(res => res.json())
                                .catch(err => console.log(err));
        return response;
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
                                .catch(err => console.log(err));
        return response;
    };
    static async cadastrarUser(data){
        const response = await fetch(`${this.urlApi}/users/register`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json", 
              },
            body: JSON.stringify(data)
            
        })
                                .then(res => res.json())
                                .then(res => res)
                                .catch(err => err)
        return response
    }
};
