import { conectResume } from "../conectResume.js";

const worksContainer = document.querySelector(".works");

export default function createProjectCard(project) {
  const worksItem = document.createElement("div");
  worksItem.classList.add("works__item");

  const title = document.createElement("h3");
  title.classList.add("works__title");
  title.textContent = project.title;
  worksItem.appendChild(title);

  const image = document.createElement("img");
  image.classList.add("works__img");
  image.src = project.image;
  image.alt = project.title;
  worksItem.appendChild(image);

  const worksFooter = document.createElement("div");
  worksFooter.classList.add("works__footer");

  const tagsLinks = document.createElement("div");
  tagsLinks.classList.add("works__tags__links");

  const tags = document.createElement("ul");
  tags.classList.add("works__tags");
  for (const tag of project.tags) {
    const tagLi = document.createElement("li");
    tagLi.classList.add("works__tag");
    const tagText = document.createElement("p");
    tagText.classList.add("works__tag__text");
    tagText.textContent = tag;
    tagLi.appendChild(tagText);
    tags.appendChild(tagLi);
  }
  tagsLinks.appendChild(tags);

  const links = document.createElement("ul");
  links.classList.add("works__links");
  const githubLink = document.createElement("a");
  githubLink.href = project.githubLink;
  const githubImage = document.createElement("img");
  githubImage.classList.add("works__link");
  githubImage.src = "./img/github.svg";
  githubImage.alt = "github";
  githubLink.appendChild(githubImage);
  links.appendChild(githubLink);

  if (project.liveLink) {
    const liveLink = document.createElement("a");
    liveLink.href = project.liveLink;
    const liveImage = document.createElement("img");
    liveImage.classList.add("works__link");
    liveImage.src = "./img/link.svg";
    liveImage.alt = "link";
    liveLink.appendChild(liveImage);
    links.appendChild(liveLink);
  }

  tagsLinks.appendChild(links);
  worksFooter.appendChild(tagsLinks);

  const description = document.createElement("p");
  description.classList.add("works__description");
  description.textContent = project.description;
  worksFooter.appendChild(description);

  worksItem.appendChild(worksFooter);
  return worksItem;
}

async function listProjects() {
  const listApi = await conectResume();
  listApi.projects.forEach((project) =>
    worksContainer.appendChild(createProjectCard(project))
  );
}

listProjects();
