import React, { Component } from "react";
import data from '../db/data.json';

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
      
    constructor(props) {
        super(props);
          this.state = {
            data: data,
            employees: data
          }
        }
      
        sortByFirst() {
            const sortResult = (this.state.data).sort((a,b) => (a.first_name > b.first_name) ? 1 : -1)
            this.setState({ employees: sortResult });
        }
      
        filterByRole(event) {
          let employees = this.state.data.slice();
          let filteredRole = employees.filter(employee =>
            employee.role_id.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
          this.setState({ employees: filteredRole });
        }
      
        render() {
          return      ( <div className='row'>
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"><button onClick={() => this.sortByFirst()}>First</button></th>
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