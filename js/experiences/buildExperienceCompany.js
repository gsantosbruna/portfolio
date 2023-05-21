import { conectResume } from "../conectResume.js";
import { createDetailCard } from "./buildExperienceDetail.js";

const listCompanyExperience = document.querySelector("[data-company]");
let lastClickedItem = null;

export default function createCompanyCard(element) {
  const { company, title, startDate, endDate, description } = element;
  const companyCard = document.createElement("li");
  companyCard.className = "experience-company__item";
  const icon = `./img/${company.toLowerCase()}.svg`;
  companyCard.innerHTML = `
    <img class="experience__icon" src="${icon}" alt="logo ${company}"/>
    <div class="experience__description">
        <h3 class="experience-company__item-name">${company}</h3>
        <p class="experience-company__item-title">${title}</p>
    </div>
    `;

  companyCard.addEventListener("click", function () {
    handleCompanyCardClick(companyCard);
    createDetailCard(title, company, startDate, endDate, description);
  });

  return companyCard;
}

function handleCompanyCardClick(companyCard) {
  if (lastClickedItem !== companyCard) {
    if (lastClickedItem) {
      lastClickedItem.classList.remove("clicked");
    }
    companyCard.classList.add("clicked");
    lastClickedItem = companyCard;
  }
}

async function listCompanies() {
  const listApi = await conectResume();
  listApi.experience.forEach((experience) =>
    listCompanyExperience.appendChild(createCompanyCard(experience))
  );
  handleCompanyCardClick(listCompanyExperience.firstElementChild);
}

function setupExperienceCards() {
  const companyCards = document.querySelectorAll(".experience-company__item");

  companyCards.forEach((companyCard) => {
    companyCard.addEventListener("click", function () {
      handleCompanyCardClick(companyCard);
    });
  });
}

setupExperienceCards();
listCompanies();
