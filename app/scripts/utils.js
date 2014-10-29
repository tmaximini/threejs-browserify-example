module.exports.getRandomHexColor = function() {
  return '0x' + Math.floor(Math.random()*16777215).toString();
};
