import { IconButton, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Infor from './Infor/Infor';

const InforPersonalUser = () => {
    return (
        <div style={{ width: '60%', minHeight: '200px', margin: '20px auto 30px auto', backgroundColor: '#E9E9E9', borderRadius: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
                <div style={{ position: 'relative' }}>
                    <img style={{
                        backgroundImage: 'url(https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/258435246_2819886521565394_3094128005690604096_n.jpg?stp=dst-jpg_s851x315&_nc_cat=103&ccb=1-5&_nc_sid=da31f3&_nc_ohc=blUWK3G-rjMAX-wWDtU&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT-vzEOf6THHqP_qjiH-WRguxo7ldjLTV7b5ww65kTMxkg&oe=6241F3F8)',
                        height: '100px',
                        width: '100px',
                        borderRadius: '50%',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    />
                    <div style={{ position: 'absolute', bottom: '0', right: '0', backgroundColor: '#fff', borderRadius: '50%' }}>
                        <IconButton size='small' color="primary" component="span">
                            <EditIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div style={{ paddingBottom: '40px'}}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Infor title='Họ tên:' content='Nguyễn Hoài Tân' />
                    <Infor title='Email:' content='hoaitandev@gmail.com' />
                    <Infor title='Giới tính:' content='Nam' />
                    <Infor title='Địa chỉ:' content='Phường Xuân Khánh, Quận Ninh Kiều, Thành Phố Cần Thơ' />
                    <Infor title='Học vấn:' content='Kỹ thuật phần mềm - Đại Học Cần Thơ' />
                    <div style={{ display: 'flex', alignItems: 'center', flex: '1', margin: '10px 80px' }}>
                        <Typography variant='body1' sx={{ marginRight: '20px' }}>Nơi làm việc:</Typography>
                        <IconButton size='small' color="primary" component="span">
                            <AddCircleIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InforPersonalUser