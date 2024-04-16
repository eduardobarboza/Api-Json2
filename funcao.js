async function post_Dados(url = "", data = {}) {

  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/2023.5.8'},
    body: JSON.stringify(data)
  };
  
  return await fetch('http://localhost:3000/produto', options)
    .then(response => response.json())
}