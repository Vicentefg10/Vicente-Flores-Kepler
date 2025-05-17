/* Get the current year */
const today = new Date();
const thisYear = today.getFullYear();

/* Create footer */
const footer = document.createElement("footer");
document.body.appendChild(footer);

/* Create copyright */
const copyright = document.createElement("p");
copyright.innerHTML = `© Vicente Flores ${thisYear}`;
footer.appendChild(copyright);

/* Skills Section */
const skills = ["HTML", "CSS", "Git", "VSCode"];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skillItem = document.createElement("li");
  skillItem.textContent = skills[i];
  skillsList.appendChild(skillItem);
}
