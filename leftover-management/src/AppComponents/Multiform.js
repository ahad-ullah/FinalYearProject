import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '.././css/bootstrap.min.css'
import '.././css/bootstrap-icons.css'
import '.././css/templatemo-kind-heart-charity.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Donate from './Donate'
import "./phone.css";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput, {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import { useEffect, useState } from "react";




const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  
  function getSteps() {
    return ['Make a Donation', 'Select Location', 'Donation History'];
  }
  

function Multiform() {

    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
          navigate("/login");
        }
      }, []);
    
      const [value, setValue] = useState();
    
      const validate = (e) => {
        if (isValidPhoneNumber(value) && isPossiblePhoneNumber(value)) {
          navigate("/Donate");
          return true;
        } else {
          e.preventDefault();
          alert("Please Enter Valid Number");
          return false;
        }
      };

      const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();



  const handleNext = () => {
   

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
   
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  const handleReset = () => {
    setActiveStep(0);
  };
  return (
<>
    
    <div>
        <Navbar></Navbar>
        <main>
          
            <section className="donate-section">
        
                <div className="section-overlay"></div>
                <Sidebar></Sidebar>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-5" style={{marginLeft:'150px'}}>
                            <form className="custom-form donate-form" style={{width:'1000px'}} action="#" method="post" role="form" >
                                
                                
                   
                            <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
         
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {activeStep===0 && <Donate handleNext={handleNext}></Donate>}
            <div>
              <Button disabled={activeStep === 0} style={{marginTop:'-60px',marginLeft:'500px'}} onClick={handleBack} className={classes.button}>
                Back
              </Button>
            
           {activeStep === steps.length - 1 && 'Finish' }
              
            </div>
          </div>
        )}
      </div>
    </div>
                   

                 
                   

                
                          
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </main>

        <Footer></Footer>

       
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.sticky.js"></script>
        <script src="js/counter.js"></script>
        <script src="js/custom.js"></script>


    </div>
   
    </>
  )
}

export default Multiform















 



