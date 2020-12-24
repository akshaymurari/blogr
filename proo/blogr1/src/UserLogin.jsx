import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import './login.scss'

function UserLogin() {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '25ch',
        },
    }));
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className="loginpage container-fluid m-0 p-0">
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-8 mt-5 mr-auto ml-auto shadow p-0 bodyy rounded-lg">
                        <h1 className="text-center bg-success py-3 heading">login to blog</h1>
                        <div className="m-auto" style={{ width: "max-content" }}>
                            <TextField label="enter your name" className="text"></TextField> <br/>
                            <TextField label="enter your rollname" className="text"></TextField> <br /> <br /> 
                            {/* <TextField
                                id="outlined-password-input"
                                label="enter your email"
                                type="text"
                                autoComplete="current-password"
                                variant="outlined"
                            /> <br /> <br /> */}
                            {/* <TextField
                                id="outlined-password-input"
                                label="enter your name"
                                type="text"
                                autoComplete="current-password"
                                variant="outlined"
                            /> <br /> <br /> */}
                            <TextField
                                id="outlined-password-input"
                                label="enter your email"
                                type="text"
                                autoComplete="current-password"
                                variant="outlined"
                            /> <br /> <br />
                            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={{ margin: "0" }}>
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl> <br /> <br />
                            <Button className="btnlogin">submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin
