import React from "react";

function Employee(props) {
    return (
        <tr>
            <td>{props.first_name}</td>
            <td>{props.last_name}</td>
            <td>{props.role_id}</td>
        </tr>
    );
}

export default Employee;