import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Button,
  Hidden,
} from "@material-ui/core";
import MobileImg from "./Carousel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#F7F9FA",
    },
    caption: {
      paddingTop: 95,
      color: "#5CB29C",
    },
    title: {
      marginTop: 15,
    },
    bodyw: {
      marginTop: 21,
    },
    bodym: {
      marginTop: 14.44,
      marginLeft: 37,
      marginRight: 44,
    },
    buttongroup: {
      "& > *": {
        margin: theme.spacing(0.5),
        marginTop: 12,
      },
    },
    button1: {
      backgroundColor: "#5C65AC",
      color: "#fff",
      fontSize: "0.875rem",
    },
    button2: {
      borderColor: "#5C65AC",
      color: "#5C65AC",
      fontSize: "0.875rem",
    },
    website: {
      marginTop: 68,
      width: "448.59px",
      height: "475px",
    },
    websitesm: {
      marginTop: 70.56,
      width: "230px",
      height: "243.54px",
    },
    mobile: {
      marginTop: 205,
      width: "448.59px",
      height: "475px",
    },
    carousel: {
      backgroundColor: "#F7F9FA",
    },
    flexw: {
      justifyContent: "center",
      "& > *": {
        marginLeft: theme.spacing(10.900625),
        marginRight: theme.spacing(10.900625),
        marginBottom: theme.spacing(12.60625),
      },
      display: "flex",
      flexDirection: "row",
    },
    flexm: {
      justifyContent: "center",
      "& > *": {
        marginLeft: theme.spacing(11.5),
        marginRight: theme.spacing(11.5),
        marginBottom: theme.spacing(10.6825),
      },
      display: "flex",
      flexDirection: "row",
    },
  })
);

export default function OurService() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Typography className={classes.caption} variant="subtitle2">
        CUSTOMIZATION
      </Typography>
      <Typography className={classes.title} variant="h4">
        Dịch vụ của chúng tôi
      </Typography>
      <Hidden mdUp>
        <Typography className={classes.bodym} align="left" variant="h6">
          Chúng tôi là những con người trẻ với niềm đam mê xây dựng sản phẩm
          phục vụ cho các doanh nghiệp vừa và nhỏ (SME).
          <br />
          Trong mô hình hỗ trợ ĩnh vực Digital Transformation chúng tôi cam kết
          sẽ đem đến lợi ích khi hợp tác dài lâu
        </Typography>
      </Hidden>
      <Hidden smDown>
        <Typography className={classes.bodyw} variant="h6">
          Chúng tôi là những con người trẻ với niềm đam mê xây dựng sản phẩm
          phục vụ cho các doanh nghiệp vừa và nhỏ (SME).
          <br />
          Trong mô hình hỗ trợ ĩnh vực Digital Transformation chúng tôi cam kết
          sẽ đem đến lợi ích khi hợp tác dài lâu
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <MobileImg />
      </Hidden>
      <div className={classes.buttongroup}>
        <Button className={classes.button1} variant="contained">
          START NOW
        </Button>
        <Button className={classes.button2} variant="outlined">
          LEARN MORE
        </Button>
      </div>
      <Hidden smDown>
        <div className={classes.flexw}>
          <img className={classes.website} src="./Website.svg" alt="Website"></img>
          <img className={classes.mobile} src="./Mobile.svg" alt="Mobile"></img>
        </div>
      </Hidden>
    </Grid>
  );
}
