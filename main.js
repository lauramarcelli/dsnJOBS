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
                    <span class="badge rounded-pill  text-bg-secondary">${location}</span>
                    <span class="badge rounded-pill  text-bg-secondary">${seniority}</span>
                    </div>
                </div>
                <div class="button-card">
                <a href="#" class='button-card btn btn-warning button p-1' id="btn-moreInfo" onclick=seeInfoJob(${id})>Ver Info</a>
                  </div>
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
    languages: [
      $("#languages-1").value,
      $("#languages-2").value,
      $("#languages-3").value,
    ],
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
    <div class="m-0 row justify-content-center">
                        <div class="detail-card card col-4">
                            <img src="${image}" id="detail-img" class=" mb-4 img-fluid rounded card-img-top" alt="character-picture">
                              <div class="">
                                <h4 style="color:#6495ED"><span class=" mb-4 mt-6 glyphicon glyphicon-th-large" id="detail-title">${position}</span></h4>
                                <p class="text-description" id="text-description">Descripción del Puesto</p>
                                <p id="detail-description" class="detail-description">${description}</p>
                                <p class="seniority-description" id="seniority-description">Seniority</p>
                                <p id="detail-seniority">${seniority}</p>
                                <p class="location-description" id="location-description">Locación del Puesto</p>
                                <p id="detail-location">${location}</p>
                                <p class="salary-description" id="salary-description">Remuneración</p>
                                <p id="detail-salary">$${salary}</p>
                                <p class="benefits-description" id="benefits-description">Beneficios</p>
                                <p id="detail-benefits-vac">Vacaciones: ${
                                  benefits.vacation
                                }</p>
                                <p id="detail-benefits-health">Cobertura Médica: ${
                                  benefits.health
                                }</p> 
                                <p class="programmes-description" id="programmes-description">Programas</p>
                                <p id="detail-languages">${languages.join(
                                  " - "
                                )}</p>   
                                <a href="#" id="btn-edit-card" onclick=getJobById(${id}) class="btn btn-success mb-2 btn-xs" role="button">Editar</a>
                                <a href="#" type="button"  data-bs-toggle="modal" data-bs-target="#delete-modal"  id="btn-delete-card" onclick=deleteApiDsnJob(${id}) class="btn btn-danger mb-2 btn-default btn-xs" role="button">Borrar</a>
                            </div>
                          </div>
                          `;
  hide("#searchbar");
  hide("#getJob-img");
  hide("#jobs-all");
};

//Function to edit a position//

const showJobForm = ({
  id,
  image,
  position,
  description,
  seniority,
  location,
  benefits,
  salary,
  languages,
}) => {
  hide("#btn-add-new-job");
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
    languages: [
      $("#languages-1").value,
      $("#languages-2").value,
      $("#languages-3").value,
    ],
  };

  console.log(editedJob);
  editApiDsnJob(id, editedJob);
};

//Function to filter//

const filterPosition = (jobs) => {
  const positions = [];
  jobs.forEach((job) => {
    if (!positions.includes(job.position)) {
      positions.push(job.position);
    }
  });

  $("#position-filter").innerHTML = "";
  $("#position-filter").innerHTML = `<option value="">Posicion</option>`;

  positions.forEach((position) => {
    $("#position-filter").innerHTML += `<option>${position}</option`;
  });
};

const filterLocation = (jobs) => {
  const cities = [];
  jobs.forEach((job) => {
    if (!cities.includes(job.location)) {
      cities.push(job.location);
    }
  });

  $("#location-filter").innerHTML = "";
  $("#location-filter").innerHTML = `<option value="">Locacion</option>`;

  cities.forEach((city) => {
    $("#location-filter").innerHTML += `<option>${city}</option`;
  });
};

const filterSeniority = (jobs) => {
  const seniorities = [];
  jobs.forEach((job) => {
    if (!seniorities.includes(job.seniority)) {
      seniorities.push(job.seniority);
    }
  });

  $("#seniority-filter").innerHTML = "";
  $("#seniority-filter").innerHTML = `<option value="">Seniority</option>`;

  seniorities.forEach((seniority) => {
    $("#seniority-filter").innerHTML += `<option>${seniority}</option`;
  });
};

const selectFilterParam = () => {
  let key = "";
  let param = "";

  if ($("#location-filter").value !== "Locacion") {
    key = "location";
    param = $("#location-filter").value;
    getFilters(key, param);
  } else if ($("#position-filter").value !== "Posicion") {
    key = "position";
    param = $("#position-filter").value;

    getFilters(key, param);
  } else if ($("#seniority-filter").value !== "Seniority") {
    key = "seniority";
    param = $("#seniority-filter").value;
    getFilters(key, param);
  }
};

$("#btn-search").addEventListener("click", () => selectFilterParam());

$("#btn-clear").addEventListener("click", () => {
  $("#position-filter").value = "";
  $("#location-filter").value = "";
  $("#seniority-filter").value = "";
});

//DOM events//

const spinnerEffect = () => {
  show(["#spinner"]);

  setTimeout(() => {
    hide(["#spinner"]);
  }, 2000);
};

$("#btn-newJob").addEventListener("click", () => {
  show("#newJob-section");
  hide("#btn-edit-job");
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
