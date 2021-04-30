
import React from "react"
import {SearchPanel} from "./search-panel"
import {List} from './list'
import {useState,useEffect} from "react"
import {cleanObject} from "../../utils"

const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = ()=>{
    const [users,setUsers] =useState([])
    const [param,setParam] =useState({
        name:'',
        personId:''
    })
    const [list, setList] = useState([])
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanO)`).then(async response =>{
            if(response.ok){
                setList(await response.json())
            }
        })
    }, [param])
    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async response =>{
            if(response.ok){
                setUsers(await response.json())
            }
        })
    }, [param])
    return <div>
        <SearchPanel param={param} users={users} setParam={setParam}></SearchPanel>
        <List list={list} users={users}></List>
    </div>
}