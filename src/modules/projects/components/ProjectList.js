import React from 'react'
import ProjectItem from './ProjectItem'
import Masonry from 'react-masonry-css'
import {Container} from '@material-ui/core'
import {useSelector} from 'react-redux'
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
    container: {
        display: "flex",
        alignIitems: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    item: {
        maxWidth: 300,
        wordWrap: 'break-word'
    }
})

export default function ProjectList() {

    const classes = useStyles();

    const breakpoints = {
        default: 3,
        1130: 2,
        540: 1
    }

    const projects = useSelector((state) => state.projects.data)

    return (
        <Container>
            <Masonry breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                projects.map(project => (
                    <div key={
                            project.id
                        }
                        className={
                            classes.item
                    }>
                        <ProjectItem project={project}/>
                    </div>
                ))
            } </Masonry>
        </Container>
    )
}
