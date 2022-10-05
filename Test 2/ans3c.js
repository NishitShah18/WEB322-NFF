app.get("/student/:studNum", (req, res) => {
  res.json({ message: req.params.studNum });
});
