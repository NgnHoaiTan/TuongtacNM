import React from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, Grid, Paper, Typography,TextField, Button } from '@mui/material';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import LockIcon from '@mui/icons-material/Lock';
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

    // validation form with yup
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3,'Ít nhất 3 ký tự').required("Required!"),
        password: Yup.string().min(6,"Ít nhất 6 ký tự").required("Required!"),
    })
    // su kien submit dang nhap
    const onSubmit = (value,props)=>{
        console.log(props)
        const data={
            username:value.username,
            password:value.password
        }
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
                </Grid>
                {/* thu vien formik cho phep tao form va validation mot cach de dang voi Yup library javascript */}
                <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {
                        (props)=>(
                            <Form >
                                {console.log(props)}
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
                                    Đăng nhập
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