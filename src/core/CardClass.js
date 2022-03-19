import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clase1Image from './../assets/clase1.jpg'
import clase2Image from './../assets/clase2.jpg'
import { Redirect } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { SesionContext } from '../context';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin:50
    },
  });

  

function CardClass(props){
    const altCard=props.alt
    const poster=props.poster
    const title=props.title
    const text=props.text
    const classes=useStyles()
    const navigate=useNavigate()
    let id=props.id
    const values=useContext(SesionContext)


function handleClick(){
    values.setUrlContent(id)
    
    navigate('/classroom')

}

    return (
        <Card className={classes.root} >
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component='img'
                    alt={"Poster Clase"}
                    height='140'
                    image={poster==0?clase1Image:clase2Image}

                >
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant='h5'  component='h2'>
                    {title}  
                    </Typography>
                    <Typography variant="body2" color="text-secundary" component="p">
                       {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                    <Button size="small" color="primary">Compartir</Button>
                    <Button size="small" color="primary">Acerca del curso</Button>
            </CardActions>
        </Card>
    )
}

export default CardClass
