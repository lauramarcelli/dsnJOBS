

const showJobs = (jobs) =>{
    $("#jobs-all").innerHTML = "";
    if (jobs) {
        showView("jobs-all");
        let row = document.createElement("div")
        row.setAttribute("class", "row")
        row.classList.add("gap-3");
        for ( let { name, description, id } of jobs){
            row.innerHTML += `
            <div class="card col-2 d-grid gap-2 d-md-block">
                <div class="card-body justify-content-center">
                    <h4 class="card-title">${name}</h4>
                    <p class="job-description">${description}</p>
                </div>
                <a href="#" class='btn btn-outline-dark button' onclick=getCharacterById(${id})>See Info+</a>
            </div>
           `;
           $("#jobs-all").appendChild(row);
           }

           } else {
               showView("");
           }
};
 
