import React from 'react';
import {useHistory} from 'react-router-dom';

const EmployeeEdit = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        employeeType: null
    })
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })

    }



    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.employee.name;
        const employeeType = formData.employeeType!==null ? formData.employeeType :
            props.employee.employeeType;

        props.onEditEmployee(props.employee.id, name, employeeType);
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
                               placeholder={props.employee.name}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Employee Type</label>
                        <select name="employeeType" className="form-control" onChange={handleChange}>
                            <option selected={props.employee.employeeType==="MANAGER"} value="MANAGER">MANAGER</option>
                            <option selected={props.employee.employeeType==="PROGRAMMER"} value="PROGRAMMER">PROGRAMMER</option>
                            <option selected={props.employee.employeeType==="TESTER"} value="TESTER">TESTER</option>
                            <option selected={props.employee.employeeType==="OTHER"} value="OTHER">OTHER</option>
                        </select>
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EmployeeEdit;