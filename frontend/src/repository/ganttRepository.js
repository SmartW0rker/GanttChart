import axios from "../custom-axios/axios";

const GanttService={
    fetchEmployees: () => {
        return axios.get("/employees/");
    },
    fetchProjects: ()=>{
        return axios.get("/project/");
    }
}
export default GanttService;