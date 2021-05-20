class AppContainer{
    chores = []
    kids = []
    baseURL = "http://localhost:3000/"
    randomChore = {}

    getChores(){
        fetch(this.baseURL + 'chores')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
        //make fetch request to /chores
        //populate chores and kids properties with returned json data
        //call renderChores
        .catch(err => alert(err))
    }

    renderChores(){
        //create DOM nodes and insert data into them
        //to render in the DOM
    }
}