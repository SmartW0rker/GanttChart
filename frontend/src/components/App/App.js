import './App.css';
import React, {Component} from "react";
import Employees from '../Employees/Employees';
import GanttService from "../../repository/ganttRepository";
import {BrowserRouter as Router,Redirect, Route} from 'react-router-dom';
import Projects from '../Projects/Projects'
import Header from '../Header/header';
import TaskGroups from '../TaskGroups/taskGroups';
import Tasks from '../Tasks/TaskList/tasks';
import ProjectAdd from "../Projects/projectAdd";
import data from "bootstrap/js/src/dom/data";
import ProjectEdit from "../Projects/projectEdit";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            projects: [],
            taskGroups: [],
            tasks: [],
            selectedProject: {}
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
                                <Projects projects={this.state.projects}
                                          onEdit={this.getProject}
                                          onDelete={this.deleteProject}
                                />}/>
                        <Route path={"/taskGroups"} exact render={() =>
                            <TaskGroups taskGroups={this.state.taskGroups}/>}/>
                        <Route path={"/tasks"} exact render={() =>
                            <Tasks tasks={this.state.tasks}/>}/>
                        <Route path={"/projects/add"} exact render={() =>
                            <ProjectAdd taskGroupList={this.state.taskGroups}
                                        onAddProduct={this.addProject}/>}/>
                        <Route path={"/projects/edit/:id"} exact render={() =>
                            <ProjectEdit taskGroups={this.state.taskGroups}
                                         onEditProject={this.editProject}
                                         project={this.state.selectedProject}/>}/>

                        <Redirect to={"/employees"}/>
                    </div>
                </main>
            </Router>

        );

    }

    componentDidMount() {
        this.loadManufacturers();
        this.loadProjects();
        this.loadTaskGroups();
        this.loadTasks();
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
    loadTaskGroups = () =>{
        GanttService.fetchTaskGroups()
            .then((data) =>{
                this.setState({
                    taskGroups: data.data
                })
            })
    }
    loadTasks = () =>{
        GanttService.fetchTasks()
            .then((data) =>{
                this.setState({
                    tasks: data.data
                })
            })
    }
    addProject =(name,taskGroupList)=>{
        GanttService.addProject(name,taskGroupList).then(() =>{
            this.loadProjects();
            })
        }
    deleteProject =(id)=>{
        GanttService.deleteProject(id).then(()=>{
            this.loadProjects();
            })
    }
    getProject = (id) => {
        GanttService.getProject(id)
            .then((data) => {
                this.setState({
                    selectedProject: data.data
                })
            })
    }
    editProject= (id, name, taskGroupList) =>{
        GanttService.editProject(id,name,taskGroupList).then(()=>{
            this.loadProjects();
        })
    }

}

export default App;

