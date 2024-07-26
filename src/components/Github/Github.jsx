import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import styled from 'styled-components';

export default function Github() {
  return (
    <DIV>
    <div className='stats' >
        <GitHubCalendar className="react-activity-calendar" username="mohdaamil120" />     
   
        <p><img  id="github-top-langs" align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=mohdaamil120&show_icons=true&locale=en&layout=compact" alt="mohdaamil120" /></p>

        <p>&nbsp;<img  id="github-stats-card" align="center" src="https://github-readme-stats.vercel.app/api?username=mohdaamil120&show_icons=true&locale=en" alt="mohdaamil120" /></p>

        <p><img  id="github-streak-stats" align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=mohdaamil120&" alt="mohdaamil120" /></p>
    </div>
    </DIV>
  )
}

const DIV = styled.div`
    .stats{
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap : 50px
    }
`