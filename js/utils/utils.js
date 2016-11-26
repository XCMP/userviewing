function getUTCDate() {
  const now = new Date();
  const UTC = new Date(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds()
  );
  return UTC.getTime();
}

export {
  getUTCDate
}