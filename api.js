//Function to get the list of all jobs//

getDsnJobs = async () => {

    spinnerEffect();
    let response = await fetch('https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs');
    let data = await response.json();

    setTimeout(() => {
        showJobs(data);
    }, 2000);
};



//Function to add a new position to the list of jobs//

const addApiDsnJob = async (job) => {
    try {
        const response = await fetch('https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs', {
            method: 'POST',
            body: JSON.stringify(job),
            headers: {'Content-Type': 'application/json; charset=UTF-8',
    },
}
);
const data = await response.json();
console.log(data);
    } catch (err) {
        console.log(err);
    }
};


//Function to get and see a position in detail//

        
const seeInfoJob = async (id) => {

    spinnerEffect();
    
    let response = await fetch(`https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs/${id}`);

    let data = await response.json();
    
    setTimeout(() => {
        detailJobCard(data);
    }, 2000);
};


//Function to delete a position//

const deleteApiDsnJob = async (id) => {
    try {
        const response = await fetch(`https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs/${id}`, {
            method: 'DELETE',
            body: "",
            headers: {'Content-Type': 'application/json; charset=UTF-8',
    },
}
);
const data = await response.json();
console.log(data);
    } catch (err) {
        console.log(err);
    }
    

} 

    


//Filtros
/*const filterCountry =(data) => {
    const countries = []
    data.forEach((element) => {
        if(!countries.includes(element.location)){
            countries.push(element.location)
        }
    });
    console.log(countries);
    return countries;
}*/
  

// editar -- PATCH para editar parcialmente -- PUT si queremos cambiarle todos los campos--editDsnJob(id)
// borrar -- DELETE--deleteDsnJob(id)

/*deleteDsnJob = async (id) => {
    //DELETE
    let response = await fetch('https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs'
    {
        method: 'DELETE',
        headers: ""
        body: ""
    });
    let data = await response.json();
    getDsnJobs()
}*/ 