const jobs = [];

const form = document.getElementById("job-form");
const list = document.getElementById("jobs-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("job-name").value;
    const type = document.getElementById("job-type").value;

    const job = {
        id: Date.now(),
        name,
        type,
        status: "PENDING"
    };

    jobs.push(job);
    renderJobs();
    form.reset();
});

function renderJobs() {
    list.innerHTML = "";
    jobs.forEach(job => {
        const li = document.createElement("li");
        li.textContent = `${job.name} [${job.type}] — ${job.status}`;
        list.appendChild(li);
    });
}
