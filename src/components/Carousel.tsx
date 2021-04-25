import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import { NavigateNext, SkipNext } from "@material-ui/icons";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    custom: {
      backgroundColor: "#F7F9FA",
    },
  })
);

const items = [
  {
    url: "./Website.svg",
  },
  {
    url: "./Mobile.svg",
  },
];

export default function MobileImg() {
  const classes = useStyles();

  return (
    <Carousel
      className={classes.custom}
      animation="fade"
      autoPlay={false}
      swipe={true}
      navButtonsAlwaysVisible={true}
      indicators={false}
      NextIcon={<SkipNext></SkipNext>}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: { item: { url: string | undefined } }) {
  const classes = useStyles();
  return (
    <Paper className={classes.custom}>
      <img src={props.item.url}></img>
      {/* <h2>{props.item.url}</h2>
            <p>{props.item.description}</p> */}
    </Paper>
  );
}
