export function makeCapitalized(value) {
  if (value === null) {
    return null;
  }

  if (value === undefined) {
    return undefined;
  }
  let x = value.toLowerCase();
  return value.charAt(0).toUpperCase() + x.slice(1);
}
