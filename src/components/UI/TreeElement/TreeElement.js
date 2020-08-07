import React from 'react'
import TreeItem from '@material-ui/lab/TreeItem'

const TreeElement = (props) => {
    return (
        <TreeItem nodeId={props.id} label={props.name}>
            {props.children}
        </TreeItem>
    )
}

export default TreeElement;
