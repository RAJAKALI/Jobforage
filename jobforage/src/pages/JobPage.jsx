import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';
const JobPage = () => {
  const {id} = useParams();
  const [job,setJob]=useState(null);
  const [loading,setLoding]=useState(true);
  useEffect(()=>{
    const fetchjob=async()=>{
      try{
        const res=await fetch(`/api/jobs/${id}`);
        const data=await res.json();
        setJob(data);
      }catch(error)
      {
        console.log('Error fetching data',error);
      }finally{
        setLoding(false);
      }
    }
    fetchjob();
  },[])
  return loading ? <Spinner loading={loading}/> : (<h1>{job.title}</h1>)
};

export default JobPage;