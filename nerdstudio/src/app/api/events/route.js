// pages/api/proxy.js
export default async function handler(req, res) {
  const token = 'your-auth-token'; // جایگزین با توکن واقعی خود

  const response = await fetch('http://5.78.55.161:8000/v1/api/translates/generate_translate/', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  res.status(response.status).json(await response.json());
}