import { Container, Divider } from "@material-ui/core";
import OurService from "../components/OurService";
import Pricing from "../components/Pricing";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

function LandingPage() {
  return (
    <Container maxWidth={false}>
      <Section1 />
      <Section2 />
      <Divider />
      <Section3 />
      <OurService />
      <Pricing />
    </Container>
  );
}

export default LandingPage;
