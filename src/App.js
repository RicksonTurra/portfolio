import './App.css';
import pic from './SITE.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Vertical from './vertical';

import React, { useState } from 'react';

const Python = ['Django', 'Numpy', 'Pandas', 'JavaScript', 'Matplot Lib', 'Jupyter']
const JavaScript = ['Node.js', 'React.js']
const Reacte = ['Material UI', 'react-spring']
const Valores = ['Python', 'JavaScript', 'React']


function App() {

  const [show, setShow] = useState('Python');

  return (
    <div className="gridContainer">
      <div className="item1" id='item1'>        
        <Vertical />
      </div>
      <div className="item2">

        <img src={pic} className="me" alt="mine"/>
        <div id="name">Name: Rickson Turra</div>
        <div className="myDescription">
          I'm a computer programmer who's got experience working with Python, Django, JavaScript and React.
          <br/>
          Currently working as a Technical Support Analyst.
          <br/>EU citizen. <br/>

        </div>
      </div>
      <div className="item3">
        <div className='opcoes'>
          {Valores.map((item, index)=>(
            <button className='animated-button1' index={index} onClick={()=> setShow(item)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {item}
            </button>
          ))}
        </div>

       <div className='tabs'>
        {Python.map((item, index) => (     
              <p className="button-child" key={index} style={(show === 'Python') ? {display: 'inline-flex'}: {display: 'none'}}>{item}</p> 
          ))}
        {JavaScript.map((item, index) => (     
              <p className="button-child" key={index} style={(show === 'JavaScript') ? {display: 'inline-flex'}: {display: 'none'}}>{item}</p> 
          ))}
        {Reacte.map((item, index) => (     
              <p className="button-child" key={index} style={(show === 'React') ? {display: 'inline-flex'}: {display: 'none'}}>{item}</p> 
          ))}
       </div>
          <div className='bothIcons'>
            <LinkedInIcon  onClick={() => window.open('https://www.linkedin.com/in/rickson-turra/', "_blank")} className='linkedin' sx={{"font-size": "150%"}} color='primary'/>
            <GitHubIcon  onClick={() => window.open('https://github.com/RicksonTurra', "_blank")} className='github' sx={{"font-size": "150%",}} color='primary' />
          </div>
      </div>
    </div>
  );
}

export default App;
