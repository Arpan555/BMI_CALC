import React,{useState} from 'react'
import cuid from "cuid"
import "./Home.css";
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { setUser} from '../../Redux/Actions/allAction'
const Home = () => {
    const [form,setForm]=useState({
        user:""
    })
    const user = useSelector(state=>state.reducer.user)
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        let {name,value}=e.target
        setForm({...form,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(setUser({
            user:form.user,
            id:cuid()
        }))
        setForm({user:""})
    }
    return (
        <div>
            <center>
                <h1>Add User</h1>
                <form onSubmit={handleSubmit}>
                    <label>User</label>
                    <input type="text" name="user" value={form.user} onChange={handleChange} />
                    <input className="bt" type="submit" value="Add" />
                </form>
                <br/><br/>
                {user && user.map(data=>
                    <div key={data.id}>
                            <Link to={`/app/${data.id}`}>
                     <h2>{data.user}</h2>
                        </Link>
                        
                    </div>)}
            </center>
        </div>
    )
}
export default Home
