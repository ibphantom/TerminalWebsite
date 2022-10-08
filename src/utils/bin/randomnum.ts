export const randomnum = async (args: number[]): Promise<number> => {
  const rndInt = randomIntFromInterval(99999, 1000000)

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
  }
  return rndInt
};
