const portfolioData = {
    bio: "Halo! Saya ...",
  navLinks: [
        { text: '<i class="fa-solid fa-house"></i>', url: "#" },
        { text: "Experience", url: "#experience" },
        { text: "Skills", url: "#skills" },
    { text: "Blog", url: "#blog"}
    ],
    
};

function createElement(tag, className = "", text = "") {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.innerHTML = text;
    return el;
}


function createNavbar() {
    const nav = createElement("nav");
    const navLinksDiv = createElement("div", "nav-links");
    
    portfolioData.navLinks.forEach(item => {
        const a = createElement("a", "", item.text);
        a.href = item.url;
        navLinksDiv.appendChild(a);
    });

    const themeBtn = createElement("button", "theme-toggle");
    const icon = createElement("i", "fa-solid fa-moon");
    themeBtn.appendChild(icon);
  
    themeBtn.onclick = () => {
        const isDark = document.body.getAttribute("data-theme") === "dark";
        if (isDark) {
            document.body.setAttribute("data-theme", "light");
            icon.className = "fa-solid fa-moon";
        } else {
            document.body.setAttribute("data-theme", "dark");
            icon.className = "fa-solid fa-sun";
        }
    };

    nav.appendChild(navLinksDiv);
    nav.appendChild(themeBtn);
    
    return nav;
}

function createHero() {
    const section = createElement("section", "hero");
    const h1 = createElement("h1", "", "Andias Gilang P");
    const p = createElement("p", "", portfolioData.bio);

    section.appendChild(h1);
    section.appendChild(p);
    section.appendChild(createSocials());
    return section;
}

function createFooter() {
    const footer = createElement("footer");
    const copy = createElement("div", "", `© ${new Date().getFullYear()} Made by me with <i class="fa-solid fa-heart"></i> and <i class="fa-solid fa-smoking"></i>`);
    
    footer.appendChild(copy);
    return footer;
}

// --- RENDER SEMUA KE LAYAR ---
function renderPage() {
    const appContainer = document.getElementById("app");
    appContainer.innerHTML = ""; 
    
    const container = createElement("div", "container");
    container.appendChild(createNavbar());
    
    const currentHash = window.location.hash.toLowerCase();
    
    if (currentHash === "#experience") {
        if (typeof createExperience === "function") {
            container.appendChild(createExperience());
        }
    } 
    else if (currentHash === "#skills") {
        // Pengecekan aman agar tidak blank
        if (typeof createSkills === "function") {
            try {
                container.appendChild(createSkills());
            } catch (err) {
                console.error("Error pada skills:", err);
                container.appendChild(createElement("h2", "section-title", "Skills"));
            }
        } else {
            container.appendChild(createElement("h2", "section-title", "Skills"));
        }
    } 
    else if (currentHash === "#blog") {
        const blogTitle = createElement("h2", "section-title", "Coming Soon!");
        container.appendChild(blogTitle);
    } 
    else {
        container.appendChild(createHero());
        if (typeof createEducation === "function") {
            container.appendChild(createEducation());
        }
    }
    
    container.appendChild(createFooter());
    appContainer.appendChild(container);
}

function initApp() {
    renderPage();
    window.addEventListener("hashchange", renderPage);
}

document.addEventListener("DOMContentLoaded", initApp);