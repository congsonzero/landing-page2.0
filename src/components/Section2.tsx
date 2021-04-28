import { Card, CardContent, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import handShake from "../assets/HandShake.svg";

type TeamInfo = {
  title: string,
  value: string
}

const useStyles = makeStyles({
  root: {
    paddingTop: '75px',
    paddingBottom: '75px'
  },
  card: {
    boxShadow: 'none'
  },
  infoItem: {
    margin: `0px 15px`
  },
  img: {
    width: '100%'
  },
  marginBottom20: {
    marginBottom: '20px'
  }
});

const teamInfo: TeamInfo[] = [
  {
    title: 'Dự án',
    value: '397+'
  },
  {
    title: 'Hài lòng',
    value: '99%'
  },
  {
    title: 'Khách hàng',
    value: '15'
  }
]

function Section2() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container
        className={classes.root}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item md={6} sm={12}>
          <img src={handShake} alt="Handshake" className={classes.img}/>
        </Grid>
        <Grid item md={6} sm={12}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h3" align="left">
                Linh hoạt, hệ thống hóa
              </Typography>
              <Typography variant="h3" color="secondary" align="left" className={classes.marginBottom20}>
                để phát triển sản phẩm
              </Typography>
              <Typography variant="h6" align="left" color="textSecondary" className={classes.marginBottom20}>
                Kao team luôn cố gắng hệ thống hóa chi tiết từng thành phần để tối ưu chi phí phát triển và tái sử dụng linh hoạt.
              </Typography>
              <Grid container>
                {teamInfo.map(({ title, value }: TeamInfo, index) => {
                  return (
                    <Grid item className={classes.infoItem} key={index}>
                      <Typography variant="h4" color="primary" align="center">
                        {value}
                      </Typography>
                      <Typography align="center" color="textSecondary">
                        {title}
                      </Typography>
                    </Grid>
                  )})
                }
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Section2;