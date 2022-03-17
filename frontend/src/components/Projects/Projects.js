import React from "react";

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
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}
export default projects;