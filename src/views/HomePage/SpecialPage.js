import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";


import GridContainer from "components/Grid/GridContainer";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import GridItem from "components/Grid/GridItem";
import Footer from "components/Footer/Footer";
import StepperComponent from "./StepperComponent"

import { pinkColor } from "assets/jss/material-kit-react";


export default function SpecialPackage(props) {
    const {
        rest,
        classes,
        getStepContent,
        activeStep,
        steps,
        data,
        handleBack,
        handleReset,
        handleNext,
        isStepOptional,
        handleSkip,
        handleReturn,
        handleSpecialPackage,
        specialPackage
    } = props;

    return (
        <div>
            <div className={classes.container}>

                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                        <GridContainer justify="center">
                            <h2 className={classes.dark}>Select Special Package</h2>
                            <h4 className={classes.dark}>Select the photo you want for your Special Package</h4>
                        </GridContainer>

                        <div className={classes.root}>
                            <StepperComponent activeStep={activeStep} steps={steps} classes={classes} handleReturn={handleReturn} />
                        </div>

                    </GridItem>
                </GridContainer>

                {specialPackage ?
                    <div>


                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <GridContainer justify="center">
                                    <div>
                                        <span className={classes.title}>{specialPackage.package_name}</span>
                                        <span className={classes.specialPrice} style={{marginLeft: 5}}>${specialPackage.package_price}</span>
                                    </div>
                                </GridContainer>
                            </GridItem>

                        </GridContainer>

                        <GridContainer justify="center" className={classes.marginTop}>
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.dark}>
                                    <a className={classes.bold}>{specialPackage.package_name} fee</a>  is a flat rate fee that a professional photographer
                                     charges to create images that you could purchase after the session. I will
                                      guide your family through the whole session and endure we get the images that
                                       you wanted. Delivery is complimentary to Singapore. For overseas order,
                                        clients will be charged at cost of postage to your home country.
                                </div>

                                <GridItem xs={12} sm={12} md={6} className={classes.collection} >
                                    <div className={classes.dark}>Your Total Investment: </div>
                                    <div className={classes.dark}> {specialPackage.package_name} </div>
                                    {/* <div className={classes.dark}> + Collection OR Creative Session </div>
                                    <div className={classes.dark}> + Ala-Carte Products </div> */}
                                </GridItem>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <span className={classes.dark}>
                                    <h4 className={classes.bold}>Collection A</h4>
                                    {
                                        specialPackage.item.map(sp => (
                                            <div><Check className={classes.iconCheck} /> {sp.quantity} x {sp.product_name} for {sp.product_type}</div>
                                        ))
                                    }

                                    {/* <div><Check className={classes.iconCheck} /> 10 Photos for 10 pages album</div>
                            <div><Check className={classes.iconCheck} /> 20 Photos for 4R loose print</div>
                            <div><Check className={classes.iconCheck} /> 10 Photos for 5R loose album</div>
                            <div><Check className={classes.iconCheck} /> 10 Photos for digital print</div>
                            <div><Check className={classes.iconCheck} /> 10 Photos for 15 pages album</div> */}

                                </span>
                            </GridItem>



                        </GridContainer>
                    </div>

                    :
                    <GridContainer justify="center">
                        <h2 className={classes.dark}>NO SPECIAL PACKAGE SELECTED</h2>
                    </GridContainer>
                }

            </div>
            <Footer
                fixed
                specialPackage={specialPackage}
                activeStep={activeStep}
                getStepContent={getStepContent}
                steps={steps}
                handleSpecialPackage={handleSpecialPackage}
                handleBack={handleBack}
                handleReset={handleReset}
                handleNext={handleNext}
                // total={data.package.images.length}
                // liked={Object.values(data.package.images).reduce((a, { liked }) => a + liked, 0)}
                isStepOptional={isStepOptional}
                handleSkip={handleSkip}
            />

        </div>
    );
}