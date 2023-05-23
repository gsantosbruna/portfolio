import { conectResume } from "../conectResume";

const banner = document.querySelector("[data-banner]");

export default function createBanner(data) {
  const bannerTitle = document.createElement("h1");
  bannerTitle.classList.add("banner__title");
  bannerTitle.textContent = `Hello I’m ${data.name}`;
  banner.appendChild(bannerTitle);

  const bannerSubtitle = document.createElement("p");
  bannerSubtitle.classList.add("banner__subtitle");
  bannerSubtitle.textContent = data.aboutMe;
  banner.appendChild(bannerSubtitle);

  const bannerTechs = document.createElement("ul");
  bannerTechs.classList.add("banner-techs");
  for (const tech of data.techs) {
    const techItem = document.createElement("li");
    techItem.classList.add("techs__item");
    const techIcon = document.createElement("img");
    techIcon.classList.add("banner-techs__icon");
    techIcon.src = `./img/${tech.toLowerCase()}.svg`;
    techIcon.alt = tech;
    techItem.appendChild(techIcon);
    const techText = document.createElement("p");
    techText.classList.add("banner-techs__text");
    techText.textContent = tech;
    techItem.appendChild(techText);
    bannerTechs.appendChild(techItem);
  }
  banner.appendChild(bannerTechs);
}

async function listBanner() {
  const listApi = await conectResume();
  createBanner(listApi);
}

listBanner();
