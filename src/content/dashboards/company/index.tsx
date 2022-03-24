import { Helmet } from 'react-helmet-async';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

function CompanySection() {
  return (
    <>
      <Helmet>
        <title> Company || SPLYD  </title>
      </Helmet>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
          <h1>Company Section</h1>
          </Grid>
    
        </Grid>
      </Container>


      <Footer />
    </>
  );
}

export default CompanySection;
