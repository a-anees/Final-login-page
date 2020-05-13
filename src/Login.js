import React, { useState } from "react";
import {
  Paper,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  Input,
  InputLabel
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import MBlogo from "./MBlogo.png";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  logo: {
    width: 300,
    margin: 20
  }
});

function Login(props) {
  const { classes } = props;

  // I'm produce state using useState.
  // The second parameter that will keep the first parameter value will change the value.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //When the form is submitted it will run
  function onSubmit(e) {
    e.preventDefault(); //blocks the postback event of the page
    console.log("email: " + email);
    console.log("password: " + password);
  }

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <img className={classes.logo} src={MBlogo} alt="Logo" />

        <form className={classes.form} onSubmit={onSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Username</InputLabel>
            {/* When the e-mail field is changed, setEmail will run and assign the e-mail to the value in the input. */}
            <Input
              id="email"
              name="email"
              autoComplete="off"
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            {/* When the password field is changed, setPAssword will run and assign the password to the value in the input. */}
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <FormControlLabel
              value="end"
              control={<Radio color="Secondary" />}
              label="Remember me"
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="Secondary"
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withRouter(withStyles(styles)(Login));
