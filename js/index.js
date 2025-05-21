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
const Skills = ["HTML", "CSS", "Git", "VSCode"];

const SkillsSection = document.getElementById("Skills");
const SkillsList = SkillsSection.querySelector("ul");

for (let i = 0; i < Skills.length; i++) {
  const SkillItem = document.createElement("li");
  SkillItem.textContent = Skills[i];
  SkillsList.appendChild(SkillItem);
}
