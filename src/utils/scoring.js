export function getRaw(player) {
  return player.scores.reduce((a, b) => a + b, 0);
}

export function getFinal(player) {
  return Math.round(getRaw(player) * player.mult * 10) / 10;
}

export function bandClass(v) {
  return `band-${v}`;
}

export function multClass(m) {
  if (m >= 0.98) return 'mband-hi';
  if (m >= 0.85) return 'mband-mid';
  return 'mband-lo';
}
