import React from 'react';
import {Link} from "react-router-dom";

const taskGroups= (props)=> {
    return(
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Start Date</th>
                            <th scope={"col"}>Dead line Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.taskGroups.map((taskGroup) => {
                            return (
                                <tr key={taskGroup.id}>
                                    <td>{taskGroup.name}</td>
                                    <td>{taskGroup.start}</td>
                                    <td>{taskGroup.deadLine}</td>
                                    <td>
                                        <Link className={"btn btn-danger"}
                                              onClick={() => props.onDelete(taskGroup.id)}
                                              to={`/taskGroups`}>
                                            Delete
                                        </Link>
                                        <Link className={"btn btn-info mx-2"}
                                              onClick={() => props.onEdit(taskGroup.id)}
                                              to={`/taskGroups/edit/${taskGroup.id}`}>
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
                            <Link className={"btn btn-block btn-dark"} to={"/taskGroups/add"}>Add new Task Group</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default taskGroups;