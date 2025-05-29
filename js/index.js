/* Get the current year */
const today = new Date();
const thisYear = today.getFullYear();

/* Create footer */
const footer = document.createElement("footer");
document.body.appendChild(footer);

/* Create copyright */
const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Vicente Flores ${thisYear}`;
footer.appendChild(copyright);

/* Skills Section */
const Skills = ["HTML", "CSS", "Git", "VSCode"];

const SkillsSection = document.getElementById("Skills");
const SkillsList = SkillsSection.querySelector("ul");

for (let i = 0; i < Skills.length; i++) {
  const SkillItem = document.createElement("li");
  SkillItem.textContent = Skills[i];
  SkillsList.appendChild(SkillItem);
}

/* Handle Leave a Message Form Submission */
const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>: ${usersMessage}</span>
  `;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});
