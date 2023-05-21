async function getResume() {
  const response = await fetch(
    "https://raw.githubusercontent.com/gsantosbruna/portfolio/main/resume.json"
  );
  const data = await response.json();
  return data;
}

export const conectResume = getResume;
