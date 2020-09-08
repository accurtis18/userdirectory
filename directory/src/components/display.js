import api from "../utils/api";
import React, { Component } from "react";

class Display extends Component {

    state = {
        result: [],
        filter: "",
        filterBy: "Name",
        currentSort: "default",
        sortField: ""
    };
    employees = []
    
    componentDidMount() {
        api.getEmployees().then(res => {
            console.log(res)
            this.setState({
                result: res.data.data.map((e, i) => ({
                    first: e.first_name,
                    last: e.last_name,
                    role: e.role_id,
                    key: i
                }))
            });
            this.employees = this.state.result;
        }).catch(err => console.log(err));
    }

render(){
    return(
        <div className="container">
            <div className="row">
                <h1 className="display-4 my-5">Employee Directory</h1>
            </div>
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th onClick={this.sortName}>Name</th>
                            <th onClick={this.sortSalary}>Salary</th>
                            <th onClick={this.sortAge}>Age</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* {[...this.state.result].map((employee) => 
                        <EmployeeCard
                            name={employee.name}
                            salary={employee.salary}
                            age={employee.age}
                            key={employee.key}
                        />
                        )} */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

}
export default Display;