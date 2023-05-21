import { conectResume } from "../conectResume.js";

export function createDetailCard(
  title,
  company,
  startDate,
  endDate,
  descriptions
) {
  const mainDetailCard = document.querySelector(".exerience-detail__main");
  mainDetailCard.innerHTML = `
    <h4 class="experience-detail__title">
    ${title} at 
    <a class="emphasys-text" href="#">@${company}</a>
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
      <a class="emphasys-text" href="#">@${company}</a>
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

buildFirstDetail();
export const buildExperienceDetail = createDetailCard;
