import axios from 'axios';

export default async function handler(req, res) {
  const { city } = req.query;
  const { data } = await axios.get(`https://v2d.wttr.in/${city}?Fu`);

  res.status(200).json(data);
}
