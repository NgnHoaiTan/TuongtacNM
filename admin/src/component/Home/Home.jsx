import { Box, Grid, Typography, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'
import { useSelector } from 'react-redux';
import useStyles from './styles'
import { getListUsers } from '../../features/Slice/UserSlice';
import { getListPosts } from '../../features/Slice/PostSlice';
import { getListVideos } from '../../features/Slice/VideoSlice';
import HotPosts from '../Statistic/HotPosts';
import HotVideos from '../Statistic/HotVideos';

const Home = ({ adminAccounts }) => {
  const classes = useStyles()
  const [value, setValue] = useState('hotposts')
  const handleChangeChart = (event, newValue) => {
    setValue(newValue);
  };
  console.log(adminAccounts)
  const users = useSelector(getListUsers);
  const posts = useSelector(getListPosts);
  const videos = useSelector(getListVideos);
  return (
    <Box className={classes.main}>
      <Grid container width='100%' marginTop='-20px'>
        <Grid item md={8.5}>
          <Grid container>
            <Grid className={classes.gridItem6} item xs={6}>
              <Box className={classes.gridItem6Wrap}>
                <Typography
                  className={classes.grid6Context}
                  style={{ color: '#222', marginBottom: '10px', fontWeight: '700' }}
                  variant='h6'
                >
                  Tổng số người dùng
                </Typography>
                <Typography className={classes.grid6Context} variant='h4'>{users.length}</Typography>
                <Typography className={classes.grid6Context} variant='body1'>Người sử dụng</Typography>
              </Box>
            </Grid>
            <Grid className={classes.gridItem6} item xs={6}>
              <Box className={classes.gridItem6Wrap} >
                <Typography
                  className={classes.grid6Context}
                  style={{ color: '#222', marginBottom: '10px', fontWeight: '700' }}
                  variant='h6'
                >
                  Tổng số bài đăng
                </Typography>
                <Typography className={classes.grid6Context} variant='h4'>{posts.length + videos.length}</Typography>
                <Typography className={classes.grid6Context} variant='body1'>Bài viết đã được đăng</Typography>
              </Box>
            </Grid>
          </Grid>
          <Box style={{ margin: '20px 40px 20px 0', height: '550px', border: '1px solid #888' }}>
            <Box>
              <Typography
                variant='h5'
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: '700',
                  color: '#555'
                }}
              >
                Thống kê số liệu
              </Typography>
              <Box sx={{  borderColor: 'divider' }}>
                <TabContext value={value}>
                  <TabList onChange={handleChangeChart} aria-label="tab for login" textColor="secondary" indicatorColor="secondary">
                    <Tab label="Bài viết nổi bật" value="hotposts" />
                    <Tab label="Video nổi bật" value="hotvideos" />
                    
                  </TabList>
                  <TabPanel value='hotposts'>
                    <HotPosts />
                  </TabPanel>
                  <TabPanel value='hotvideos'>
                    <HotVideos />
                  </TabPanel>
                  
                </TabContext>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={3.5} style={{ backgroundColor: '#6691FF', borderRadius: '10px' }}>
          <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography variant='h5' style={{ margin: '20px auto 10px auto', color: '#fff', fontWeight: '700' }}>
              Quản trị viên
            </Typography>
            <ul style={{ listStyle: 'none', marginLeft: '40px' }}>

              {adminAccounts.map((account) => (
                <div key={account._id}>
                  {
                    users.filter(user => user.account === account._id).map(user => {
                      return (
                        <>
                          <li key={user._id} className={classes.infoItem}>
                            <Box style={{ backgroundImage: `url(${user.image})` }} className={classes.avataAdmin}></Box>
                            <Typography style={{ color: '#fff', marginLeft: '20px' }} variant='body1'>{user.name}</Typography>
                          </li>
                          
                        </>

                      )
                    })
                  }
                </div>

              ))}
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home