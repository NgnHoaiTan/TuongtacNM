import { Typography, TextField, Button, Paper, Grid, Avatar } from "@mui/material";
import { makeStyles } from '@mui/styles';
import * as Yup from 'yup';
import { Formik, Form, FastField } from 'formik';
import React from "react";

import LockIcon from '@mui/icons-material/Lock';
<<<<<<< HEAD

=======
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/Auth/registerSlice";

const theme = createTheme({
    spacing: [0, 4, 8, 10, 12, 16, 32],
});
>>>>>>> 09ece6a4667e0b16d142d145834b8292721cc9dd
const useStyles = makeStyles({
    // input: {
    //     marginTop: '15px'
    // },
    datetimepicker: {
        marginTop: '10px'
    },
    errormsg: {
        color: 'red',
        fontSize: '13px'
    }

})
const initialState = {
    username: '',
    password: '',
    verifypassword: '',
    fullname: '',
    email:'',
    phonenumber: '',
}
const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const classes = useStyles();
    const phoneregex = /^(84|0[3|5|7|8|9])+([0-9]{8})$/;
    const validationSchema = Yup.object().shape({

        username: Yup.string().min(6, "Toi thieu 6 ky tu").required("Required!"),
        password: Yup.string().min(6, "Toi thieu 6 ky tu").required("Required!"),
        
        fullname: Yup.string().required("Required!"),
        phonenumber: Yup.string().matches(phoneregex, 'Vui long kiem tra so dien thoai').required("Required!"),

    })

    const onSubmit = (value, props) => {
        const data = {
            username: value.username,
            password: value.password,
            name: value.fullname,
            phone_number: value.phonenumber,

        }
<<<<<<< HEAD
        console.log(data)
        
=======
        console.log(data);
        registerUser(data, dispatch, navigate)
>>>>>>> 09ece6a4667e0b16d142d145834b8292721cc9dd
    }

    return (
        <Grid>
            <Paper elevation={0} sx={{
                marginTop: '20px'
            }}>
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
                <Formik initialValues={initialState} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {
                        (props) => (

                            <Form>
                                {/* {console.log(props)} */}
                                <FastField  as={TextField} label="Tài khoản" name="username"  fullWidth required className={classes.input} sx={{
                                    marginTop: 1
                                }} />
                                {props.errors.username && props.touched.username && (
                                    <Typography variant='body4' className={classes.errormsg}>{props.errors.username}</Typography>
                                )}

                                <FastField as={TextField} label="Mật khẩu" name="password"  type="password" fullWidth required className={classes.input} sx={{
                                    marginTop: 1
                                }} />
                                {props.errors.password && props.touched.password && (
                                    <Typography variant='body4' className={classes.errormsg}>{props.errors.password}</Typography>
                                )}

                                <FastField as={TextField} label="Họ và tên" name="fullname"  fullWidth required className={classes.input} sx={{
                                    marginTop: 1
                                }} />
                                {props.errors.fullname && props.touched.fullname && (
                                    <Typography variant='body4' className={classes.errormsg}>{props.errors.fullname}</Typography>
                                )}


                                <FastField as={TextField} label="Số điện thoại" name="phonenumber"  fullWidth required className={classes.input} sx={{
                                    marginTop: 1
                                }} />
                                {props.errors.phonenumber && props.touched.phonenumber && (
                                    <Typography variant='body4' className={classes.errormsg}>{props.errors.phonenumber}</Typography>
                                )}

                                <Button variant="contained" type="submit" color='primary' fullWidth sx={{
                                    marginTop: 1,
                                    padding:'10px 16px',
                                }}>
                                    Đăng ký
                                </Button>
                            </Form>
                        )
                    }
                </Formik>


            </Paper>
        </Grid>
    );
};

export default Signup;