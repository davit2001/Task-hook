import React, {useEffect} from "react";
import {Card, CardHeader} from "@material-ui/core";

import {format} from "date-fns";
import TaskMenu from "../../container/TaskMenu";
import {useStyles} from "../styles";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {fetchActiveClass} from "../../UI/tasksUI";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { fetchToggleTaskDialog } from "../../UI/tasksUI";
import {nanoid} from "nanoid";
import {fetchTaskAdd} from "../../actionCreators";

export default function TaskItem({task, index, moveCard}) {
   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchActiveClass(''))
    }, [])

    const ref = useRef(null);
    const id = task.id;
    const [{ handlerId }, drop] = useDrop({
        accept: "CARD",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
           
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [, dropp] = useDrop({
        accept: "ITEM",
        drop: (item, monitor) => {
              dispatch(fetchTaskAdd({
                ...item.task,
                id: nanoid(),
                projectId: task.projectId,
                parentId: task.id,
              }, task.id))
        }
    });

    const [{ isDragging }, drag] = useDrag({
        item:  {
            type: "CARD",
            id, 
            index 
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        canDrag() {
           return  !task.parentId
        }
    });
    const opacity = isDragging ? 0 : 1;

    drag(drop(ref));

    dropp(ref);

    const active = useSelector(state => state.tasksUI.activeClass)
      
    const classes = useStyles(opacity);
    return (
        <>
         
         <Card
            onClick = {() => fetchToggleTaskDialog(true, task.id)}
            ref={ref}
             elevation={
                    task.id === active ? 8 : 1
             }
             className={
                 classes.item
             }
            id={
              task.id
            }
            data-handler-id = {handlerId}
            >
                <CardHeader action= {
                                            <TaskMenu id={task.id} parentId = {task.parentId} />
                                           }
                    title={
                        task.name
                    }
                    subheader={
                        format(new Date(), "d MMM Y")
                }></CardHeader>

          </Card>
             
            {
            task.children && <> {
                task.children.map((task, index) => {
                    return (
                        <div key={
                                task.id
                            }
                            className
                            ={classes.children}>
                            <TaskItem key={
                                    task.id
                                }
                                index = {index}
                                moveCard = {moveCard}
                                task={task}/>
                        </div>
                    )
                })
            } </>
        } </>
    );
}
