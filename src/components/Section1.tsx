import { Button, Card, CardActions, CardContent, Container, Grid, makeStyles, Theme, Typography, useMediaQuery } from "@material-ui/core";
import teamWorkImg from "../assets/Teamwork.svg";
const useStyles = makeStyles({
  root: {
    paddingTop: '75px',
    paddingBottom: '75px'
  },
  card: {
    boxShadow: 'none'
  },
  cardTitle: {
  },
  button: {
    '& .MuiButton-label': {
      minWidth: '85px'
    }
  },
  img: {
    width: '100%'
  },
  marginBottom20: {
    marginBottom: '20px'
  }
});

function Section1() {
  const classes = useStyles();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  return (
    <Container>
      <Grid container
        className={classes.root}
        direction={matches ? "row" : "column-reverse"}
        justify="space-between"
        alignItems="center"
      >
        <Grid item md={6} sm={12}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h3" align="left" className={classes.cardTitle}>
                Số hóa kinh doanh bằng
            </Typography>
              <Typography variant="h3" color="secondary" align="left" className={classes.marginBottom20}>
                Sự chuyên ngiệp
            </Typography>
              <Typography variant="h6" align="left" color="textSecondary">
                Hơn 7 năm đồng hành cùng các doanh nghiệp trong quá trình chuyển đổi số, Kao luôn muốn tìm kiếm những cơ hội lớn để cùng hợp tác phát triển.
            </Typography>
            </CardContent>
            <CardActions>
              <Button color="primary" variant="contained" className={classes.button}>
                Dự án
            </Button>
              <Button color="primary" variant="outlined" className={classes.button}>
                Con người
            </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6} sm={12}>
          <img src={teamWorkImg} alt="Team Work" className={classes.img}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Section1;