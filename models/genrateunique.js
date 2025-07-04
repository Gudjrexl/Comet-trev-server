function generateTwoDigit() {
  return Math.floor(10 + Math.random() * 90); // 10-99
}

function generateFourLetterCode() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from({ length: 4 }, () =>
    letters.charAt(Math.floor(Math.random() * letters.length))
  ).join('');
}

function generateUID(phone) {
  return "trev" + phone + generateTwoDigit();
}

module.exports = {generateUID,generateFourLetterCode};
