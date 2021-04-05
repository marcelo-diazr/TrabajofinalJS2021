import React, { Component } from 'react'
import ChampionsLateral from '../../assets/img/lateral-champions-league-.jpg'
import ChampionsCenter from'../../assets/img/centro-champions-league-.jpg'
import '../../assets/styles/styles.css'
class Homeimg extends Component {


    render() {

        return (
            
            <div className="contenedor">
                <div className="foto-izq">
                <img src={ChampionsLateral}/>
                </div>
                <div className="foto-centro">
                    <img src={ChampionsCenter}/>
                </div>
                <div className="foto-der">
                    <img src={ChampionsLateral}/>
                </div>

            </div>
        )
    }
}

export default Homeimg;