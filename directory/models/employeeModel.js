const mysql = require('../config/connection.js');

exports.selectAll = async () => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM employee`);
    console.log(data);
    return data;
}

exports.selectByID = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM employee WHERE id = ?`, [id]);
    return data[0];
}

exports.insert = async(employee_obj) =>{
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO employee SET ?;`, [employee_obj]);
    console.log(data);
    return data;
}

exports.update = async(id, employee_obj) =>{
    const connection = await mysql.connect();
    console.log(employee_obj, "model");
    const [data] = await connection.query(`UPDATE employee SET ? WHERE id = ?`, [employee_obj, id]);
    console.log(data);
    return data;
}