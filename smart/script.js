const eventForm = document.getElementById("eventForm");
const eventContainer = document.getElementById("eventContainer");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const keyOutput = document.getElementById("keyOutput");

eventForm.addEventListener("submit", e => {
    e.preventDefault();

    const title = eventTitle.value;
    const date = eventDate.value;
    const category = eventCategory.value;
    const desc = eventDescription.value;

    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
        <span class="delete">×</span>
        <h3>${title}</h3>
        <p>📅 ${date}</p>
        <span class="badge">${category}</span>
        <p>${desc}</p>
    `;

    card.querySelector(".delete").onclick = () => card.remove();
    eventContainer.appendChild(card);

    eventForm.reset();
});

clearAllBtn.onclick = () => {
    eventContainer.innerHTML = "";
};

addSampleBtn.onclick = () => {
    eventContainer.innerHTML = `
        <div class="event-card">
            <span class="delete">×</span>
            <h3>ideas</h3>
            <p>📅 2026-01-14</p>
            <span class="badge">Social</span>
            <p>college fest</p>
        </div>
    `;
};

document.addEventListener("keydown", e => {
    keyOutput.innerText = `You pressed: ${e.key}`;
});