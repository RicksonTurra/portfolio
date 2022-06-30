import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './App.css';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', height: 224, color:'#491b1b', 
      overflow:'visible', whiteSpace: 'pre-wrap', width:'max-content', '& .MuiTypography-root': {width: 260}}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', color:'#d2193f', '& .MuiTab-root.Mui-selected': {color:'#d2193f'},
         '& .MuiTabs-indicator': {backgroundColor:'#d2193f'}}}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div>
          <h2>Subway Data Analysis</h2>
          <p>The New York System of bus and trains - Metro Transit Authority - provides its data for download through csv files. The project's purpose is to explore how the NYC's subway use and the weather on a specific day relate.</p>
          <h4>The main points of this project are:</h4>
          <div className='projectZero'>
            <ul>
              <li>
                Data scraping;
              </li>
              <li>
              Data Analysis.
              </li>
              <li>
                Data manipulation and creation of simple graphics with Pandas.
              </li>
            </ul>
          </div>
          <button class="glow-on-hover" 
          onClick={() => window.open('https://github.com/RicksonTurra/AnalyzingNYCsubwayData/blob/master/AnalyzingNYCsubwayData.ipynb', "_blank")}
          type="button">Learn More</button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
        <div id='Mail'>
          <h2>
            Mail
          </h2>  
        </div>
          <div className='projectZero'>
            <h3>Simple webmail built with:</h3>
            <ul>
              <li>
                Python (Django);
              </li>
              <li>
                JavaScript;
              </li>
              <li>
                HTML/CSS.
              </li>
            </ul>
          </div>
          <button className="glow-on-hover" onClick={() => window.open('https://github.com/RicksonTurra/Mail', "_blank")}
          type="button">Learn More</button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <h2>Ticket management</h2>
          <p>
            It creates a system that implements the creation of a rudimentary event ticket management.
          </p>
          <div className='projectZero'>
              <h3>The system allows users to:</h3>
            <ul>
              <li>
                Create events
              </li>
              <li>
                Add tickets to events
              </li>
              <li>
                Redeem tickets
              </li>
              <li>
                Check ticket's status
              </li>
            </ul>
          </div>
          <button class="glow-on-hover" 
          onClick={() => window.open('https://github.com/RicksonTurra/Nova', "_blank")}
          type="button">Learn More</button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
