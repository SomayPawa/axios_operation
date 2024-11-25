import React, { useEffect, useState } from 'react'
import { addpost, updatepost } from '../axiosapi/Api';

const Second = ({data,setdata,updateele,setupdateele}) => {

    const [add,setadd] = useState({
        title : '',
        body : '',
    });
    let isEmpty = Object.keys(updateele).length === 0;
    useEffect(() => {
        setadd({
            title: updateele.title || "",
            body: updateele.body || "",
        });
    }, [updateele]);


    const changehuha = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setadd((prev)=>{
            return {
                ...prev,
                [name] : value,
           };
        })
    }

    // console.log("hello guys",data);
    const adddatapost = async () => {
        const res = await addpost(add);
        if(res.status === 201){
            setdata([...data,res.data]);
            setadd({title : "" , body : ""});
        }
    }

    const updatedatapost = async () => {
        try{
            const res = await updatepost (updateele.id,add);  // yaha add data aab hai 
            // aab jo setdata hai isme res ke data bhi to daalna hai jo change kiya vo
            setdata((prev)=>{
                return prev.map((curr)=>{
                    return curr.id === updateele.id ? res.data : curr;
                })
            })

            setadd({title : "" , body : ""});
            setupdateele ({});
        }
        catch(err){
            console.log("error to hai",err);
        }
    }


    const chalsubmit = (e) => {
        e.preventDefault();
        if (isEmpty) {
            adddatapost();
        } else {
            updatedatapost();
        }
    };
    


   

    return (
        <form onSubmit={chalsubmit}>
        <input 
            type = "text"
            placeholder='enter title'
            name = "title"
            onChange={changehuha}
            value={add.title}

        />
        <input
            type = "text"
            placeholder='enter body'
            name = "body"
            onChange={changehuha}
            value = {add.body}

        />

        <button type="submit">
            {isEmpty ? "Add" : "Edit"}
        </button>

        </form>
    )
}

export default Second
