import React, { useState } from 'react'
import {
  Box, Grid, TextField, Typography,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';

import useStyles from './styles'
import clsx from 'clsx';
import usersInfo from './UserData';

const columns = [
  { field: 'name', headerName: 'Họ và tên', headerClassName: 'super-app-theme--header', width: 250 },
  { field: 'gender', headerName: 'Giới tính', headerClassName: 'super-app-theme--header', width: 120 },
  { field: 'address', headerName: 'Địa chỉ', headerClassName: 'super-app-theme--header', width: 250 },
  { field: 'email', headerName: 'Email', headerClassName: 'super-app-theme--header', width: 203 },
];

const rows = [...usersInfo];

const UserManage = () => {

  const classes = useStyles()
  const [detail, setDetail] = useState('0');

  let detailUser = usersInfo[detail];

  const handleClickRow = (rows) => {
    setDetail(rows.row.id - 1);
  }

  return (
    <Box marginLeft='20px'>
      <TextField
        style={{
          backgroundColor: '#ECECEC',
          borderRadius: '5px',
          margin: '20px 0',
          minWidth: '300px',
        }}
        label={<SearchIcon color='primary' />}
        variant="outlined"
        size="small"
        color="warning"
      />
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={8} height='100%' >
            <Typography variant='h6' fontWeight='700'>Danh sách người dùng</Typography>
            <Box
              sx={{
                height: 585,
                width: 1,
                '& .super-app-theme--header': {
                  backgroundColor: '#FF8C5B',
                  color: '#fff',
                  margin: '0'
                },
              }}
              marginTop='20px'
            >
              {/* Table */}
              <DataGrid
                autoHeight
                rows={rows}
                columns={columns}
                rowHeight={42}
                onRowClick={handleClickRow}
                pageSize={11}
              />
            </Box>
          </Grid>
          <Grid item xs={4} paddingRight='20px'>
            <Box style={{ width: '100%', minHeight: '580px' }} >
              <Box className={classes.detail}>
                <Typography variant='body1' padding='10px 0'>Thông tin chi tiết</Typography>
                <Box style={{
                  backgroundImage: `url(${detailUser.avata})`,
                  height: '90px',
                  width: '90px',
                  margin: 'auto',
                  borderRadius: '50%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                >
                </Box>
                <Typography variant='h6' fontWeight={700} padding='10px 0' >{detailUser.name}</Typography>
                <Box textAlign='left' marginLeft='15px'>
                  <Typography variant='body1' fontWeight={700}>Giới thiệu</Typography>
                  <Typography variant='body2' sx={{ color: '#444' }} minHeight={60}>
                    {detailUser.introduce}
                  </Typography>
                  <Box display='flex' marginTop='10px'>
                    <Box flex={1}>
                      <Typography variant='body1' fontWeight={700}>Giới tính</Typography>
                      <Typography variant='body2' sx={{ color: '#444' }}>
                        {detailUser.gender}
                      </Typography>
                    </Box>
                    <Box flex={1}>
                      <Typography variant='body1' fontWeight={700}>Tuổi</Typography>
                      <Typography variant='body2' sx={{ color: '#444' }}>
                        {detailUser.age}
                      </Typography>
                    </Box>
                  </Box>
                  <Box marginTop='10px'>
                    <Typography variant='body1' fontWeight={700}>Địa chỉ</Typography>
                    <Typography variant='body2' sx={{ color: '#444' }}>
                      {detailUser.address}
                    </Typography>
                  </Box>
                  <Box marginTop='10px'>
                    <Typography variant='body1' fontWeight={700}>Email</Typography>
                    <Typography variant='body2' sx={{ color: '#444' }}>
                      {detailUser.email}
                    </Typography>
                  </Box>
                  <Box marginTop='20px'>
                    <Typography variant='body1' fontWeight={700}>Thành tích</Typography>
                    <Box display='flex' marginTop='10px'>
                      <Box className={classes.achivement} backgroundColor='#FF5A5A'>
                        {detailUser.posts.length} bài viết
                      </Box>
                      <Box className={classes.achivement} backgroundColor='#FFBD5A'>
                        {detailUser.videos.length} video
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default UserManage