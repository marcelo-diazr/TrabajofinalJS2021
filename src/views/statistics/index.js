import React from 'react';
import Loadingico from '../../assets/img/loadingicon.gif';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../../assets/styles/styles.css'
import Avatar from '@material-ui/core/Avatar';

export default class Statistics extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            datateams: props.datateams,
            loading: props.loading

        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.datateams !== this.state.datateams) {
            this.setState({ datateams: nextProps.datateams })
        }
        if (nextProps.loading !== this.state.loading) {
            this.setState({ loading: nextProps.loading })
        }
    }

    render() {
        const { datateams, loading } = this.state
        const { standings } = datateams

        //Equipos que han ganado todos sus pertidos de local
        const grupoHome = standings.filter(x => x.type === "HOME")
        const objectGrupoHome = grupoHome.map(x => x.table.map(y => {
            return {
                name: y.team.name,
                crestUrl: y.team.crestUrl,
                points: y.points & y.points === 9,
            }
        })).flat(2)
        const filterPointsHome = objectGrupoHome.filter(hh => hh.points !== 0)

        //Equipos que han ganado todos sus pertidos de visita 
        const grupoAway = standings.filter(x => x.type === "AWAY")
        const objectGrupoAway = grupoAway.map(x => x.table.map(y => {
            return {
                name: y.team.name,
                crestUrl: y.team.crestUrl,
                points: y.points & y.points === 9,
            }
        })).flat(2)
        const filterPointsAway = objectGrupoAway.filter(hh => hh.points !== 0)

        return (
            <div >
                {loading && <img src={Loadingico} alt="loading..." />}
                <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <h2 className="h2">Equipos que han Gando Todos sus Partidos de Local</h2>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                        <TableBody>
                            {filterPointsHome && filterPointsHome.map((grupo) => (
                                <TableRow key={grupo.name}>
                                    <TableCell align="inherit"><Avatar src={grupo.crestUrl} /></TableCell>
                                    <TableCell align="inherit">{grupo.name}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
                <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <h2 className="h2">Equipos que han Gando Todos sus Partidos de Visita</h2>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
                            {filterPointsAway && filterPointsAway.map((grupo) => (
                                <TableRow key={grupo.name}>
                                    <TableCell align="inherit"><Avatar src={grupo.crestUrl} /></TableCell>
                                    <TableCell align="inherit">{grupo.name}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
            </div>
        )
    }
}