import axios from 'axios';

export default async function handler(req, res) {
  const { city } = req.query;
  const { data } = await axios.get(`https://wttr.in/${city}?Fu2`);

  res.status(200).json(data);
}
