const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const showView = (view) =>{
    $$(".view").forEach((view) => view.classList.add("visually-hidden"));
    $(`#${view}`).classList.remove("visually-hidden")
};


getDsnJobs = async () =>{
    showView('spinner')
    let response = await fetch('https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs');
    let data = await response.json();
    console.log(data);
    setTimeout(() => {
        showJobs(data);
    }, 4000);
};


getDsnJobs ();

// agregar un nuevo puesto de trabajo --- POST--addDsnJob()

const addDsnJob = async () => {
    try {
        const response = await fetch('https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs', {
            method: 'POST',
            body: JSON.stringify(showingNewJob(jobs)),
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