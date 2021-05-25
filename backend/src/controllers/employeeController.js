var Employee = require("../model/Employee");
var Role = require("../model/Role");
var sequelize = require("../model/database");

const controller = {};
sequelize.sync();

controller.testdata = async (req, res) => {
  const response = await sequelize
    .sync()
    .then(function () {
      /** APAGAR após a primeira EXECUÇÃO 

//Cria Role
Role.create({
role: 'Admin'
});
Role.create({
role: 'ProjectManager'
});
Role.create({
role: 'Programer'
});
// Cria employee
Employee.create({
name: 'Nuno Costa',
email: 'ncosta@estgv.ipv.pt',
address: 'Campus Politécnico, Viseu, Portugal',
phone: '232480533',
roleId:1
});


Employee.create({
name: 'Sousa Marques',
email: 'marquesousa@nop.pt',
address: 'Rua da Missa, Lisboa, Portugal',
phone: '221485543',
roleId:1
});*/

      const data = Employee.findAll();
      return data;
    })
    .catch((err) => {
      return err;
    });
  res.json(response);
};

/* LISTAGEM ---------------------- */
controller.list = async (req, res) => {
  const data = await Employee.findAll({
    include: [Role],
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data });
};

controller.test = (req, res) => {
  const data = {
    name: "Diogo Nunes",
    age: 20,
    city: "Viseu",
  };
  console.log("Envio de dados do Controlador EMPLOYEE.");
  res.json(data);
};

/* REGISTAR ---------------------- */
controller.create = async (req, res) => {
  // data
  const { name, email, address, phone, role } = req.body;
  // create
  const data = await Employee.create({
    name: name,
    email: email,
    address: address,
    phone: phone,
    roleId: role,
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      console.log("Erro: " + error);
      return error;
    });
  // return res
  res.status(200).json({
    success: true,
    message: "Registado",
    data: data,
  });
};

/* BUSCAR para EDITAR ----------------------------------------------- */
controller.get = async (req, res) => {
  const { id } = req.params;
  const data = await Employee.findAll({
    where: { id: id },
    include: [Role],
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data });
};

/* EDITAR --------------------------------------------------- */
controller.update = async (req, res) => {
  // parameter get id
  const { id } = req.params;
  // parameter POST
  const { name, email, address, phone, role } = req.body;
  // Update data
  const data = await Employee.update(
    {
      name: name,
      email: email,
      address: address,
      phone: phone,
      roleId: role,
    },
    {
      where: { id: id },
    }
  )
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data, message: "Updated successful" });
};

/* DELETE --------------------------------------------------- */
controller.delete = async (req, res) => {
  // parâmetros por post
  const { id } = req.body;
  // delete por sequelize
  const del = await Employee.destroy({
    where: { id: id },
  });
  res.json({ success: true, deleted: del, message: "Deleted successful" });
};

module.exports = controller;
