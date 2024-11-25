import React, { useEffect, useState } from 'react'
import { deletepost, getpost } from '../axiosapi/Api';
import Second from './Second';

const First = () => {
    const [data,setdata] = useState([]);
    const[updateele,setupdateele] = useState({});

    const dataprint = async () => {
        const res = await getpost();
        console.log(res);
        setdata(res.data);
    }
    useEffect(()=>{
        dataprint();
    },[]);
    const deleteker = async (id) => {
        try{
            const x1 = await deletepost(id);
            if(x1.status === 200){
                const val = data.filter((prev)=>{
                    return prev.id != id
                })
                setdata(val);
            }
            else{
                console.log("error");
            }
        }
        catch(err){
            console.log("error hai bhai error",err);
        }
    }
    
    const updateker = (val) => {
        setupdateele(val);
    }

    return (
        <>
            <Second data = {data} setdata = {setdata} updateele = {updateele} setupdateele = {setupdateele}/>
            <ul>
                {
                    data.map((val)=>{
                        const {id,title,body} = val;
                        return(
                            <li key = {id}>
                                <h1>id: {id}</h1>
                                <p>title : {title}</p>
                                <p>body:{body}</p>
                                <button onClick = {() => {deleteker(id)}}>delete</button>
                                <button onClick={()=>{updateker(val)}}>Edit</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default First
