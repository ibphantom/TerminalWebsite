export const randomnum = async (args: string[]): Promise<string> => {
  const rndInt = randomIntFromInterval(99999, 1000000);
  
  function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
  
    }
  return rndInt
};
