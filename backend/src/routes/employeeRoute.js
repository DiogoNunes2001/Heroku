const express = require("express");
const router = express.Router();

//importer os controladores [2]

const employeeController = require("../controllers/employeeController");

router.get("/test", employeeController.test);
router.get("/save", (req, res) => {
  res.send("Rota save executada com sucesso…");
  res.json({ status: "Employeed Saved" });
});

router.get("/testdata", employeeController.testdata);
router.get("/list", employeeController.list);
router.get("/get/:id", employeeController.get);

router.post("/create", employeeController.create);
router.post("/update/:id", employeeController.update);
router.post("/delete", employeeController.delete);

module.exports = router;
