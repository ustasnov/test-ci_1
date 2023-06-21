function getHealthColor(characterHealth) {
  if (characterHealth.health < 15) {
    return 'красный';
  } if (characterHealth.health < 50) {
    return 'жёлтый';
  }
  return 'зелёный';
}

module.exports = {
  getHealthColor,
};
