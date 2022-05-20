import React from 'react';
import {useHistory} from 'react-router-dom';

const TaskAdd = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
    name: "",
    description: "",
    importanceTask: "LOW",
    startDate: "1900-01-01",
    endDate: "1900-01-01",
    percentComplete: 0,
    workingHours: 0
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
        const description = formData.description;
        const importanceTask = formData.importanceTask;
        const startDate = formData.startDate;
        const endDate = formData.endDate;
        const percentComplete=formData.percentComplete;
        const workingHours=formData.workingHours;
        console.log(name, description, importanceTask, startDate, endDate,percentComplete,workingHours)
        props.onAddTask(name, description, importanceTask, startDate, endDate,percentComplete,workingHours);
        history.push("/tasks");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Task name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter task name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea rows="4"
                               className="form-control"
                               id="description"
                               name="description"
                               placeholder="Description"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="importanceTask">Task importance</label>
                        <select
                               className="form-select"
                               id="importanceTask"
                               name="importanceTask"
                               onChange={handleChange}
                        >
                            <option selected value="LOW">LOW</option>
                            <option value="MEDIUM">MEDIUM</option>
                            <option value="HIGH">HIGH</option>
                            <option value="BLOCKER">BLOCKER</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="startDate">Start date</label>
                        <input type="date"
                               className="form-control"
                               id="startDate"
                               name="startDate"
                               placeholder="Start date"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endDate">End date</label>
                        <input type="date"
                               className="form-control"
                               id="endDate"
                               name="endDate"
                               placeholder="End date"
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="percentComplete">Percent complete</label>
                        <input type="number"
                               className="form-control"
                               id="percentComplete"
                               name="percentComplete"
                               placeholder="0"
                               min={0}
                               max={100}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="workingHours">Working hours</label>
                        <input type="number"
                               className="form-control"
                               id="workingHours"
                               name="workingHours"
                               placeholder="0"
                               min={0}
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default TaskAdd;
