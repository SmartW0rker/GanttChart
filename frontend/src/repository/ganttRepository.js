import axios from "../custom-axios/axios";
import React from "react";

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
    editProject: (id, name, taskGroupList) => {
        return axios.put(`/project/edit/${id}`, {
            "name" : name,
            "taskGroupList" : taskGroupList
        });
    },
    getProject: (id) =>{
        return axios.get(`project/${id}`);
    }

}
export default GanttService;