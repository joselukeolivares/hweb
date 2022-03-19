import React, { useContext } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/Lock';
import ListItemText from '@material-ui/core/ListItemText';
import { styled } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import FolderIcon from '@material-ui/icons/Folder';
import { makeStyles } from '@material-ui/core/styles';
import { SesionContext } from '../context';

const useStyles = makeStyles((theme) => ({
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    listContainer:{
        width:"20rem",
        topPadding: "5rem"
    }

  }));

function ListClass(){

const [dense,setDense]=React.useState(false)
const [secondary, setSecondary] = React.useState(false);
const clasesList=[
    {courseId:1,videoId:1,played:false,public:true,key:'class01/planet.mp4'},
    {courseId:1,videoId:1,played:false,public:true,key:'class01/class120_demo.mp4'},
    {courseId:1,videoId:1,played:false,public:true,key:'class01/bbb_1080_60fps.mp4'},
    {courseId:1,videoId:1,played:false,public:true,key:'class01/class120_demo.mp4'},
    {courseId:1,videoId:1,played:false,public:true,key:'class01/planet.mp4'},
    {courseId:1,videoId:1,played:false,public:true,key:'class01/bbb_1080_60fps.mp4'},
    {courseId:1,videoId:1,played:false,public:true,key:'class01/class120_demo.mp4'},
    {courseId:1,videoId:1,played:false,public:true,key:'class01/planet.mp4'},
    {courseId:1,videoId:1,played:false,public:true,key:'class01/bbb_1080_60fps.mp4'},
    {courseId:1,videoId:1,played:false,public:true,key:'class01/class120_demo.mp4'},
    {courseId:1,videoId:1,played:false,public:true,key:'class01/planet.mp4'},
    {courseId:1,videoId:1,played:false,public:true,key:'class01/bbb_1080_60fps.mp4'},
]
const classes=useStyles()
const values=useContext(SesionContext)
function updatePlayer(key){
    values.setUrlContent(key)
    console.log(values.urlContent)
}
    
    return (
        
            
                <List dense={dense}>
                
                {clasesList.map((clase,i)=>{
                    return (
                        <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <LockIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={`Clase ${i+1}`}
                          secondary={secondary ? 'Secondary text' : null}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <PlayArrowIcon onClick={()=>{
                              updatePlayer(clasesList[i].key)
                            }}/>
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )
                })}
                            
                        
                </List>
                
        
    )
}

export default ListClass