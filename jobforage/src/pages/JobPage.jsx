import React from 'react'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Delete from '../components/Delete';

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const job = useLoaderData();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const onDeleteClick = (jobId) => {
    deleteJob(jobId);
    setIsDeleteOpen(false);
    toast.success('Job deleted successfully');
    navigate('/jobs');
  }

  return <>
    <section>
      <div className="container m-auto py-2 px-2">
        <Link
          to="/jobs"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft className='ml-4 mr-2' /> Back to Jobs
        </Link>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">{job.type} </div>
              <h1 className="text-3xl font-bold mb-4">
                {job.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <FaMapMarker className='text-orange-700 mr-2 mt-0.5' />
                <h6 className="text-orange-700">{job.location} <p className='inline'>| {job.date}</p></h6>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Job Details
              </h3>
              <p className="mb-4">
                Batch:{job.jobdetails.batch}
              </p>
              <p className="mb-4">
                Qualification: {job.jobdetails.qualification}
              </p>
              <p className="mb-4">
                Experiance: {job.jobdetails.experience}
              </p>

              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p className="mb-4">
                {job.description}
              </p>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p className="mb-4">{job.salary} LPA</p>
              <a
                href={job.applyLink} target='_blank'
                className="h-[36px] bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-center text-lg"
              >
                Apply Link
              </a>
            </div>
          </main>
          <aside>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl">{job.company.name}</h2>

              <p className="my-2">
                {job.company.description}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
                {job.company.contactEmail}
              </p>

              <h3 className="text-xl">Company Website:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold"> <a href={job.company.website} target='_blank'>{job.company.website}</a></p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link
                to={`/edit-job/${job.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Job</Link>
              <button onClick={() => setIsDeleteOpen(true)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 pxn-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
              <Delete isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} onDelete={() => onDeleteClick(job.id)} />
            </div>
          </aside>
        </div>
      </div>
    </section>


  </>;
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
}

export { JobPage as default, jobLoader };