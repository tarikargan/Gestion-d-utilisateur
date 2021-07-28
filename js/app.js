const slcEl = (el) =>{ return document.querySelector(el)}
const slcElAll = (el) =>{ return document.querySelectorAll(el)}


const tableBody = slcEl('.table tbody');
var users = [
    {
        id: "123456789",
        createdDate: "2021-01-06T00:00:00.000Z",
        status: "En validation",
        firstName: "Mohamed",
        lastName: "Taha",
        userName: "mtaha",
        registrationNumber: "2584",
    },
    {
        id: "987654321",
        createdDate: "2021-07-25T00:00:00.000Z",
        status: "Validé",
        firstName: "Hamid",
        lastName: "Orrich",
        userName: "horrich",
        registrationNumber: "1594",
    },
        {
        id: "852963741",
        createdDate: "2021-09-15T00:00:00.000Z",
        status: "Rejeté",
        firstName: "Rachid",
        lastName: "Mahidi",
        userName: "rmahidi",
        registrationNumber: "3576",
    }
];


    // create users table 
    function createTable(){
      
        var output ="";

      if(users.length > 0){
        users.forEach((user) => {
            output +=
            `<tr>
                 <td scope="col">${user.id}</td>
                 <td scope="col">${realDate(user.createdDate)}</td>
                 <td scope="col">
                         <span class="badge ${realClass(user.status)}">${user.status}</span>
                 </td>
                 <td scope="col">${user.firstName}</td>
                 <td scope="col">${user.lastName}</td>
                 <td scope="col">${user.userName}</td>
                 <td scope="col">${user.registrationNumber}</td>
                 <th scope="col">
                     <button class="btn btn-white delete_user" onclick="deleteUser(${user.id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                 </th>
            </tr>`;
         });
      }else{
        output +=`<tr>
                     <td colspan="8" class="text-center text-danger">sorry no users to list</td>
                 </tr>`;
      }

      tableBody.innerHTML = output;
    }
    createTable();


    //get status class
    function realClass(status){
        if(status.match(/é/gi) != null && status.match(/é/gi).length > 0){
            status = status.replace(/é/g,"e");
        }
        status = status.replace(" ","-").toLowerCase();
        return status;
    }

    // make real date 
    // function realDate(CreatedDate){
    //     return CreatedDate.toLocaleString();
    // }
    // function realDate(CreatedDate){
    //     let date = CreatedDate.replace(/-/g,"/");
    //     return date;
    // }

     // make real date 
     function realDate(CreatedDate){
        if(CreatedDate.match(/T/g) != null && CreatedDate.match(/T/g).length > 0){
            CreatedDate = CreatedDate.slice( 0 , CreatedDate.indexOf('T'));
        }
        date = CreatedDate.replace(/-/g,'/');
        return date;
    }


// >>>>>> Delete Method 
    function deleteUser(id){

            let userId = id;

            if(confirm('Do you want to Delete this user ?')){
                users = users.filter(user => user.id != userId);
                createTable();
            }
    }




    
    // =========== modal =============

    const modal = slcEl('.modal-add-user');

    // show modal
    slcEl('#add-user').addEventListener('click',()=>{
        modal.style.display = 'flex';
    });

    // hide modal 
    modal.addEventListener('click',(e)=>{
        // check if clicked out modal-content
        if(e.target.classList.contains('modal-add-user')){
            modal.style.display = 'none';
        }
    });
    

    

// >>>>>>> Post method

    slcEl('.btn_addUser').addEventListener('click',(e)=>{
        e.preventDefault();

        //generate id 
        let userId = Math.floor(Math.random() * 99999999);

        
        let userData = {
            id: userId, 
            createdDate: slcEl('#date_creation').value,
            status: slcEl('#etat').value,
            firstName: slcEl('#prenom').value,
            lastName:  slcEl('#nom').value,
            userName:  slcEl('#nom_utilisateur').value,
            registrationNumber:  slcEl('#matricule').value
        }

        // clone data & users
        users = [...users,userData];
        // hide modal
        modal.style.display = 'none';
        // reload createTable
        createTable();
        // vide input
        videInput();
        

    })
    
    // vide fields 
    function videInput(){
         slcEl('#date_creation').value = '';
         slcEl('#etat').value = '';
         slcEl('#prenom').value = '';
         slcEl('#nom').value = '';
         slcEl('#nom_utilisateur').value = '';
         slcEl('#matricule').value = '';
    }

 


       
        
