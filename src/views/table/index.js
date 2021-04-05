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

export default class ResultsTable extends React.Component {

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

        //Grupo A
        const grupoA = standings.filter(x => x.group === "GROUP_A" && x.type === "TOTAL")
        const objectGrupoA = grupoA.map(x => x.table.reduce((prev, current) => {
            const tmp = (prev !== undefined && prev.find(z => z.name === current.team.name) === undefined) ? [...prev, {
                name: current.team.name,
                crestUrl: current.team.crestUrl,
                points: current.points,
                goalsFor: current.goalsFor,
                goalsAgainst: current.goalsAgainst,
                goalDifference: current.goalDifference,
            }] : [...prev];
            return tmp
        }, [])).flat(2)

        //GRUPO B
        const grupoB = standings.filter(x => x.group === "GROUP_B" && x.type === "TOTAL")
        const objectGrupoB = grupoB.map(x => x.table.reduce((prev, current) => {
            const tmp = (prev !== undefined && prev.find(z => z.name === current.team.name) === undefined) ? [...prev, {
                name: current.team.name,
                crestUrl: current.team.crestUrl,
                points: current.points,
                goalsFor: current.goalsFor,
                goalsAgainst: current.goalsAgainst,
                goalDifference: current.goalDifference,
            }] : [...prev];
            return tmp
        }, [])).flat(2)

        //GRUPO C
        const grupoC = standings.filter(x => x.group === "GROUP_C" && x.type === "TOTAL")
        const objectGrupoC = grupoC.map(x => x.table.reduce((prev, current) => {
            const tmp = (prev !== undefined && prev.find(z => z.name === current.team.name) === undefined) ? [...prev, {
                name: current.team.name,
                crestUrl: current.team.crestUrl,
                points: current.points,
                goalsFor: current.goalsFor,
                goalsAgainst: current.goalsAgainst,
                goalDifference: current.goalDifference,
            }] : [...prev];
            return tmp
        }, [])).flat(2)

        //GRUPO D
        const grupoD = standings.filter(x => x.group === "GROUP_D" && x.type === "TOTAL")
        const objectGrupoD = grupoD.map(x => x.table.reduce((prev, current) => {
            const tmp = (prev !== undefined && prev.find(z => z.name === current.team.name) === undefined) ? [...prev, {
                name: current.team.name,
                crestUrl: current.team.crestUrl,
                points: current.points,
                goalsFor: current.goalsFor,
                goalsAgainst: current.goalsAgainst,
                goalDifference: current.goalDifference,
            }] : [...prev];
            return tmp
        }, [])).flat(2)

        //GRUPO E
        const grupoE = standings.filter(x => x.group === "GROUP_E" && x.type === "TOTAL")
        const objectGrupoE = grupoE.map(x => x.table.reduce((prev, current) => {
            const tmp = (prev !== undefined && prev.find(z => z.name === current.team.name) === undefined) ? [...prev, {
                name: current.team.name,
                crestUrl: current.team.crestUrl,
                points: current.points,
                goalsFor: current.goalsFor,
                goalsAgainst: current.goalsAgainst,
                goalDifference: current.goalDifference,
            }] : [...prev];
            return tmp
        }, [])).flat(2)

        //GRUPO F
        const grupoF = standings.filter(x => x.group === "GROUP_F" && x.type === "TOTAL")
        const objectGrupoF = grupoF.map(x => x.table.reduce((prev, current) => {
            const tmp = (prev !== undefined && prev.find(z => z.name === current.team.name) === undefined) ? [...prev, {
                name: current.team.name,
                crestUrl: current.team.crestUrl,
                points: current.points,
                goalsFor: current.goalsFor,
                goalsAgainst: current.goalsAgainst,
                goalDifference: current.goalDifference,
            }] : [...prev];
            return tmp
        }, [])).flat(2)

