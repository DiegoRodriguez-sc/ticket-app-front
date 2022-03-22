

export const getUltimos = async() => {

  // const url = `${process.env.REACT_APP_API_URL}/last`;
  const url = `http://localhost:8080/last`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
}