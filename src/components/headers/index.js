import React, { Component } from 'react'
import ChampionsIcon from '../../assets/img/champions.png'
import '../../assets/styles/styles.css'
class AppHeader extends Component {


    render() {
        return (
            <div
                className="header"
                style={{
                    backgroundColor: 'black'
                }}
            >
                <img alt="headeriz" className="icon" src={ChampionsIcon} />
                <p className="h1" align="center">Champions League 2020-2021</p>
                <img alt="headerde" className="icon" src={ChampionsIcon} />
            </div>
        )
    }
}

export default AppHeader;
