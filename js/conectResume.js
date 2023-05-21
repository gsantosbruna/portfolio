const url =
  "https://raw.githubusercontent.com/gsantosbruna/portfolio/main/resume.json";

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
