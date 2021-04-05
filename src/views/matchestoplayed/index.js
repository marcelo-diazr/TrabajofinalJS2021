import React from 'react';
import Loadingico from '../../assets/img/loadingicon.gif';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class MatchesScheduled extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            datamatches: props.datamatches,
            loading: props.loading,
        }
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.datamatches !== this.state.datamatches) {
            this.setState({ datamatches: nextProps.datamatches })
        }
        if (nextProps.loading !== this.state.loading) {
            this.setState({ loading: nextProps.loading })
        }
    }

    render() {
        const { datamatches, loading } = this.state
        const { matches} = datamatches
        const matchesScheduled = matches.filter(element => element.status === 'SCHEDULED')

        return (
            <div>
                {loading && <img src={Loadingico} alt="loading..." />}
                <h2>{`Partidos Por Jugar - ${matchesScheduled.length}`}</h2>

                {!loading && matchesScheduled.length > 0 && <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="inherit">Fecha Partido</TableCell>
                                <TableCell align="inherit">Estado</TableCell>
                                <TableCell align="inherit">Equipos</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {matchesScheduled.map((match) => (
                                <TableRow key={match.id}>
                                    <TableCell pading="10px" align="inherit">{match.utcDate}</TableCell>
                                    <TableCell pading="10px" align="inherit">{match.status}</TableCell>
                                    <TableCell pading="10px" align="inherit">{match.homeTeam.name + ' VS '+ match.awayTeam.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>}

            </div>
        )
    }
}