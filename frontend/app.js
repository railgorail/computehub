const API_URL = "http://127.0.0.1:8000";

const form = document.getElementById("job-form");
const list = document.getElementById("jobs-list");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("job-name").value;
    const job_type = document.getElementById("job-type").value;

    const res = await fetch(`${API_URL}/jobs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, job_type })
    });

    console.log("POST status:", res.status);

    form.reset();
    loadJobs();
});

async function loadJobs() {
    const response = await fetch(`${API_URL}/jobs`);
    const jobs = await response.json();

    list.innerHTML = "";
    jobs.forEach(job => {
        const li = document.createElement("li");
        li.textContent = `${job.name} [${job.job_type}] — ${job.status}`;
        list.appendChild(li);
    });
}

loadJobs();

