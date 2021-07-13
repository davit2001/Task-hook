import React from "react";
import {Card, CardHeader, CardContent, Typography} from "@material-ui/core";
import {format} from "date-fns";
import {makeStyles} from "@material-ui/core";
import { useDrag } from 'react-dnd';
const useStyles = makeStyles((theme) => ({
    item: {
        marginTop: theme.spacing(3)
    }
}));

export default function TaskSearchItem({task}) {
    const classes = useStyles();
   
 const [{ isDragging }, drag] = useDrag({
    
		item: {
			type: "CARD",
			task,
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	});
    return (
        <>
            <Card 
             ref = {drag}
               className={
                  classes.item
              }
              elevation = {isDragging ? 8 : 1}
            >
                <CardHeader title={
                        task.name
                    }
                    subheader={
                        format(new Date(), "d MMM Y")
                }></CardHeader>
                <CardContent>
                    <Typography variant="h6">Description</Typography>
                    <Typography variant="body1">
                        {
                        task.description
                    }</Typography>
                </CardContent>
            </Card>
        </>
    );
}