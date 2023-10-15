const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const showJobs = (jobs) =>{
    $("#jobs-all").innerHTML = "";
    if (jobs) {
        show("#jobs-all");
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
                <a href="#" class='btn btn-warning button p-1' onclick=getCharacterById(${id})>See Info+</a>
            </div>
        `;
        $("#jobs-all").appendChild(row);
        hide("#spinner");
        }

        } else {
            show("");
        }
};

//DOM EVENTOS//

$("#btn-newJob").addEventListener("click", () => {
    show("#newJob-section");
    hide("#spinner")
    hide("#jobs-all");
    hide("#searchbar");
    hide("#getJob-img")
});

