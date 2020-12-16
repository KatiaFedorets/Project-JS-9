export async function fetchGetOneCategory (url, oneCategory) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };
  const response = await fetch(`${url}call/specific/${oneCategory}`, options);
  const responseJson = await response.json();
  return responseJson;
};
