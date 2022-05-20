import React from 'react';
import {useHistory} from 'react-router-dom';

const TaskGroupAdd = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        "name" : "",
        "start" : null,
        "deadLine" : null,
        "taskIds"  : null
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
        const start = formData.start;
        const deadLine = formData.deadLine;
        const taskIds  = formData.taskIds;


        props.onAddTaskGroup(name, start, deadLine, taskIds);
        console.log(start,deadLine);
        history.push("/taskGroups");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Task Group name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter Task Group name"
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="start">Start Date</label>
                        <input type="date"
                               className="form-control"
                               id="start"
                               name="start"
                               required
                               placeholder="Enter start date"
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="deadLine">Deadline</label>
                        <input type="date"
                               className="form-control"
                               id="deadLine"
                               name="deadLine"
                               required
                               placeholder="Enter the deadline"
                               onChange={handleChange}
                        />
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default TaskGroupAdd;