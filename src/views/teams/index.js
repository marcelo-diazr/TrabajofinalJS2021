import React from 'react';
import '../../assets/styles/styles.css'
import Loadingico from '../../assets/img/loadingicon.gif';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

export default class Teams extends React.Component {

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
        const grupos = standings.filter((standings) => standings.type === 'TOTAL')
        const countTeams = grupos.map(x => x.table.map(y => {
            return {
                name: y.team.name,
            }
        })).flat(2)




        return (
            <div>

                {loading && <img src={Loadingico} alt="loading..." />}
                <h2>{`Hay ${countTeams.length} Equipos en la Champions League`}</h2>

                {!loading && grupos.length > 0 && <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell  pading="10px" align="inherit">Grupo</TableCell>
                                <TableCell  align="inherit">Equipo 1</TableCell>
                                <TableCell  align="inherit">Equipo 2</TableCell>
                                <TableCell  align="inherit">Equipo 3</TableCell>
                                <TableCell  align="inherit">Equipo 4</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {grupos.map((team) => (
                                <TableRow key={team.group}>
                                    <TableCell pading="5px" align="inherit">{team.group}</TableCell>
                                    <TableCell pading="5px" align="inherit">{team.table[0].team.name}</TableCell>
                                    <TableCell pading="5px" align="inherit">{team.table[1].team.name}</TableCell>
                                    <TableCell pading="5px" align="inherit">{team.table[2].team.name}</TableCell>
                                    <TableCell pading="5px" align="inherit">{team.table[3].team.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>}
                <div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/5.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/78.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/1877.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/5455.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/86.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/18.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/1887.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/108.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/65.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/503.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/654.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/516.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/64.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/102.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/678.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/4485.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/61.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/559.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/5452.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/529.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/4.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/110.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/851.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/731.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/109.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/81.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/842.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/5954.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/524.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/721.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/66.svg" /></div>
                    <div className="caja"><Avatar src="https://crests.football-data.org/1897.svg" /></div>
                </div>
            </div>
        )
    }
}