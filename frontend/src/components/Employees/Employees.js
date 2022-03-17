import React from "react";

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
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}
export default employees;