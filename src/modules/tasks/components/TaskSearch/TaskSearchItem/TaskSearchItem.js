import React from "react";
import {Card, CardHeader, CardContent, Typography} from "@material-ui/core";
import {format} from "date-fns";
import {makeStyles} from "@material-ui/core";
import {useDrag} from "react-dnd";
const useStyles = makeStyles((theme) => ({
    item: (isDragging) => (
        {
            marginTop: theme.spacing(3),
            opacity: isDragging ? 0.3 : 1
        }
    )
}));

export default function TaskSearchItem({task}) {
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: "ITEM",
            task
        },
        collect: (monitor) => (
            {
                isDragging: !!monitor.isDragging()
            }
        )
    });
    const classes = useStyles(isDragging);
    return (
        <>
            <Card ref={drag}
                className={
                    classes.item
            }>
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
