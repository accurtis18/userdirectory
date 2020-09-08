const Company = require('../classes/employee.js');

exports.create = async (req, res) => {
    const company = new Company(req.body);
    await company.insert();
    res.json(company.getLiteral());
}

exports.readAll = async (req, res) => {
    const company = new Company();
    await company.getAll();
    res.json(company.getLiteral());
}

exports.read = async (req, res) => {
    const id = req.params.id;
    const company = new Company();
    await company.getById(id);
    res.json(company.getLiteral());
}

exports.update = async (req, res) => {
    const id = req.params.id;
    const company = new Company();
    await company.getById(id);
    await company.merge(req.body);
    console.log(company, "merge");
    await company.update(id);
    res.json(company.getLiteral());
}

exports.delete = async (req, res) => {

}