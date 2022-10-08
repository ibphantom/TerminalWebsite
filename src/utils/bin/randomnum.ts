export const randomnum = async (args: string[]): Promise<string> => {
  function getRandomExcept(min, max, except) {
  except.sort(function(a, b) {
    return a - b;
  });
  var random = Math.floor(Math.random() * (max - min + 1 - except.length)) + min;
  var i;
  for (i = 0; i < except.length; i++) {
    if (except[i] > random) {
      break;
    }
    random++;
  }
  return random;
  }
}
