import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: "5%",
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <span class="material-icons" style={{fontSize:'3rem'}}>android</span>{" "}
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            BAYMAX
          </Typography>
          <Button
            color="inherit"
            style={{ fontSize: "1.9rem", marginRight: "5%" }}>
            <Link to="/login" style={{color:'white'}}>Login</Link>
            
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
