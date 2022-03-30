import React from "react";
import {Link} from "react-router-dom";

const projects= (props)=> {
    return(
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.projects.map((project) => {
                            return (
                                <tr key={project.id}>
                                    <td>{project.name}</td>
                                    {project.taskGroupList.map((element) => {
                                        return(
                                        <td>{element.name}</td>
                                    )
                                    })}
                                    <td>
                                        <Link className={"btn btn-danger"}
                                              onClick={() => props.onDelete(project.id)}
                                              to={`/products`}>
                                            Delete
                                        </Link>
                                        <Link className={"btn btn-info mx-2"}
                                              onClick={() => props.onEdit(project.id)}
                                              to={`/projects/edit/${project.id}`}>
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
                            <Link className={"btn btn-block btn-dark"} to={"/projects/add"}>Add new project</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default projects;