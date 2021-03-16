// I'm not advocating this type of rowdyness but it serves the purpose hopefully. 
const fetch = require('node-fetch')

const getUserById = async (id) => {
    let data = await fetch('http://localhost:3000/users/' + id);
    if (!data.ok) {
        return null
    } else {
        return await data.json()
    }
}

const createUser = async (user) => {   
    var raw = JSON.stringify(user);
    
    var requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: raw
    };
    
    fetch("http://localhost:3000/users", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

const User = {    
    async findById(id) {
        return await getUserById(id);
    },
    async findOrCreate(user, callback) {
        const existingUser = await this.findById(user.id);
        
        if(existingUser) {
            callback(null, existingUser)
        } else {            
            await createUser(user)
            callback(null, user)
        }
    }
};

module.exports = User;
