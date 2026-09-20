const skillsData = [
  "HTML5", 
  "CSS3", 
  "JavaScript (DOM)", 
  "Git & GitHub", 
  "Responsive Web Design",
  "Acode IDE"
];

function createSkills() {
  const section = createElement('section');
  section.id = "skills";

  const title = createElement('h2', 'section-title', 'Skills');
  section.appendChild(title);

  const listDiv = createElement('div', 'skills-list');

  skillsData.forEach(skill => {
    const item = createElement('span', 'skill-badge', skill);
    listDiv.appendChild(item);
  });

  section.appendChild(listDiv);
  return section;
}