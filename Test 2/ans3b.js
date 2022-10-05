app.get("/studentList", (req, rej) => {
  if (req.query.program) {
    res.json({ message: req.query.program }); //req.query.program = CPA
  } else if (req.query.school) {
    res.json({ message: req.query.school }); //req.query.school = ICT
  } else {
    res.json({ message: "all students" });
  }
});
