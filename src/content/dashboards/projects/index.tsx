import { Helmet } from 'react-helmet-async';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './style.scss';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
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
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';


function ProjectSection() {

  return (
    <>
      <Helmet>
        <title>SPLYD || Projects</title>
      </Helmet>
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

        <Paper className='Table-Area'>
          <Box className='Table-Title'>
            <h1 className='Table-Heading'>All Projects</h1>
            <Paper className='Input-Search'
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
              <IconButton className='icon-btn' type="submit" sx={{ p: '10px', }} aria-label="search">
                <SearchIcon style={{ fill: 'grey' }} />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Projects"
                inputProps={{ 'aria-label': 'Search Projects' }}
              />
            </Paper>
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>STATUS</TableCell>
                  <TableCell>PROJECT NAME</TableCell>
                  <TableCell>CLIENT NAME</TableCell>
                  <TableCell>PROJECT ID</TableCell>
                  <TableCell>PRODUCT VALUE</TableCell>
                  <TableCell>NO. OF PURCHASE</TableCell>
                  <TableCell>START DATE</TableCell>
                  <TableCell>END DATE</TableCell>
                  <TableCell>CONTRACT</TableCell>
                  <TableCell>ACTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Button style={{color:'#21D2A0', borderColor:'#21D2A0'}} variant="outlined" startIcon={<CheckCircleRoundedIcon style={{fill:'#21D2A0'}}/>}>
                      Approved
                    </Button>
                  </TableCell>
                  <TableCell>Alhazmi Group Tower</TableCell>
                  <TableCell>Macro Saudi</TableCell>
                  <TableCell>B77CE99</TableCell>
                  <TableCell>11,00000</TableCell>
                  <TableCell>125</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell><DownloadForOfflineIcon style={{fill:'#21D2A0', fontSize:'30px'}}/></TableCell>
                  <TableCell>
                    <Button className='Action-Btn' variant="contained" startIcon={<AddIcon />}>
                     New Order
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Button style={{color:'#CC9D31', borderColor:'#CC9D31'}} variant="outlined" startIcon={<PendingRoundedIcon style={{fill:'#CC9D31'}}/>}>
                      Pending
                    </Button>
                  </TableCell>
                  <TableCell>Prince Misha'al Palace</TableCell>
                  <TableCell>Prince Misha'al</TableCell>
                  <TableCell>C68HQ12</TableCell>
                  <TableCell>11,00000</TableCell>
                  <TableCell>125</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell><DownloadForOfflineIcon style={{fill:'#21D2A0', fontSize:'30px'}}/></TableCell>
                  <TableCell>
                    <Button className='Action-Btn' variant="contained" startIcon={<AddIcon />}>
                      New Order
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Button style={{color:'#F0514F', borderColor:'#F0514F'}} variant="outlined" startIcon={<CancelRoundedIcon style={{fill:'#F0514F'}}/>}>
                      Canceled
                    </Button>
                  </TableCell>
                  <TableCell>Red Sea Mall Expansion.</TableCell>
                  <TableCell>Red Sea Co.</TableCell>
                  <TableCell>M77CE99</TableCell>
                  <TableCell>11,00000</TableCell>
                  <TableCell>125</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell><DownloadForOfflineIcon style={{fill:'#21D2A0', fontSize:'30px'}}/></TableCell>
                  <TableCell>
                    <Button className='Action-Btn' variant="contained" startIcon={<AddIcon />}>
                      New Order
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>


      <Footer />
    </>
  );
}

export default ProjectSection;
