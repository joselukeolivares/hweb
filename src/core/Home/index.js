import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardClass from '../../core/CardClass'
import Plyr from 'react-plyr';
import './home.css'

const classRooms=[
    {id:1,title:"clase 1",text:"Descripción breve de la clase A",poster:'../../assets/seashellImg.jpg',alt:"Clase 1 poster"},
    {id:2,title:"clase 2",text:"Descripción breve de la clase B",poster:'../../assets/seashellImg.jpg',alt:"Clase 2 poster"}
  ]

  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5)
    },
    title: {
      padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
      color: theme.palette.openTitle
    },
    media: {
      minHeight: 400
    },
    credit: {
      padding: 10,
      textAlign: 'right',
      backgroundColor: '#ededed',
      borderBottom: '1px solid #d0d0d0',
      '& a':{
        color: '#3f4771'
      } 
    },
    classRooms:{
      display:'flex',
      justifyContent:"center"
    }
  }))  

function Home (){
    
    const classes = useStyles()

    return (
        <React.Fragment>
                <div className='container'>
                    <div className={classes.card}>
                        <h1>Bienvenidos</h1>
                        <p>Descubre todo lo que puedes aprender!</p>
                    </div>
                   <div className={classes.card}>
                   
                   <Plyr 
                    type="youtube" // or "vimeo"
                    videoId="LVMl2ain-Rs"
                    ></Plyr>
                    <p>Descripción y saludo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className={classes.classRooms}>
                    {classRooms.map((classRoom,k)=>{
                    return (<CardClass id={classRoom.id} key={`Clases${k}`}title={classRoom.title} text={classRoom.text} alt={classRoom.alt} poster={k}></CardClass>)
                    })}
                    </div>
                
                
                </div>            
        </React.Fragment>
    )

}

export {Home}