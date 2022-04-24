import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, Grid, Paper, Typography,TextField, Button, CircularProgress, Box } from '@mui/material';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import LockIcon from '@mui/icons-material/Lock';
import { loginUser } from '../../features/Auth/loginSlice';
import { getlogin } from '../../features/Auth/authSlice';

const useStyle = makeStyles({
    errormsg: {
        color: 'red',
        margin:'5px 0',

    }
})

const initialValue ={
    username: '',
    password:'',
}
const Login = () => {
    const classes = useStyle();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoading, error } = useSelector(getlogin)
    // const loggedin = useSelector(getresult);
    console.log(isLoading, error);
   
    // if(Object.keys(loggedin).length !== 0){
    //     navigate('/');
    // }
    // validation form with yup
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3,'Ít nhất 3 ký tự').required("Required!"),
        password: Yup.string().min(6,"Ít nhất 6 ký tự").required("Required!"),
    })
    // su kien submit dang nhap
    const onSubmit = (value,props)=>{
        const data={
            username:value.username,
            password:value.password
        }
        console.log(data);
        loginUser(data, dispatch, navigate)
    }
    return (
        <Grid>
            <Paper elevation={0}>
                <Grid align="center" sx={{
                    mt:3
                }}>
                    <Avatar >
                        <LockIcon />
                    </Avatar>
                    <Typography variant="h6">
                        WildDiscovery
                    </Typography>
                    <Box color={'#ff6666'} margin='10px 15px'>
                        {error ? <Typography variant='body1'>Tài khoản hoặc mật khẩu không chính xác!</Typography> : ''}
                    </Box>
                </Grid>
                {/* thu vien formik cho phep tao form va validation mot cach de dang voi Yup library javascript */}
                <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {
                        (props)=>(
                            <Form >
                                <FastField as={TextField} label="Tài khoản" name="username" fullWidth className={classes.input} required sx={{
                                    my:1
                                }} />
                                {props.errors.username && props.touched.username && (
                                    <Typography variant='body4' className={classes.errormsg}>{props.errors.username}</Typography>
                                )}
                                <FastField as={TextField} type="password" label="Mật khẩu" name="password" fullWidth className={classes.input} required sx={{
                                    my:1
                                }}/>
                                {/* hien thi thong bao loi khi validation error voi Yup */}
                                {props.errors.password && props.touched.password && (
                                    <Typography variant='body4' sx={{mb:1}} className={classes.errormsg}>{props.errors.password}</Typography>
                                )}
                                <Button variant="contained" type="submit" fullWidth sx={{mt:1,padding:'10px 16px',}}>
                                    {isLoading && !error ? <CircularProgress disableShrink sx={{color: '#fff'}}/> : 'Đăng nhập'}
                                </Button>
                            </Form>
                        )
                    }

                </Formik>
            </Paper>
        </Grid>
    );
};

export default Login;