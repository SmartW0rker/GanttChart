import React from 'react';
import {Link} from "react-router-dom";

const tasks= (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Description</th>
                            <th scope={"col"}>Task Importance</th>
                            <th scope={"col"}>Start Date</th>
                            <th scope={"col"}>End Date</th>
                            <th scope={"col"}>Percent Complete </th>
                            <th scope={"col"}>Working hours</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.tasks.map((task) => {
                            return (
                                <tr key={task.id}>
                                    <td>{task.name}</td>
                                    <td>{task.description}</td>
                                    <td>{task.importanceTask}</td>
                                    <td>{task.startDate}</td>
                                    <td>{task.endDate}</td>
                                    <td>{task.percentComplete}</td>
                                    <td>{task.workingHours}</td>
                                    <td>
                                        <Link className={"btn btn-danger"}
                                              onClick={() => props.onDelete(task.id)}
                                              to={`/taskGroups`}>
                                            Delete
                                        </Link>
                                        <Link className={"btn btn-info mx-2"}
                                              onClick={() => props.onEdit(task.id)}
                                              to={`/task/edit/${task.id}`}>
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
                            <Link className={"btn btn-block btn-dark"} to={"/tasks/add"}>Add new task</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default tasks;