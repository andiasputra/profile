// --- DATA PENDIDIKAN ---
const educationData = [
  {
    school: "Royal Seasons Hotel Education Center",
    major: "Food & Beverages Service",
    year: "Jul - Agust 2026"
  },
  {
    school: "RevoU",
    major: "Mini Course Digital Marketing",
    year: "Jul 2022 - Agust 2022"
  },
    {
        school: "SMA PGRI 1 Kebumen",
        major: "Ilmu Pengetahuan Sosial",
        year: "2016 - 2019"
    },
    {
        school: "SMP Negeri 1 Colomadu",
        major: "Junior High School",
        year: "2013 - 2016"
    },
  {
    school: "SD Negeri 1 Malangjiwan",
    major: "Elementary School",
    year: "2007 - 2013"
  }
];

// --- FUNGSI MERAKIT UI EDUCATION ---
function createEducation() {
    // createElement diambil dari script.js secara otomatis
    const section = createElement("section", "education-section");
    
    const title = createElement("h3", "education-title", "Education");
    section.appendChild(title);

    const timeline = createElement("div", "timeline");

    // Perhatikan: sekarang kita pakai educationData, bukan portfolioData.education
    educationData.forEach(edu => {
        const item = createElement("div", "timeline-item");

        const indicator = createElement("div", "timeline-indicator");
        const dot = createElement("div", "timeline-dot");
        const line = createElement("div", "timeline-line");
        indicator.appendChild(dot);
        indicator.appendChild(line);

        const content = createElement("div", "timeline-content");
        const school = createElement("h4", "", edu.school);
        const major = createElement("p", "", edu.major);
        const year = createElement("p", "year", edu.year);

        content.appendChild(school);
        content.appendChild(major);
        content.appendChild(year);

        item.appendChild(indicator);
        item.appendChild(content);
        timeline.appendChild(item);
    });

    section.appendChild(timeline);
    return section;
}