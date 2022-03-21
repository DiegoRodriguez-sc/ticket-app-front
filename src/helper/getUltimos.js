

export const getUltimos = async() => {

  const resp = await fetch(process.env.URLAPI || "http://localhost:8080/last");
  const data = await resp.json();

  return data;
}