// -------------------- A. Toggle Dark Mode --------------------
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Change button label
    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});

// -------------------- B. Edit Job Title --------------------
const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.querySelector(".job-title");

editJobBtn.addEventListener("click", function () {
    let newTitle = prompt("Enter your new job title:");
    if (newTitle !== null && newTitle.trim() !== "") {
        jobTitle.textContent = newTitle;
    }
});

// -------------------- C. Show / Hide Skills --------------------
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

toggleSkillsBtn.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
});

// -------------------- D. Live Character Counter --------------------
const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.addEventListener("keyup", function () {
    let remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
});

// -------------------- E. Form Validation --------------------
function validateForm() {
    let name = document.getElementById("nameField").value.trim();
    let email = document.getElementById("emailField").value.trim();

    if (name === "" || email === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    return true; // submit allowed
}

// -------------------- F. Display Today's Date --------------------
const dateDisplay = document.getElementById("dateDisplay");
dateDisplay.textContent = new Date().toDateString();

// -------------------- G. EXTRA FEATURE: Random Quote Generator --------------------
const quoteBtn = document.getElementById("quoteBtn");
const quoteDisplay = document.getElementById("quoteDisplay");

const quotes = [
    "Design is intelligence made visible.",
    "Good design is good business.",
    "Small steps every day lead to big results.",
    "Stay patient and trust your journey.",
    "Creativity takes courage.",
    "You are capable of amazing things.",
    "Your creativity has no limits."
];

quoteBtn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[random];
});
