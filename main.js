const initializeJob = (data) => {
    showJobs(data);
    filterCountry(data);
}

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const showJobs = (jobs) =>{
    $("#jobs-all").innerHTML = "";
    if (jobs) {
        show("#jobs-all");
        let row = document.createElement("div")
        row.setAttribute("class", "row")
        row.classList.add("gap-3");
        for ( let { position, description, location, seniority, id } of jobs){
            row.innerHTML += `
            <div class="card col-2 d-grid gap-2 d-md-block">
                <div class="card-body justify-content-center">
                    <h4 class="card-title">${position}</h4>
                    <p class="job-description">${description}</p>
                    <div class="mb-3">
                    <span class="badge text-bg-secondary">${location}</span>
                    <span class="badge text-bg-secondary">${seniority}</span>
                    </div>
                </div>
                <a href="#" class='btn btn-warning button p-1' onclick=getCharacterById(${id})>See Info+</a>
            </div>
        `;
        $("#jobs-all").appendChild(row);
        }

        } else {
            show("");
        }
};


const addNewJob = () => {
    let newJob = {
        position : $("#position-form").value,
        description : $("#description-form").value,
        location : $("#location-form").value,
        seniority : $("#seniority-form").value,
        benefits : {
            "vacation": $("#vacations-form").value,
            "health_insurance": $("#health-form").value,
            "internet_paid": $("#internet-form").value,
        },

        salary : $("#salary-form").value,
        languages : [$("#languages-1").value,]

    }

    console.log(newJob);
    addDsnJob(newJob);

}
//DOM EVENTOS//



const spinnerEffect = () => {
    show(["#spinner"]);

    setTimeout(() => {
        hide(["#spinner"]);
    }, 2000)
};

$("#btn-newJob").addEventListener("click", () => {
    show("#newJob-section");
    hide("#spinner")
    hide("#jobs-all");
    hide("#searchbar");
    hide("#getJob-img")
});

$("#btn-add-NewJob").addEventListener("click", (e) => {
    e.preventDefault();
    addNewJob();
    show("#searchbar")
    show("#getJob-img")
    show("#jobs-all");
    hide("#newJob-section");
  });

window.addEventListener("load", initializeJob)

