const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const hide = (selector) => $(selector).classList.add("visually-hidden");
const show = (selector) => $(selector).classList.remove("visually-hidden");
const cleanContainer = (selector) => ($(selector).innerHTML = "");


const showJobs = (jobs) => {
  $("#jobs-all").innerHTML = "";
    show("#jobs-all");
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.classList.add("gap-3");
    jobs.forEach(
       ({ position, description, location, seniority, id }) => {
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
                <a href="#" class='btn btn-warning button p-1'id="btn-moreInfo" onclick=seeInfoJob(${id}')">See Info+</a>
            </div>
        `;
      $("#jobs-all").appendChild(row);
    }
  
  )
};

const addNewJob = () => {
  let newJob = {
    position: $("#position-form").value,
    description: $("#description-form").value,
    location: $("#location-form").value,
    seniority: $("#seniority-form").value,
    benefits: {
      vacation: $("#vacations-form").value,
      health_insurance: $("#health-form").value,
      internet_paid: $("#internet-form").value,
    },

    salary: $("#salary-form").value,
    languages: [$("#languages-1").value],
  };

  console.log(newJob);
  addDsnJob(newJob);
};

const detailJobCard = ({
    position,
    description,
    seniority,
    location,
    benefits,
    salary,
    image,
  }) => {
    show("#job-detail");
    $("#job-detail").innerHTML = `
      <div class="card col-6">
      <img src="${image}" class="card-img-top" alt="character-picture" />
      <div class="card-body">
          <h5 class="card-title">${position}</h5>
          <ul>
            <li>Descripcion: ${description}</li>
            <li>Seniority: ${seniority}</li>
            <li>Location: ${location}</li>
            <li>Origen: ${benefits.vacation}</li>
            <li>Origen: ${benefits.health}</li>
            <li>Origen: ${benefits.internet}</li>
            <li>Location: ${salary}</li>
          </ul>
      </div>
     
    </div>
    `;
  };


//DOM EVENTOS//


const spinnerEffect = () => {
  show(["#spinner"]);

  setTimeout(() => {
    hide(["#spinner"]);
  }, 2000);
};


$("#btn-newJob").addEventListener("click", () => {
  show("#newJob-section");
  hide("#spinner");
  hide("#jobs-all");
  hide("#searchbar");
  hide("#getJob-img");
});

$("#btn-add-NewJob").addEventListener("click", (e) => {
  e.preventDefault();
  addNewJob();
  show("#searchbar");
  show("#getJob-img");
  show("#jobs-all");
  hide("#newJob-section");
});

/*$("#btn-moreInfo").addEventListener("click", (e) => {
  e.preventDefault();
  detailJobCard();
  hide("#searchbar");
  hide("#getJob-img");
  hide("#jobs-all");
  hide("#newJob-section");
});*/


window.onload = getDsnJobs();