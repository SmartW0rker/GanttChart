import React from 'react';
import {useHistory} from 'react-router-dom';

const EmployeeAdd = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        employeeType: null,
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
        const employeeType = formData.employeeType;


        props.onAddEmployee(name, employeeType);
        history.push("/employees");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Employee name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter project name"
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Employee Type</label>
                        <select name="employeeType" className="form-control" onChange={handleChange}>
                            <option value="MANAGER">MANAGER</option>
                            <option value="PROGRAMMER">PROGRAMMER</option>
                            <option value="TESTER">TESTER</option>
                            <option value="OTHER">OTHER</option>
                        </select>
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EmployeeAdd;
