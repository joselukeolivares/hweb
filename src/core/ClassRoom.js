import React from "react";
import ListClass from "./ListClass"
import '../css/classroom.css'
import {HomeVideo} from './HomeVideo'
import { SesionContext } from "../context";




function ClassRoom(){
    return (
        <React.Fragment>
            <div className="classroom">
                <div className="ListClassContainer">
                    <ListClass></ListClass>
                </div>
                <div className="player_classroom">
                    <SesionContext.Consumer>
                      {({
                          urlContent
                      })=>{
                        return (<HomeVideo keyContent={urlContent==null?'class01/planet.mp4':urlContent}></HomeVideo>)
                      }}  

                    </SesionContext.Consumer>
                </div>
            </div>
           
           
            
        </React.Fragment>
    )
}

export default ClassRoom