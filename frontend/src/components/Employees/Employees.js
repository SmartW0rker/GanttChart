import React from "react";
import {Link} from "react-router-dom";

const employees = (props) =>{
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>EmployeeType</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.employees.map((employee) => {
                            return (
                                <tr key={employee.id}>
                                    <td>{employee.name}</td>
                                    <td>{employee.employeeType}</td>
                                    <td>
                                        <Link className={"btn btn-danger"}
                                              onClick={() => props.onDelete(employee.id)}
                                              to={`/employees`}>
                                            Delete
                                        </Link>
                                        <Link className={"btn btn-info mx-2"}
                                              onClick={() => props.onEdit(employee.id)}
                                              to={`/employees/edit/${employee.id}`}>
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <Link className={"btn btn-block btn-dark"} to={"/employees/add"}>Add new Employee</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
export default employees;