async function getResume() {
  const response = await fetch("http://localhost:3000/data");
  const data = await response.json();
  return data;
}

export const conectResume = getResume;
