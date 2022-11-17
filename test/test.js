const containerEl= document.querySelector('#container');
//fetch our endpoint
const getUsers=async(endpoint)=>{
    try{
        const data= await fetch(endpoint);
        const jsonData= await data.json();

        containerEl.innerHTML='';

        jsonData.forEach((user)=>{
            let createdDate= new Date(user.date).toLocaleDateString('en-CA');
            containerEl.innerHTML += `
                <div class="user">
                    <h2>${user.name}</h2>
                    <p>
                        ${user.title} <br/>
                        ${user.bio} <br/>
                        <small> This user was created on ${createdDate}</small>
                </p>
            </div>
            `;
        });
    }
    catch(err){
        containerEl.innerHTML = err;
    }
};

setTimeout(()=>{
    getUsers('http://localhost:3000/api/users');
},2000);
