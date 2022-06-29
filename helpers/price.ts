export const jsPriceFormat = (param: number): string => {
  let string = String(param);
  var ret = [];
  let hiah = 1;
  for (let i = string.length - 1; i >= 0; i--) {
    if (i != 0 && hiah % 3 == 0) {
      ret.push(`.${string[i]}`)
    } else {
      ret.push(`${string[i]}`)
    }
    hiah++;
  }
  return ret.reverse().join("");
};