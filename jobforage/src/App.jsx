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
import JobPage from './pages/jobpage';

const router = createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<MainLayout/>}>
<Route index element={<HomePage/>}/>
<Route path='/jobs' element={<JobsPage/>}/>
<Route path='/jobs/:id' element={<JobPage/>}/>
<Route path='*' element={<NotFound/>}/>
</Route>
));

const App = () => {
  return <RouterProvider router={router}/>
};

export default App;