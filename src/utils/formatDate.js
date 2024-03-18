export function dateToHoursMins(time) {
  var date = new Date(time);
  return date.toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  });
}
