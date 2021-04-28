import { Card, CardContent, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import jsLogo from "../assets/JS_logo.svg";
import netLogo from "../assets/NET_logo.svg";
import phpLogo from "../assets/PHP_logo.svg";
import ptLogo from "../assets/PT_logo.svg";
import reactLogo from "../assets/React_logo.svg";
import sfLogo from "../assets/SF_logo.svg";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles({
  root: {
    paddingTop: '75px',
    paddingBottom: '75px'
  },
  card: {
    boxShadow: 'none'
  },
  cardTitle: {
    lineHeight: '2rem',
    marginBottom: '1rem',
    textTransform: 'uppercase',
  },
  techLogo: {
    height: `146px`,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    '& img': {
      width: '33%'
    }
  },
  inlineIcon: {
    verticalAlign: 'middle'
  },
  marginBottom20: {
    marginBottom: '20px'
  },
  marginBottom12: {
    marginBottom: '12px'
  }
});

const techList= [
  reactLogo,
  phpLogo,
  jsLogo,
  ptLogo,
  netLogo,
  sfLogo
];

function Section3() {
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
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="caption" color="secondary" align="left" display="block"  className={classes.cardTitle}>
                100+ DỰ án HOÀNH THÀNH
              </Typography>
              <Typography variant="h4" align="left" className={classes.marginBottom20}>
                Chúng tôi yêu thích sự sáng tạo và quy trình chất lượng
              </Typography>
              <Typography variant="h6" align="left" color="textSecondary" className={classes.marginBottom12}>
                Nhiệm vụ của Kao sẽ đảm bảo sự linh động trong quá trình phát triển sản phẩm.
              </Typography>
              <Typography variant="h6" align="left" color="secondary">
                Những công nghệ sử dụng
                <ArrowRightAltIcon className={classes.inlineIcon}/>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6} sm={12}>
          <Grid container>
            {techList.map((techlogo, index) => (
              <Grid item md={4} sm={6} className={classes.techLogo} key={index}>
                <img src={techlogo} alt="Technology" />
              </Grid>))
            }
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Section3;