import { conectResume } from "./conectResume.js";

const listCompanyElement = document.querySelector("[data-company]");
let lastClickedItem = null;

export default function buildCard(element) {
  const { company, title, startDate, endDate, description } = element;
  const companyCard = document.createElement("li");
  companyCard.className = "experience-company__item";
  const icon = `./img/${company}.svg`;
  companyCard.innerHTML = `
    <img class="experience__icon" src="${icon}" alt="logo ${company}"/>
    <div class="experience__description">
        <h3 class="experience-company__item-name">${company}</h3>
        <p class="experience-company__item-title">${title}</p>
    </div>
    `;

  companyCard.addEventListener("click", function () {
    handleCompanyCardClick(companyCard);
    buildDetail(title, company, startDate, endDate, description);
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
  listApi.experience.forEach((element) =>
    listCompanyElement.appendChild(buildCard(element))
  );
  const firstCompanyCard = document.querySelectorAll(
    ".experience-company__item"
  )[0];
  handleCompanyCardClick(document.querySelector(".experience-company__item"));
}

export function buildDetail(title, company, startDate, endDate, descriptions) {
  const mainDetailCard = document.querySelector(".exerience-detail__main");
  mainDetailCard.innerHTML = `
    <h4 class="experience-detail__title">
    ${title} at 
    <a class="experience-detail__link" href="#">@${company}</a>
    </h4>
    <p class="experience-detail__time">
    ${startDate} - ${endDate}
    </p>`;

  const descriptionDetailCard = document.querySelector(
    ".experience-detail__description"
  );

  descriptionDetailCard.innerHTML = "";

  descriptions.forEach((description) => {
    const p = document.createElement("p");
    p.className = "experience-detail__text";
    p.innerHTML = `<img class="experience-detail__icon" src="./img/arrow.svg" />${description}`;
    descriptionDetailCard.appendChild(p);
  });
}

async function buildFirstDetail() {
  const listApi = await conectResume();
  const { company, title, startDate, endDate, description } =
    listApi.experience[0];

  const mainDetailCard = document.querySelector(".exerience-detail__main");
  mainDetailCard.innerHTML = `
      <h4 class="experience-detail__title">
      ${title} at
      <a class="experience-detail__link" href="#">@${company}</a>
      </h4>
      <p class="experience-detail__time">
      ${startDate} - ${endDate}
      </p>`;

  const descriptionDetailCard = document.querySelector(
    ".experience-detail__description"
  );

  descriptionDetailCard.innerHTML = "";

  description.forEach((element) => {
    const p = document.createElement("p");
    p.className = "experience-detail__text";
    p.innerHTML = `<img class="experience-detail__icon" src="./img/arrow.svg" />${element}`;
    descriptionDetailCard.appendChild(p);
  });
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
buildFirstDetail();
