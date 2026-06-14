// =============================
// SEARCH JOBS
// =============================

function searchJobs() {

    let input = document.getElementById("search");

    if(!input) return;

    let filter = input.value.toLowerCase();

    let jobs = document.getElementsByClassName("job");

    for(let i = 0; i < jobs.length; i++) {

        let title =
        jobs[i].getElementsByTagName("h2")[0];

        let txtValue =
        title.textContent || title.innerText;

        if(txtValue.toLowerCase().indexOf(filter) > -1) {

            jobs[i].style.display = "";

        } else {

            jobs[i].style.display = "none";

        }
    }
}

// =============================
// APPLY JOB
// =============================

function applyJob() {

    alert(
        "Application Submitted Successfully!"
    );
}

// =============================
// LOGIN VALIDATION
// =============================

function loginUser() {

    let email =
    document.getElementById("email").value;

    let password =
    document.getElementById("password").value;

    if(email === "" || password === "") {

        alert(
            "Please fill all fields"
        );

        return false;
    }

    alert(
        "Login Successful!"
    );

    return false;
}

// =============================
// REGISTER VALIDATION
// =============================

function registerUser() {

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("regEmail").value;

    let password =
    document.getElementById("regPassword").value;

    if(name === "" ||
       email === "" ||
       password === "") {

        alert(
            "Please complete all fields"
        );

        return false;
    }

    alert(
        "Registration Successful!"
    );

    return false;
}

// =============================
// POST JOB
// =============================

function postJob() {

    let title =
    document.getElementById("jobTitle").value;

    let company =
    document.getElementById("company").value;

    let location =
    document.getElementById("location").value;

    if(title === "" ||
       company === "" ||
       location === "") {

        alert(
            "Please fill all details"
        );

        return false;
    }

    alert(
        "Job Posted Successfully!"
    );

    return false;
}

// =============================
// RESUME UPLOAD
// =============================

function uploadResume() {

    let resume =
    document.getElementById("resume");

    if(resume.files.length === 0) {

        alert(
            "Please select a resume"
        );

        return;
    }

    alert(
        "Resume Uploaded Successfully!"
    );
}

// =============================
// JOB COUNTER
// =============================

window.onload = function() {

    let jobs =
    document.getElementsByClassName("job");

    let count =
    document.getElementById("jobCount");

    if(count) {

        count.innerHTML =
        "Total Jobs Available : " +
        jobs.length;
    }
};