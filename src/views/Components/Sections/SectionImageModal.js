import React, { useEffect } from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button";
import Checkbox from "@material-ui/core/Checkbox";


import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import { pinkColor, successColor } from "assets/jss/material-kit-react";
import { FormControlLabel } from "@material-ui/core";
import { constant } from "../../../config";

const useStyles = makeStyles(styles);

const useStyles2 = makeStyles(theme => ({
  root: {
    width: "75%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  fa: {
    color: pinkColor
  },
  faCheck: {
    color: successColor
  },
  title: {
    color: "black",
    fontWeight: 200,
    marginLeft: 7
    // fontSize: 28
  },
  header: {
    marginLeft: 15
  },
  expansionDetails: {
    padding: "2px 2px 2px 2px"
  },
  photoType: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    marginLeft: 15,
    marginBottom: 15
  }
}));


export default function SectionImageModal(props) {
  const { selectedImage, handleImageModal, packageType, product, packages, productType } = props;
  const sectionClass = useStyles2();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

  // const [checked, setChecked] = React.useState([24, 22]);
  // const [newPackage, setNewPackage] = React.useState(null);
  const [newProductType, setNewProductType] = React.useState([]);
  // const [newProduct, setNewProduct] = React.useState([]);

  const handleToggle = (e, data) => {
    let obj = []
    obj.push(...newProductType)
    const checked = e.target.checked
    // const checked = data.checked

    console.log(data)

    // let _prodd = newProduct
    // if (checked) {
      obj.push(data)
    // } else {
    //   const foundIndex = obj.findIndex(el => (el.product_type_id === data.product_type_id));
    //   obj.splice(foundIndex, 1)
    // }

    // _prodd.forEach((element, index) => {
    //   if (element.product_id === data.product_id) {
    //     _prodd[index] = data;
    //   }
    // });

    data.checked = !data.checked
    // setNewProduct(_prodd)
    setNewProductType(obj)
  };

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const checkPhoto = (url) => {
    if (url !== undefined || url !== null)
      return true;
    return false;
  }

  const duplicateCheck = (objs, key) => {
    let occ = {}
    objs.filter(function (x) {
      if (occ[x.key]) return false;
      occ[x.key] = true;
      return true;
    })
  }

  return (
    <div>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card carousel>
              {/* <Carousel {...settings}> */}
              <div>
                <GridContainer justify="center">
                  <img
                    src={selectedImage ? `${constant.imgUrl}` + selectedImage.name : null}
                    // src={checkPhoto(selectedImage.src) ? `${constant.imgUrl}` + selectedImage.src : null}
                    alt={selectedImage ? selectedImage.src : "Your Image"}
                    style={{ width: "100%" }}
                  />
                  <div className={sectionClass.root}>
                    <h4 className={sectionClass.header}>{selectedImage ? selectedImage.name : null}</h4>
                    <Typography className={sectionClass.photoType}>
                      Choose Photo Type
                    </Typography> 

                    {productType && productType.length > 0 ? productType.map((type, index) => (
                      <ExpansionPanel
                        expanded={expanded === type.product_type_id}
                        onChange={handleChange(type.product_type_id)}
                      >
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography className={sectionClass.heading}>
                            For {type.productType}
                          </Typography>
                        </ExpansionPanelSummary>

                        {product.length > 0 ? product.filter(el => el.product_type_id === type.product_type_id).map(prod => (
                          <ExpansionPanelDetails className={sectionClass.expansionDetails}>
                            <GridItem>

                              <div>
                                <div
                                  className={
                                    classes.checkboxAndRadio,
                                    classes.checkboxAndRadioHorizontal
                                  }
                                >
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        tabIndex={-1}
                                        onChange={e => handleToggle(e, prod)}
                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                        icon={<Check className={classes.uncheckedIcon} />}
                                        checked={prod.checked}
                                        classes={{
                                          checked: classes.checked,
                                          root: classes.checkRoot
                                        }}
                                      />
                                    }
                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                    label={`1 x ${prod.product_name}`}
                                    key={prod.product_id}
                                  />
                                </div>
                              </div>
                              {/* )) : null} */}
                            </GridItem>
                          </ExpansionPanelDetails>
                        )) : null

                        }

                      </ExpansionPanel>
                    )) : null}

                    <GridContainer justify="center">
                      <div>
                        <Button
                          round
                          disabled={false}
                          color="pink"
                          onClick={() => {
                            handleImageModal(selectedImage, true, "done", newProductType)
                            setExpanded(false)
                            setNewProductType([])
                          }}
                        >
                          Done
                        </Button>
                      </div>
                    </GridContainer>
                  </div>
                </GridContainer>
              </div>
              {/* </Carousel> */}
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
