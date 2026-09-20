const socialsData = [
        { name: "GitHub", link: "https://github.com" },
        { name: "LinkedIn", link: "https://linkedin.com" },
        { name: "instagram", link: "https://instagram.com" },
      { name: "facebook", link: "https://facebook.com" },
  { name: "email", link: "mailto:andiasptr18@gmail.com" }
    ];

function createSocials() {
  const socialDiv = createElement("div", "hero-socials");
    
    socialsData.forEach(social => {
        const a = createElement("a");
        a.href = social.link;
        a.target = "_blank";

        let iconClass = "fa-solid fa-link";
        if (social.name.toLowerCase() === "github") iconClass = "fa-brands fa-github";
        if (social.name.toLowerCase() === "linkedin") iconClass = "fa-brands fa-linkedin";
        if (social.name.toLocaleLowerCase() === "instagram") iconClass = "fa-brands fa-instagram";
        if (social.name.toLocaleLowerCase() === "facebook") iconClass = "fa-brands fa-facebook";
        if (social.name.toLowerCase() === "email") iconClass = "fa-solid fa-envelope";
        
        const socialIcon = createElement("i", iconClass);
        const socialText = document.createTextNode(` ${social.name}`);

        a.appendChild(socialIcon);
        a.appendChild(socialText);
        socialDiv.appendChild(a);
    });
  return socialDiv;
}