import React from 'react';
import {useHistory} from 'react-router-dom';

const ProjectEdit = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        taskGroupList: []
    })
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })

    }
    const handleMultiChange = (e) => {
        var options = e.target.options;
        console.log(options);
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                console.log(options[i].value);
                value.push(options[i].value);
            }
        }
        updateFormData({
            ...formData,
            taskGroupList: value
        })

    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.project.name;
        const taskGroupIds = formData.taskGroupList.length !==0 ? formData.taskGroupList :
            props.project.taskGroupList.map((item)=>{return item.id});

        props.onEditProject(props.project.id, name, taskGroupIds);
        history.push("/projects");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Project name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.project.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Task Groups</label>
                        <select multiple={true} name="taskGroups" className="form-control" onChange={handleMultiChange}>
                            {props.taskGroups.map((term) => {
                                 return <option key={term.id} value={term.id}>{term.name}</option>
                            })}
                        </select>
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ProjectEdit;
