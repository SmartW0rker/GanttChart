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
import ProjectEdit from "../Projects/projectEdit";
import EmployeeAdd from "../Employees/EmployeeAdd";
import EmployeeEdit from "../Employees/EmployeeEdit";
import TaskGroupAdd from "../TaskGroups/TaskGroupAdd";
import TaskGroupEdit from "../TaskGroups/TaskGroupEdit";
import TaskAdd from "../Tasks/TaskAdd/taskAdd";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            projects: [],
            taskGroups: [],
            tasks: [],
            selectedProject: {},
            selectedEmployee: {},
            selectedTaskGroup: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className={"container"}>
                            <Route path={"/employees"} exact render={() =>
                                <Employees employees={this.state.employees}
                                           onDelete={this.deleteEmployee}
                                           onEdit={this.getEmployee}
                                />}/>
                            <Route path={"/employees/add"} exact render={() =>
                            <EmployeeAdd onAddEmployee={this.addEmployee}
                                 />}/>
                        <Route path={"/employees/edit/:id"} exact render={() =>
                            <EmployeeEdit onEditEmployee={this.editEmployee}
                                          employee={this.state.selectedEmployee}
                            />}/>
                            <Route path={"/projects"} exact render={() =>
                                <Projects projects={this.state.projects}
                                          onEdit={this.getProject}
                                          onDelete={this.deleteProject}
                                />}/>
                        <Route path={"/projects/add"} exact render={() =>
                            <ProjectAdd taskGroupList={this.state.taskGroups}
                                        onAddProduct={this.addProject}
                            />}/>
                        <Route path={"/projects/edit/:id"} exact render={() =>
                            <ProjectEdit taskGroups={this.state.taskGroups}
                                         onEditProject={this.editProject}
                                         project={this.state.selectedProject}
                            />}/>
                        <Route path={"/taskGroups"} exact render={() =>
                            <TaskGroups taskGroups={this.state.taskGroups}
                                        onEdit={this.getTaskGroup}
                                        onDelete={this.deleteTaskGroup}
                            />}/>
                        <Route path={"/TaskGroups/add"} exact render={() =>
                        <TaskGroupAdd onAddTaskGroup={this.addTaskGroup}
                        />}/>
                        <Route path={"/TaskGroups/edit/:id"} exact render={() =>
                            <TaskGroupEdit tasks={this.state.tasks}
                                           onEditTaskGroup={this.editTaskGroup}
                                           taskGroup={this.state.selectedTaskGroup}
                            />}/>
                        <Route path={"/tasks"} exact render={() =>
                            <Tasks tasks={this.state.tasks}
                            />}/>
                        <Route path={"/tasks/add"} exact render={() =>
                            <TaskAdd onAddTask={this.addTask}
                            />}/>

                        <Redirect to={"/employees"}/>
                    </div>
                </main>
            </Router>

        );

    }

    componentDidMount() {
        this.loadEmployees();
        this.loadProjects();
        this.loadTaskGroups();
        this.loadTasks();
    }

    loadEmployees = () => {
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
    editProject= (id, name, taskGroupIds) =>{
        GanttService.editProject(id,name,taskGroupIds).then(()=>{
            this.loadProjects();
        })
    }
    deleteEmployee=(id) =>{
        GanttService.deleteEmployee(id).then(()=>{
            this.loadEmployees();
            })
    }
    addEmployee = (name,employeeType) =>{
        GanttService.addEmployee(name,employeeType).then(() =>{
            this.loadEmployees();
        })
    }
    getEmployee = (id) =>{
        GanttService.getEmployee(id)
            .then((data) => {
                this.setState({
                    selectedEmployee: data.data
                    })
                })
        }
    editEmployee= (id, name, employeeType) =>{
        GanttService.editEmployee(id,name,employeeType).then(()=>{
            this.loadEmployees();
        })
    }
    addTaskGroup= (name,start,deadLine,taskIds) =>{
        GanttService.addTaskGroup(name,start,deadLine,taskIds).then(() =>{
            this.loadTaskGroups();
        })
    }
    getTaskGroup = (id) => {
        GanttService.getTaskGroup(id)
            .then((data) => {
                this.setState({
                    selectedTaskGroup: data.data
                })
            }).then(()=>{
            console.log(this.state.selectedTaskGroup)
        })
    }
    deleteTaskGroup=(id) =>{
        GanttService.deleteTaskGroup(id).then(()=>{
            this.loadTaskGroups();
        })
    }
    editTaskGroup= (id, name, start, deadLine, taskIds,projectId) =>{
        GanttService.editTaskGroup(id,name,start,deadLine,taskIds,projectId).then(()=>{
            this.loadTaskGroups();
        })
    }
    addTask=(name,description,importanceTask,startDate,endDate,percentComplete,workingHours,taskGroupId,taskIds,employeeIds) => {
        GanttService.addTask(name,description,importanceTask,startDate,endDate,percentComplete,workingHours,taskGroupId,taskIds,employeeIds)
            .then(()=>{
                this.loadTasks();
            })
    }

}

export default App;

