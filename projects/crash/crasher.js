let value = "uwu";

setInterval(() => {
  // triple-doubling per tick (8x growth)
  value += value;
  value += value;
  value += value;

  const url = new URL(location.href);
  url.searchParams.set("meme", value);

  history.replaceState(null, "", url);
}, 200);
