const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const hide = (selector) => $(selector).classList.add("visually-hidden");
const show = (selector) => $(selector).classList.remove("visually-hidden");
const cleanContainer = (selector) => ($(selector).innerHTML = "");

//Function to show all positions//

const showJobs = (jobs) => {
  $("#jobs-all").innerHTML = "";
  show("#jobs-all");
  let row = document.createElement("div");
  row.setAttribute("class", "row");
  row.classList.add("gap-3");
  jobs.forEach(({ position, description, location, seniority, id }) => {
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
                <a href="#" class='btn btn-warning button p-1' id="btn-moreInfo" onclick=seeInfoJob(${id})>Ver Info</a>
            </div>
        `;
    $("#jobs-all").appendChild(row);
  });
};

//Function to add a new position//

let inputURL = $("#url");

const addNewJob = () => {
  let newJob = {
    image: $("#url").value,
    position: $("#position-form").value,
    description: $("#description-form").value,
    location: $("#location-form").value,
    seniority: $("#seniority-form").value,
    benefits: {
      vacation: $("#vacations-form").value,
      health: $("#health-form").value,
    },
    salary: $("#salary-form").value,
    languages: [$("#languages-1").value],
  };

  console.log(newJob);
  addApiDsnJob(newJob);
};

//Function to see a position in detail//

const detailJobCard = ({
  position,
  description,
  seniority,
  location,
  benefits,
  languages,
  salary,
  image,
  id,
}) => {
  show("#job-detail");
  $("#job-detail").innerHTML = `
    <div class="row">
                        <div class="card col-6">
                            <img src="${image}" id="detail-img" class="card-img-top" alt="character-picture">
                              <div class="">
                                <h4 style="color:#6495ED"><span class="glyphicon glyphicon-th-large" id="detail-title">${position}</span></h4>
                                <p id="detail-description">${description}</p>
                                <p id="detail-seniority">${seniority}</p>
                                <p id="detail-location">${location}</p>
                                <p id="detail-salary">${salary}</p>
                                <p id="detail-benefits-vac">${
                                  benefits.vacation
                                }</p>
                                <p id="detail-benefits-health">${
                                  benefits.health
                                }</p> 
                                <p id="detail-languages">${languages.join(
                                  " - "
                                )}</p>   
                                <a href="#" id="btn-edit-card" onclick=getJobById(${id}) class="btn btn-secondary btn-xs" role="button">Editar</a>
                                <a href="#" type="button"  data-bs-toggle="modal" data-bs-target="#delete-modal"  id="btn-delete-card" onclick=deleteApiDsnJob(${id}) class="btn btn-danger btn-default btn-xs" role="button">Borrar</a>
                            </div>
                          </div>
                          `;
  hide("#searchbar");
  hide("#getJob-img");
  hide("#jobs-all");
};

//Function to edit a position//

const showOperationForm = ({id, image, position, description, seniority, location, benefits, salary, languages}) => {
  /*$("#btn-edit-card").addEventListener("click", () => editApiDsnJob(id));*/
  hide("#job-detail");
  hide("#jobs-all");
  hide("#searchbar");
  hide("#getJob-img");
  show("#newJob-section");

  $("#url").value = image;
  $("#position-form").value = position;
  $("#description-form").value = description;
  $("#seniority-form").value = seniority;
  $("#location-form").value = location;
  $("#vacations-form").value = benefits?.vacation;
  $("#health-form").value = benefits?.health;
  $("#salary-form").valueAsNumber = salary;
  $("#languages-1").value = languages[0];
  $("#languages-2").value = languages[1];
  $("#languages-3").value = languages[2];

  $("#btn-edit-job").addEventListener("click", (e) => {
    e.preventDefault();
    editJob(id);
  });
  
};

const editJob = (id) => {

  let editedJob = {
    image: $("#url").value,
    position: $("#position-form").value,
    description: $("#description-form").value,
    location: $("#location-form").value,
    seniority: $("#seniority-form").value,
    benefits: {
      vacation: $("#vacations-form").value,
      health: $("#health-form").value,
    },
    salary: $("#salary-form").value,
    languages: [$("#languages-1").value],
  };
  
  console.log(editedJob);
  editApiDsnJob(id, editedJob);

  
}

//Filtros//

const filterLocation = (jobs) => {
  const cities = [];
  jobs.forEach((job) => {
    if (!cities.includes(job.location)) {
      cities.push(job.location);
    }
  });
  console.log(cities);

  $("#location-filter").innerHTML = "";

  cities.forEach((city) => {
    $("#location-filter").innerHTML += `<option>${city}</option`;
  });
};

const filterPosition = (jobs) => {
  const positions = [];
  jobs.forEach((job) => {
    if (!positions.includes(job.position)) {
      positions.push(job.position);
    }
  });
  console.log(positions);

  $("#position-filter").innerHTML = "";

  positions.forEach((position) => {
    $("#position-filter").innerHTML += `<option>${position}</option`;
  });
};

const filterSeniority = (jobs) => {
  const seniorities = [];
  jobs.forEach((job) => {
    if (!seniorities.includes(job.seniority)) {
      seniorities.push(job.seniority);
    }
  });
  console.log(seniorities);

  $("#seniority-filter").innerHTML = "";

  seniorities.forEach((seniority) => {
    $("#seniority-filter").innerHTML += `<option>${seniority}</option`;
  });
};

//DOM events//

const spinnerEffect = () => {
  show(["#spinner"]);

  setTimeout(() => {
    hide(["#spinner"]);
  }, 2000);
};

$("#position-filter").addEventListener("input", () => filterLocation());

$("#btn-newJob").addEventListener("click", () => {
  show("#newJob-section");
  hide("#spinner");
  hide("#jobs-all");
  hide("#searchbar");
  hide("#getJob-img");
});

$("#btn-add-new-job").addEventListener("click", (e) => {
  e.preventDefault();
  addNewJob();
  show("#searchbar");
  show("#getJob-img");
  show("#jobs-all");
  hide("#newJob-section");
});

const initialize = (data) => {
  showJobs(data);
  filterLocation(data);
  filterPosition(data);
  filterSeniority(data);
};

window.onload = getDsnJobs();
