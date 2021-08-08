import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fade from 'react-reveal/Fade';
import './workExperience.css';

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
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    },
    
  }));
  
const Experience = (props) =>{
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return(
        <div className="experience_container">
            <h2 style={{textAlign: "center", paddingTop: '.5rem'}}> Work Experience</h2>
            <div id="all-tabs" className={classes.root}>
                
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
        >
            <Tab label="PlanetSpark" {...a11yProps(0)} />
            <Tab label="Edgistify" {...a11yProps(1)} />
            <Tab label="Viga Entertainment Technology" {...a11yProps(2)} />
            
        </Tabs>
        <TabPanel value={value} index={0}>
        <Fade up duration={300} distance="30%">
          <h4>Software Engineering Intern <span>(05/21 - present)</span></h4>
          </Fade>
            <div>
              <ul>
              <Fade up duration={500} distance="30%">
                <li className="list-item">Responsible for developing and maintaining the web application making use of Ruby on Rails and React<span>JS</span>.</li>
              </Fade>
              <Fade up duration={800} distance="30%">
                <li className="list-item">Responsible for Identifying and fixing bottlenecks and bugs.</li></Fade>
                <Fade up duration={1100} distance="30%">
                <li className="list-item">Responsible for developing reusable and highly scalable components making use of React</li>
                </Fade>
              </ul>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Fade up duration={300} distance="30%">
        <h4>Software Engineering Intern <span>(09/20 - 05/21)</span></h4>
        </Fade>
        <ul>
        <Fade up duration={500} distance="30%">
                <li className="list-item">Handled front-end as well the backend for various projects making use of MERN stack.</li>
                </Fade>
                <Fade up duration={800} distance="30%">
                <li className="list-item">Responsible for developing and maintaining RESTful API’s using Nodejs.</li>
                </Fade>
                <Fade up duration={1100} distance="30%">
                <li className="list-item">Responsible for developing algorithms/flows from front end to the back end as per use cases</li>
                </Fade>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Fade up duration={300} distance="30%">
        <h4>Back-End Development Intern <span>(08/20 - 09/20)</span></h4>
        </Fade>
        <ul>
        <Fade up duration={500} distance="30%">
                <li className="list-item">Responsible for developing RESTful API using DjangoREST framework</li>
                </Fade>
                <Fade up duration={800} distance="30%">
                <li className="list-item">Worked closely with front-end developers to fulfill the API demands for the front-end</li>
                </Fade>
          </ul>
        </TabPanel>
        
        </div>
    </div>
        
    )
}
export default Experience;