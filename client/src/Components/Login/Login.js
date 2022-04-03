import React from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, Grid, Paper, Typography,TextField, Button } from '@mui/material';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import LockIcon from '@mui/icons-material/Lock';
const useStyle = makeStyles({
    errormsg: {
        color: 'red',
        fontSize: '13px'
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
                                    mt:3
                                }} />
                                {props.errors.username && props.touched.username && (
                                    <p className={classes.errormsg}>{props.errors.username}</p>
                                )}
                                <FastField as={TextField} type="password" label="Mật khẩu" name="password" fullWidth className={classes.input} required sx={{
                                    my:1
                                }} />
                                {/* hien thi thong bao loi khi validation error voi Yup */}
                                {props.errors.password && props.touched.password && (
                                    <p className={classes.errormsg}>{props.errors.password}</p>
                                )}
                                <Button variant="contained" type="submit" fullWidth sx={{}}>
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