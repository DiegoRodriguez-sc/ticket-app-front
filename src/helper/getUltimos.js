

export const getUltimos = async() => {

  // const url = `${process.env.REACT_APP_API_URL}/last`;
  const url = `https://ticket-app-socket.herokuapp.com/last`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
}