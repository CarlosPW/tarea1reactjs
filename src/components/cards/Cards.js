import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		margin: 10,
	},
});

export default function Cards({ imageUrl, name, price }) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt={name}
					height="340"
					image={imageUrl}
					title={name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{name}
					</Typography>
					<Typography variant="body1" color="textSecondary" component="p">
						Price: ${price}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
