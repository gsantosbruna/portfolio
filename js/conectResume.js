var jsonLink;

switch (window.location.pathname) {
  case '/index.html':
    jsonLink = 'resume';
    break;
  case '/index-pt-br.html':
    jsonLink = 'curriculo';
    break;
  case '/index-fr.html':
    jsonLink = 'cv';
    break;
}

const url =
  `https://raw.githubusercontent.com/gsantosbruna/portfolio/main/resume/${jsonLink}.json`;

async function getResume() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error retrieving JSON:", error);
  }
}

export const conectResume = getResume;