        //GRUPO G
        const grupoG = standings.filter(x => x.group === "GROUP_G" && x.type === "TOTAL")
        const objectGrupoG = grupoG.map(x => x.table.reduce((prev, current) => {
            const tmp = (prev !== undefined && prev.find(z => z.name === current.team.name) === undefined) ? [...prev, {
                name: current.team.name,
                crestUrl: current.team.crestUrl,
                points: current.points,
                goalsFor: current.goalsFor,
                goalsAgainst: current.goalsAgainst,
                goalDifference: current.goalDifference,
            }] : [...prev];
            return tmp
        }, [])).flat(2)

        //GRUPO H
        const grupoH = standings.filter(x => x.group === "GROUP_H" && x.type === "TOTAL")
        const objectGrupoH = grupoH.map(x => x.table.reduce((prev, current) => {
            const tmp = (prev !== undefined && prev.find(z => z.name === current.team.name) === undefined) ? [...prev, {
                name: current.team.name,
                crestUrl: current.team.crestUrl,
                points: current.points,
                goalsFor: current.goalsFor,
                goalsAgainst: current.goalsAgainst,
                goalDifference: current.goalDifference,
            }] : [...prev];
            return tmp
        }, [])).flat(2)



        return (
            <div>

                {loading && <img src={Loadingico} alt="loading..." />}
                {/* {!loading && datateams.length > 0} */}
                <h1 className="h2">{`Tabla de posiciones por Grupo de la ${datateams.competition.name}`}</h1>
                <TableContainer component={Paper}>
                    <Table className="width: 10" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell pading="10px" align="inherit">Grupo_A</TableCell>
                                <TableCell align="inherit">Equipo</TableCell>
                                <TableCell align="inherit">Puntos</TableCell>
                                <TableCell align="inherit">GolesAFavor</TableCell>
                                <TableCell align="inherit">GolesEnContra</TableCell>
                                <TableCell align="inherit">GolesDeDiferencia</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {objectGrupoA && objectGrupoA.map((grupo) => (
                                <TableRow key={grupo.name}>
                                    <TableCell pading="5px" align="inherit"><Avatar src={grupo.crestUrl} /></TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.name}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.points}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsFor}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsAgainst}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalDifference}</TableCell>



                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="h4" pading="10px" align="inherit">Grupo_B</TableCell>
                                <TableCell className="h4" align="inherit">Equipo</TableCell>
                                <TableCell className="h4" align="inherit">Puntos</TableCell>
                                <TableCell className="h4" align="inherit">GolesAFavor</TableCell>
                                <TableCell className="h4" align="inherit">GolesEnContra</TableCell>
                                <TableCell className="h4" align="inherit">GolesDeDiferencia</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {objectGrupoB.map((grupo) => (
                                <TableRow key={grupo.name}>
                                    <TableCell pading="5px" align="inherit"><Avatar src={grupo.crestUrl} /></TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.name}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.points}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsFor}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsAgainst}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalDifference}</TableCell>



                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>

                </TableContainer>
                <TableContainer component={Paper}>
                    <Table className="width: 10" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="h4" pading="10px" align="inherit">Grupo_C</TableCell>
                                <TableCell className="h4" align="inherit">Equipo</TableCell>
                                <TableCell className="h4" align="inherit">Puntos</TableCell>
                                <TableCell className="h4" align="inherit">GolesAFavor</TableCell>
                                <TableCell className="h4" align="inherit">GolesEnContra</TableCell>
                                <TableCell className="h4" align="inherit">GolesDeDiferencia</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {objectGrupoC.map((grupo) => (
                                <TableRow key={grupo.name}>
                                    <TableCell pading="5px" align="inherit"><Avatar src={grupo.crestUrl} /></TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.name}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.points}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsFor}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsAgainst}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalDifference}</TableCell>



                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>

                </TableContainer>
                <TableContainer component={Paper}>
                    <Table className="width: 10" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="h4" pading="10px" align="inherit">Grupo_D</TableCell>
                                <TableCell className="h4" align="inherit">Equipo</TableCell>
                                <TableCell className="h4" align="inherit">Puntos</TableCell>
                                <TableCell className="h4" align="inherit">GolesAFavor</TableCell>
                                <TableCell className="h4" align="inherit">GolesEnContra</TableCell>
                                <TableCell className="h4" align="inherit">GolesDeDiferencia</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {objectGrupoD.map((grupo) => (
                                <TableRow key={grupo.name}>
                                    <TableCell pading="5px" align="inherit"><Avatar src={grupo.crestUrl} /></TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.name}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.points}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsFor}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsAgainst}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalDifference}</TableCell>



                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>

                </TableContainer>
                <TableContainer component={Paper}>
                    <Table className="width: 10" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="h4" pading="10px" align="inherit">Grupo_E</TableCell>
                                <TableCell className="h4" align="inherit">Equipo</TableCell>
                                <TableCell className="h4" align="inherit">Puntos</TableCell>
                                <TableCell className="h4" align="inherit">GolesAFavor</TableCell>
                                <TableCell className="h4" align="inherit">GolesEnContra</TableCell>
                                <TableCell className="h4" align="inherit">GolesDeDiferencia</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {objectGrupoE.map((grupo) => (
                                <TableRow key={grupo.name}>
                                    <TableCell pading="5px" align="inherit"><Avatar src={grupo.crestUrl} /></TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.name}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.points}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsFor}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsAgainst}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalDifference}</TableCell>



                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>

                </TableContainer>
                <TableContainer component={Paper}>
                    <Table className="width: 10" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="h4" pading="10px" align="inherit">Grupo_F</TableCell>
                                <TableCell className="h4" align="inherit">Equipo</TableCell>
                                <TableCell className="h4" align="inherit">Puntos</TableCell>
                                <TableCell className="h4" align="inherit">GolesAFavor</TableCell>
                                <TableCell className="h4" align="inherit">GolesEnContra</TableCell>
                                <TableCell className="h4" align="inherit">GolesDeDiferencia</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {objectGrupoF.map((grupo) => (
                                <TableRow key={grupo.name}>
                                    <TableCell pading="5px" align="inherit"><Avatar src={grupo.crestUrl} /></TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.name}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.points}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsFor}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsAgainst}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalDifference}</TableCell>



                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>

                </TableContainer>
                <TableContainer component={Paper}>
                    <Table className="width: 10" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="h4" pading="10px" align="inherit">Grupo_G</TableCell>
                                <TableCell className="h4" align="inherit">Equipo</TableCell>
                                <TableCell className="h4" align="inherit">Puntos</TableCell>
                                <TableCell className="h4" align="inherit">GolesAFavor</TableCell>
                                <TableCell className="h4" align="inherit">GolesEnContra</TableCell>
                                <TableCell className="h4" align="inherit">GolesDeDiferencia</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {objectGrupoG.map((grupo) => (
                                <TableRow key={grupo.name}>
                                    <TableCell pading="5px" align="inherit"><Avatar src={grupo.crestUrl} /></TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.name}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.points}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsFor}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsAgainst}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalDifference}</TableCell>



                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>

                </TableContainer>
                <TableContainer component={Paper}>
                    <Table className="width: 10" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="h4" pading="10px" align="inherit">Grupo_H</TableCell>
                                <TableCell className="h4" align="inherit">Equipo</TableCell>
                                <TableCell className="h4" align="inherit">Puntos</TableCell>
                                <TableCell className="h4" align="inherit">GolesAFavor</TableCell>
                                <TableCell className="h4" align="inherit">GolesEnContra</TableCell>
                                <TableCell className="h4" align="inherit">GolesDeDiferencia</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {objectGrupoH.map((grupo) => (
                                <TableRow key={grupo.name}>
                                    <TableCell pading="5px" align="inherit"><Avatar src={grupo.crestUrl} /></TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.name}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.points}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsFor}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalsAgainst}</TableCell>
                                    <TableCell pading="5px" align="inherit">{grupo.goalDifference}</TableCell>



                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>

                </TableContainer>

            </div>
        )
    }
}