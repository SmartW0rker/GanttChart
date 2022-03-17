import './App.css';
import React, {Component} from "react";
import Employees from '../Employees/Employees';
import GanttService from "../../repository/ganttRepository";
import {BrowserRouter as Router,Redirect, Route} from 'react-router-dom';
import Projects from '../Projects/Projects'
import Header from '../Header/header';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            projects: []
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className={"container"}>
                            <Route path={"/employees"} exact render={() =>
                                <Employees employees={this.state.employees}/>}/>
                            <Route path={"/projects"} exact render={() =>
                                <Projects projects={this.state.projects}/>}/>
                            <Redirect to={"/employees"}/>
                    </div>
                </main>
            </Router>

        );

    }

    componentDidMount() {
        this.loadManufacturers();
        this.loadProjects();
    }

    loadManufacturers = () => {
        GanttService.fetchEmployees()
            .then((data) => {
                this.setState({
                    employees: data.data
                })
            });
    }
    loadProjects = () => {
        GanttService.fetchProjects()
            .then((data) => {
                this.setState({
                    projects: data.data
                })
            });
    }

}

export default App;

