/**
 * Create a function that takes a string with at least one sentence in it and
 * returns a string with the part(s) after the comma at the beginning of the
 * sentence(s).
 *
 * reverseLegoYoda("Hit you with my stick, I shall.")
 * ➞ "I shall hit you with my stick."
 * reverseLegoYoda("Rejected me, my crush has. Ketamine, I need.")
 * ➞ "My crush has rejected me. I need ketamine."
 *
 * reverseLegoYoda("An alien, I am. Holding me captive in Area 51, the government is.")
 * ➞ "I am an alien. The government is holding me captive in Area 51."
 */
function reverseYoda(str) {
  let phrases = str.split('.');

  const converted = phrases.reduce((accum, current) => {
    if (current.length) {
      const sections = current.split(',');
      const start = sections[0].trim();
      const end = sections[1].trim();
      accum.push(`${end[0].toUpperCase() + end.substring(1)} ${start[0].toLowerCase() + start.substring(1)}.`);
    }
    return accum;
  }, []);

  return converted.join(' ');
}

module.exports = reverseYoda;