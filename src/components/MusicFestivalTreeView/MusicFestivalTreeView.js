import { makeStyles } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import TreeView from '@material-ui/lab/TreeView';
import React from 'react';
import TreeElement from '../UI/TreeElement/TreeElement';

const useStyles = makeStyles({
    root: {
        height: 500,
        flexGrow: 1,
        maxWidth: 600,

    },
});
const MusicFestivalTreeView = (props) => {
    const classes = useStyles();


    const expanded = [];
    let treeItems = null;
    if (props.musicFestData && props.musicFestData.length > 0) {
        treeItems = props.musicFestData.map(recordLabel => {
            const recordLabelName = recordLabel.name;
            expanded.push(recordLabelName);
            const bandsElem = recordLabel.bands.map(band => {
                const id = `${recordLabelName}-${band.name}`;
                expanded.push(id);
                const musicFestivals = band.musicFestivals.map(fest => <TreeElement name={` ${fest} Festival`} key={fest} id={`${recordLabelName}-${band.name}-${fest}`}></TreeElement>)
                return (<TreeElement name={`Band ${band.name}`} key={band.name} id={id}> {musicFestivals}</TreeElement>)
            })
            return (
                <TreeElement name={`Record Label - ${recordLabelName}`} key={recordLabelName} id={recordLabelName}>{bandsElem}</TreeElement>
            )
        });
    }

    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
            defaultExpanded={expanded}
        >
            {treeItems}
        </TreeView>


    )
}

export default MusicFestivalTreeView
