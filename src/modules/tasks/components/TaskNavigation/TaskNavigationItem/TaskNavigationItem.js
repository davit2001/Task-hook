import React from "react";
import {Link} from 'react-scroll'
import TreeItem from '@material-ui/lab/TreeItem';

export default function TaskNavigationItem({task}) {
    const renderTree = (task) => (
        <Link  
           activeClass="active" 
            to={
                task.id
            }
            key={task.id} 
            smooth={true}
            duration={250}
            containerId="container"
        >
          <TreeItem 
              key={task.id} 
              nodeId={task.id} 
              label={task.name} 
           >
             { task.children && task.children.map((task) => renderTree(task))}
          </TreeItem>
        </Link>
      );
    return (
        <>
          {renderTree(task)}
        </>
    );
}