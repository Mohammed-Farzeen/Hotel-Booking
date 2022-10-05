import apiCall from "./apiCall";

export const updateStatus=(id,status)=>apiCall("/booking","PUT",{id,status})