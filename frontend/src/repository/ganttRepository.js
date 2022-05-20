import axios from "../custom-axios/axios";

const GanttService={
    fetchEmployees: () => {
        return axios.get("/employees/");
    },
    fetchProjects: ()=>{
        return axios.get("/project/");
    },
    fetchTaskGroups: ()=>{
        return axios.get("/task_group/");
    },
    fetchTasks: ()=>{
        return axios.get("/task/");
    },

    addProject: (name,taskGroupList)=>{
        return axios.post("/project/add", {
            "name" : name,
            "taskGroupList" : taskGroupList
        });
    },
    deleteProject: (id)=>{
       return axios.delete(`/project/delete/${id}`);
    },
    editProject: (id, name, taskGroupIds) => {
        return axios.put(`/project/edit/${id}`, {
            "name" : name,
            "taskGroupIds" : taskGroupIds
        });
    },
    getProject: (id) =>{
        return axios.get(`/project/${id}`);
    },
    deleteEmployee: (id)=>{
        return axios.delete(`/employees/delete/${id}`);
    },
    getEmployee: (id) =>{
        return axios.get(`/employees/${id}`);
    },
    editEmployee: (id, name, employeeType) => {
        return axios.put(`/employees/edit/${id}`, {
            "name" : name,
            "employeeType" : employeeType
        });
    },
    addEmployee: (name,employeeType) =>{
        return axios.post("/employees/add", {
            "name" : name,
            "employeeType" : employeeType
        });
    },
    addTaskGroup: (name,start,deadLine,taskIds)=>{
        return axios.post("/task_group/add", {
            "name" : name,
            "start" : start,
            "deadLine" : deadLine,
            "taskIds"  : taskIds
        });
    },
    deleteTaskGroup: (id)=>{
        return axios.delete(`/task_group/delete/${id}`);
    },
    getTaskGroup: (id) =>{
        return axios.get(`/task_group/${id}`);
    },
    editTaskGroup: (id, name, start, deadLine, taskIds,projectId) => {
        return axios.put(`/task_group/edit/${id}`, {
            "name" : name,
            "start" : start,
            "deadLine" : deadLine,
            "taskIds" : taskIds,
            "projectId" : projectId
        });
    },
    addTask: (name,description,importanceTask,startDate,endDate,percentComplete,workingHours,taskGroupId,taskIds,employeeIds) =>{
        return axios.post("/task/add", {
            "name" : name,
            "description" : description,
            "importanceTask" : importanceTask,
            "startDate" : startDate,
            "endDate"  : endDate,
            "percentComplete" : percentComplete,
            "workingHours" : workingHours,
            "taskGroupId" : taskGroupId,
            "taskIds" : taskIds,
            "employeeIds" : employeeIds
        });
    }
}
export default GanttService;