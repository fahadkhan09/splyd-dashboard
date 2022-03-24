import { Helmet } from 'react-helmet-async';
import { Grid, Container, Box } from '@mui/material';
import Footer from 'src/components/Footer';
import Statistics from './Statistics';
import '../overview/style.scss';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './style.scss';
import '../projects/style.scss';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CloseIcon from '@mui/icons-material/Close';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PendingRoundedIcon from '@mui/icons-material/PendingRounded';




function DashboardArea() {
  return (
    <>

      <Container maxWidth="lg">
      <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Supplier name, CR number"
                inputProps={{ 'aria-label': 'Search Supplier name, CR number' }}
              />
              <IconButton type="submit" sx={{ p: '10px', }} aria-label="search">
                <SearchIcon style={{ fill: 'white' }} />
              </IconButton>
            </Paper>
            <Button variant="contained" startIcon={<AddIcon />}>
              New Project
            </Button>
          </Grid>

          <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '40px' }}>
            <Card sx={{ minWidth: 275 }}>
              <Box>
                <Box className='top'>
                  <DoneAllIcon />
                  <span className='counter'> <h2>258</h2></span>
                </Box>
                <Box className='bottom'>
                  <span className='title'>Approved</span>
                  <ArrowUpwardIcon />
                </Box>
              </Box>
            </Card>
            <Card sx={{ minWidth: 275 }}>
              <Box className='pending'>
                <Box className='top'>
                  <DoneAllIcon />
                  <span className='counter'> <h2>180</h2></span>
                </Box>
                <Box className='bottom'>
                  <span className='title'>Pending</span>
                  <ArrowUpwardIcon />
                </Box>
              </Box>
            </Card>
            <Card sx={{ minWidth: 275 }}>
              <Box className='not-approved'>
                <Box className='top'>
                  <CloseIcon />
                  <span className='counter'> <h2>376</h2></span>
                </Box>
                <Box className='bottom'>
                  <span className='title'>Not Approved</span>

                </Box>
              </Box>
            </Card>
            <Card sx={{ minWidth: 275 }}>
              <Box className='draft'>
                <Box className='top'>
                  <InsertDriveFileOutlinedIcon />
                  <span className='counter'> <h2>124</h2></span>
                </Box>
                <Box className='bottom'>
                  <span className='title'>Draft</span>
                </Box>
              </Box>
            </Card>
          </Grid>

        </Grid>
        <Grid container direction="row" justifyContent="flex-start" spacing={3} style={{marginTop:'20px'}}>
          <Grid item lg={6} xs={6} className='chart-dashboard'>
            <Statistics />
          </Grid>
          <Grid item lg={6} xs={6}>
            <div className="progress">
              <Box className="counter">
                <div className="left">
                  <p>SAR</p>
                  <h1>209,873</h1>
                  <h4>Total Obligations</h4>
                </div>
                <div className="right">
                  <div className="box">
                    <div className="percent">
                      <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                      </svg>
                      <div className="num">
                        <h2>
                          76<span>%</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
            <Paper className='Table-Area'>
          <Box className='Table-Title'>
            <h1 className='Table-Heading'>Recent Orders</h1>
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>PRODUCT</TableCell>
                  <TableCell>COMPANY</TableCell>
                  <TableCell>PROJECT ID</TableCell>
                  <TableCell>PRICE</TableCell>
                  <TableCell>DATE</TableCell>
                  <TableCell>STATUS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Metal Sheet</TableCell>
                  <TableCell>5BM</TableCell>
                  <TableCell>#2879689</TableCell>
                  <TableCell>$360</TableCell>
                  <TableCell>Jan 10, 2022</TableCell>
                  <TableCell>
                    <Button style={{color:'#21D2A0', borderColor:'#21D2A0'}} variant="outlined" startIcon={<CheckCircleRoundedIcon style={{fill:'#21D2A0'}}/>}>
                      Completed
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Metal Sheet</TableCell>
                  <TableCell>5BM</TableCell>
                  <TableCell>#2879689</TableCell>
                  <TableCell>$360</TableCell>
                  <TableCell>Jan 10, 2022</TableCell>
                  <TableCell>
                  <Button style={{color:'#CC9D31', borderColor:'#CC9D31'}} variant="outlined" startIcon={<PendingRoundedIcon style={{fill:'#CC9D31'}}/>}>
                      Pending
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
          </Grid>
        </Grid>
        
      </Container>
      <Footer />
    </>
  );
}

export default DashboardArea;
