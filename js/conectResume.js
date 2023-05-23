function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var jsonLink = "resume";
var language = getUrlParameter("lang");

switch (language) {
  case "en":
    jsonLink = "resume";
    break;
  case "pt-br":
    jsonLink = "curriculo";
    break;
  case "fr":
    jsonLink = "cv";
    break;
}

const url = `https://raw.githubusercontent.com/gsantosbruna/portfolio/main/resume/${jsonLink}.json`;

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
