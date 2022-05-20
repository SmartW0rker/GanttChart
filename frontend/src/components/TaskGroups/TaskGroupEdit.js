import React from 'react';
import { useRef } from "react";
import {useHistory} from 'react-router-dom';

const TaskGroupEdit = (props) => {

    const history = useHistory();
    const ref1=useRef();
    const ref2=useRef();

    const [formData, updateFormData] = React.useState({
        "name" : "",
        "start" : null,
        "deadLine" : null,
        "taskIds"  : null,
        "projectId" : null,
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
        console.log(value);
        updateFormData({
            ...formData,
            taskIds: value
        })
    }



    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.taskGroup.name;
        const start = formData.start!==null ? formData.start :
            props.taskGroup.start;
        const deadLine = formData.deadLine!==null ? formData.deadLine :
            props.taskGroup.deadLine;
        const taskIds = formData.taskIds!==null ? formData.taskIds :
            props.taskGroup.taskIds;
        const projectid = formData.projectId!==null ? formData.projectId :
            props.taskGroup.projectId;
        console.log("taskIds: "+formData.taskIds)
        props.onEditTaskGroup(props.taskGroup.id, name, start, deadLine, taskIds,projectid);
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
                               placeholder={props.taskGroup.name}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="start">Start Date</label>
                        <input type="text"
                               ref={ref1}
                               className="form-control"
                               id="start"
                               name="start"
                               required
                               placeholder={props.taskGroup.start}
                               onChange={handleChange}
                               onFocus={() => (ref1.current.type = "date")}
                               onBlur={() => (ref1.current.type = "text")}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="deadLine">Deadline</label>
                        <input type="text"
                               ref={ref2}
                               className="form-control"
                               id="deadLine"
                               name="deadLine"
                               required
                               placeholder={props.taskGroup.deadLine}
                               onChange={handleChange}
                               onFocus={() => (ref2.current.type = "date")}
                               onBlur={() => (ref2.current.type = "text")}
                        />
                    </div>

                    <div className="form-group">
                        <label>Tasks</label>
                        <select multiple={true} name="taskIds" className="form-control" onChange={handleMultiChange}>
                            {props.tasks.map((term) => {
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

export default TaskGroupEdit;