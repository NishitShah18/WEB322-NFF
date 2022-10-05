app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});
