import React, { Component } from "react";
import data from '../db/data.json';
// import Employee from './employee.js';

function Employee(props) {
    return (
        <tr>
            <td>{props.employee.first_name}</td>
            <td>{props.employee.last_name}</td>
            <td>{props.employee.role_id}</td>
        </tr>
    );
  }
      
class Display extends Component {

    // state = {
    //     result: [],
    // };

    // employees = [];

    // componentDidMount() {
    //     this.setState({
    //         result: data.map((e, i) => ({
    //                 first: e.first_name,
    //                 last: e.last_name,
    //                 role: e.role_id,
    //                 key: i
    //             }))
    //     });
    //         this.employees = this.state.result;
    // }
      
    constructor(props) {
        super(props);
          this.state = {
            originalData: data,
            employees: data
          }
        }
      
        sortByFirstName() {
            const sortResult = (this.state.originalData).sort((a,b) => (a.first_name > b.first_name) ? 1 : -1)
            this.setState({ employees: sortResult });
        }
      
        filterByRole(event) {
          let employeesCopy = this.state.originalData.slice();
          let filteredEmployees = employeesCopy.filter(employee =>
            employee.role_id.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
      
          this.setState({ employees: filteredEmployees });
        }
      
        render() {
          return      ( <div className='row'>
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"><button onClick={() => this.sortByFirstName()}>First</button></th>
                  <th scope="col">Last</th>
                  <th scope="col">Role ID</th>
                  <td><input type="text" onChange={(event) => this.filterByRole(event)} />Search By Role Here</td>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((employee, index) => (
                  <Employee key={index} index={index} employee={employee} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
        }
      }
export default Display;