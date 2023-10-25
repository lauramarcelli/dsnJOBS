//Function to get the list of all jobs//

getDsnJobs = async () => {
  spinnerEffect();
  let response = await fetch(
    "https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs"
  );
  let data = await response.json();

  setTimeout(() => {
    initialize(data);
  }, 2000);
};

//Function to add a new position to the list of jobs//

const addApiDsnJob = async (job) => {
  try {
    const response = await fetch(
      "https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs",
      {
        method: "POST",
        body: JSON.stringify(job),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
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

  let response = await fetch(
    `https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs/${id}`
  );

  let data = await response.json();

  setTimeout(() => {
    detailJobCard(data);
  }, 2000);
};

//Function to get only the id of a position//

const getJobById = async (id) => {
  
    let response = await fetch(
      `https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs/${id}`
    );
  
    let data = await response.json();
  console.log(data);
  showJobForm(data)
  };

//Function to delete a position//

const deleteApiDsnJob = async (id) => {
  try {
    const response = await fetch(
      `https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs/${id}`,
      {
        method: "DELETE",
        body: "",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

//Function to edit a position//

const editApiDsnJob = async (id, editedJob) => {
  try {
    const response = await fetch(
      `https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(editedJob),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      }
    );
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};


//Funtions to filter by position, seniority and location



const getFilterPositionJobs = async (position) =>{

  spinnerEffect();

  let response = await fetch(
    `https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs?position=${position}`
  );

  let data = await response.json();

  setTimeout(() => {
    showJobs(data);
  }, 2000);

};

const getFilterLocationJobs = async (location) =>{

  spinnerEffect();

  let response = await fetch(
    `https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs?location=${location}`
  );

  let data = await response.json();

  setTimeout(() => {
    showJobs(data);
  }, 2000);

};

const getFilterSeniorityJobs = async (seniority) =>{

  spinnerEffect();

  let response = await fetch(
    `https://6524190dea560a22a4e96ab1.mockapi.io/api/jobs?seniority=${seniority}`
  );

  let data = await response.json();

  setTimeout(() => {
    showJobs(data);
  }, 2000);

};






