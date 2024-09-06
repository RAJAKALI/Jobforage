import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import AddJobPage from './pages/AddJobPage';
import JobPage,{jobLoader} from './pages/jobpage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  const addJob= async (newJob)=>{
  const res=await fetch('/api/jobs',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newJob),
  });
  return;
  };
  
  const deleteJob=async (id)=>{
      const res=await fetch(`/api/jobs/${id}`,{
        method:'DELETE'
      });
      return;
    
  };

  const updatedJob= async (job)=>{
    const res=await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(job),
    });
    return;
    };

  const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
  <Route index element={<HomePage/>}/>
  <Route path='/jobs' element={<JobsPage/>}/>
  <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
  <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updatedJob}/>} loader={jobLoader}/>
  <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
  <Route path='*' element={<NotFound/>}/>
  </Route>
  ));
  

  return <RouterProvider router={router}/>
};

export default App;