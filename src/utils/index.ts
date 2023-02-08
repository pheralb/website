export const hashCode = (name: string) => {
  var hash = 0;
  for (var i = 0; i < name.length; i++) {
    var character = name.charCodeAt(i);
    hash = (hash << 5) - hash + character;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

export const getDigit = (number: number, ntn: number) => {
  return Math.floor((number / Math.pow(10, ntn)) % 10);
};

export const getUnit = (number: number, range: number, index?: number) => {
  let value = number % range;

  if (index && getDigit(number, index) % 2 === 0) {
    return -value;
  } else return value;
};

export const getRandomColor = (
  number: number,
  colors: string[],
  range: number
) => {
  return colors[number % range];
};

export const getBoolean = (number: number, ntn: number) => {
  return !(getDigit(number, ntn) % 2);
};

export const getContrast = (hexcolor: string) => {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === "#") {
    hexcolor = hexcolor.slice(1);
  }

  // Convert to RGB value
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);

  // Get YIQ ratio
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? "#000000" : "#FFFFFF";
};
