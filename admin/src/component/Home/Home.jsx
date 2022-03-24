import { Box, Grid, Typography, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

import useStyles from './styles'

const adminInfo = [
  {
    name: 'Nguyễn Hoài Tân',
    age: '22',
    birth: '1-1-2000',
    avata: 'https://e7.pngegg.com/pngimages/364/72/png-clipart-one-punch-man-saitama-one-punch-man.png',
  },
  {
    name: 'Nguyễn Danh Hưng',
    age: '22',
    birth: '2-1-2000',
    avata: 'https://e7.pngegg.com/pngimages/364/72/png-clipart-one-punch-man-saitama-one-punch-man.png',
  },
  {
    name: 'Lê Ngọc Thái',
    age: '22',
    birth: '13-1-2000',
    avata: 'https://e7.pngegg.com/pngimages/364/72/png-clipart-one-punch-man-saitama-one-punch-man.png',
  }
]

const Home = () => {
  const classes = useStyles()
  const [value, setValue] = useState('week')

  const handleChangeChart = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.main}>
      <Grid container width='100%' marginTop='-20px'>
        <Grid item xs={8}>
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
                <Typography className={classes.grid6Context} variant='h4'>900</Typography>
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
                  Tổng số Bài viết nghiên cứu
                </Typography>
                <Typography className={classes.grid6Context} variant='h4'>50</Typography>
                <Typography className={classes.grid6Context} variant='body1'>Bài viết đã được đăng</Typography>
              </Box>
            </Grid>
          </Grid>
          <Box style={{ margin: '20px 40px 20px 0', height: '400px', border: '1px solid #888' }}>
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
                Thống kê lượt truy cập
              </Typography>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChangeChart}
                  textColor="secondary"
                  indicatorColor="secondary"
                >
                  <Tab value="week" label="Tuần" />
                  <Tab value="month" label="Tháng" />
                </Tabs>
              </Box>
              <Box>
                <Bar
                  data={{
                    labels: ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'],
                    datasets: [{
                      label: '# of Votes',
                      data: [1200, 1900, 1000, 2200, 2800, 3000, 3400],
                      backgroundColor: '#FF7474',
                      borderWidth: 1,
                      color: '#000',
                      maxBarThickness: 50
                    }]
                  }}
                  width={'100%'}
                  height={'300px'}
                  options={{
                    maintainAspectRatio: false,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4} style={{ backgroundColor: '#6691FF', borderRadius: '10px' }}>
          <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography variant='h5' style={{ margin: '20px auto 10px auto', color: '#fff', fontWeight: '700' }}>
              Quản trị viên
            </Typography>
            <ul style={{ listStyle: 'none', marginLeft: '40px' }}>
              {adminInfo.map((info, index) => (
                <li key={index} className={classes.infoItem}>
                  <Box style={{ backgroundImage: `url(${info.avata})` }} className={classes.avataAdmin}></Box>
                  <Typography style={{ color: '#fff', marginLeft: '20px' }} variant='body1'>{info.name}</Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home