import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import './App.css';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async (url) => {
    setLoading(true);
    const response = await fetch(url);
    const responseJson = await response.json();
    setJobs(responseJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  if (loading) {
    return (
      <section className='loading'>
        Loading...
      </section>
    )
  };

  const { title, company, duties, dates } = jobs[value];
  // console.log(jobs[value]);

  return (
    <section className='section-container'>
      <h3 className='heading-exp'>Experience</h3>
      <div className='job-container'>
        <div className='jobs-btn'>
          {jobs.map((job, index) => {
            return (
              <button onClick={()=>setValue(index)} className='job-button' key={index}>{job.company}</button>
            )
          })}
        </div>
        <div className='experience-details'>
          <article>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div className='duty-container' key={index}>
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })}
          </article>
        </div>
      </div>
    </section>
  )
}

export default App
