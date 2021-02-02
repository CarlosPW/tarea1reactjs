import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./navbar.css";

import { Hatspage } from "../../pages/hats/Hatspage";
import { Sneakerspage } from "../../pages/sneakers/Sneakerspage";
import { Homepage } from "../../pages/homepage/Homepage";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function Navbar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Router>
				<AppBar position="static">
					<Toolbar>
						<Typography className={classes.title}>
							<Link to="/" style={{ textDecoration: "none", color: "white" }}>
								<HomeIcon fontSize="large" />
							</Link>
						</Typography>
						<Button color="inherit" to="/Hatspage">
							<Link to="/Hatspage" style={{ textDecoration: "none", color: "white" }}>
								Hats
							</Link>
						</Button>
						<Button color="inherit">
							<Link to="/Sneakerspage" style={{ textDecoration: "none", color: "white" }}>
								Sneakers
							</Link>
						</Button>
					</Toolbar>
				</AppBar>

				<Switch>
					<Route path="/Hatspage">
						<Hatspage />
					</Route>
					<Route path="/Sneakerspage">
						<Sneakerspage />
					</Route>
					<Route path="/">
						<Homepage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
