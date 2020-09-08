const employeeModel = require('../models/employeeModel.js');

class Employee {

    constructor(employee_obj){
        this._employee = employee_obj;
    }

    get id(){
        return this._employee.id;
    }

    get first_name(){
        return this._employee.first_name
    }
    
    set first_name(first_name){
        this._employee.first_name = first_name;
    }

    get last_name(){
        return this._empoyee.last_name
    }

    set last_name(last_name){
        this._empoyee.last_name = last_name;
    }

    get role_id(){
        return this._employee.role_id
    }

    set role_id(role_id){
        this._employee.role_id = role_id;
    }

    get manager_id(){
        return this._employee.manager_id
    }

    set manager_id(manager_id){
        this._employee.role_id = manager_id;
    }

    async insert(){
        const results = await employeeModel.insert(this._employee);
        this._employee.id = results.insertId;
    }

    async getAll(){
        this._employee = await employeeModel.selectAll();
    }

    async getById(id){
        this._employee = await employeeModel.selectByID(id);
    }

    async merge(new_employee){
        this._employee = {...this._employee, ...new_employee}
    }

    async update(id){
        await employeeModel.update(id, this._employee);
    }

    getLiteral(){
        return this._employee;
    }
}

module.exports = Employee;