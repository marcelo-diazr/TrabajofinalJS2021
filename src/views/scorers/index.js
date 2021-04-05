import React from 'react';
import Loadingico from '../../assets/img/loadingicon.gif';
import '../../assets/styles/styles.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class Scorers extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            datascorers: props.datascorers,
            loading: props.loading,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.datascorers !== this.state.datascorers) {
            this.setState({ datascorers: nextProps.datascorers })
        }
        if (nextProps.loading !== this.state.loading) {
            this.setState({ loading: nextProps.loading })
        }
    }


    render() {

        const { datascorers ,loading } = this.state
        const {count , competition , scorers}= datascorers

        const players = scorers.map(element => element)

        return (
            <div>
                <h1 class="h2">{`Goleadores de la ${competition.name}`}</h1>
                <div>

                    {loading && <img src={Loadingico} alt="loading..." />}
                    {!loading && count.length > 0}
                    {!loading && players.length > 0 && 
                    
                    <TableContainer component={Paper}>
                        <Table  aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell  pading="10px" align="inherit">Jugador</TableCell>
                                    <TableCell align="inherit">GolesAnotados</TableCell>
                                    <TableCell align="inherit">PosicionDelJuegor</TableCell>
                                    <TableCell align="inherit">Equipo</TableCell>
                                    <TableCell align="inherit">Nacionalidad</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {players.map((scorer) => (
                                    <TableRow key={scorer.player.name}>
                                        <TableCell pading="10px" align="inherit">{scorer.player.name}</TableCell>
                                        <TableCell pading="10px" align="inherit">{scorer.numberOfGoals}</TableCell>
                                        <TableCell pading="10px" align="inherit">{scorer.player.position}</TableCell>
                                        <TableCell pading="10px" align="inherit">{scorer.team.name}</TableCell>
                                        <TableCell pading="10px" align="inherit">{scorer.player.nationality}</TableCell>


                                        
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>}
                    </div>

                    </div>
        )
    }
}