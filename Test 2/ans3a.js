app.get("/students/welcome", (req, res) => {
  res.sendFile(path.join(__dirname + "/welcome.html"));
});
