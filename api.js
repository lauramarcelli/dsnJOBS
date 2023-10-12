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
    }, 2000);
};


getDsnJobs ();

// agregar un nuevo puesto de trabajo --- POST--addDsnJob()
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