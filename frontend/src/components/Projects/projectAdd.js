import React from 'react';
import {useHistory} from 'react-router-dom';

const ProjectAdd = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        taskGroupList: null,
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const taskGroupList = formData.taskGroupList;


        props.onAddProduct(name, taskGroupList);
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
                               required
                               placeholder="Enter project name"
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ProjectAdd;
