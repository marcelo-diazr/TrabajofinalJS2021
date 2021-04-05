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
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class TeamsSearsh extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            objectTeams: {},
            listname: {},
            filtername: {},
            datateams: props.datateams,
            loading: props.loading,
            name: '',
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        const value = e.target.value;
        this.setState({
            name: value,
        }, () => {

            const filtername = this.state.objectTeams.find(x => x.name === this.state.name)
            this.setState({ filtername: filtername });
            localStorage.setItem('name', filtername.name)
            localStorage.setItem('crestUrl', filtername.crestUrl)
            localStorage.setItem('points', filtername.points)


            setTimeout(alert("Your Search Was Saved"), 6000)
        });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.datateams !== this.state.datateams) {
            this.setState({ datateams: nextProps.datateams })
        }
        if (nextProps.loading !== this.state.loading) {
            this.setState({ loading: nextProps.loading })
        }
    }

    componentDidMount() {
        const grupo = this.state.datateams.standings.filter(x => x.type === "TOTAL")
        const objectTeams = grupo.map(x => x.table.map(y => {
            return {
                name: y.team.name,
                crestUrl: y.team.crestUrl,
                points: y.points,
                goalsFor: y.goalsFor,
                goalsAgainst: y.goalsAgainst,
                goalDifference: y.goalDifference,
            }
        })).flat(2)
        this.setState({ objectTeams: objectTeams });
        const listname = objectTeams.map(x => x.name)
        this.setState({ listname: listname });
    }


    render() {
        const { datateams, loading } = this.state
        const { standings } = datateams
        const { filtername } = this.state
        const { listname } = this.state
        const useStylesbox = makeStyles((theme) => ({
            root: {
                '& > *': {
                    margin: theme.spacing(1),
                    width: '20ch',
                },
                formControl: {
                    margin: theme.spacing(1),
                    minWidth: 500,
                },
                selectEmpty: {
                    marginTop: theme.spacing(2),
                },
            },
        }));



        return (
            <div>

                {loading && <img src={Loadingico} alt="loading..." />}

                <h1 className="h2">{`Busca tu Equipo Preferido de la ${datateams.competition.name}`}</h1>

                <FormControl variant="outlined" className={useStylesbox.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Equipos</InputLabel>
                    <Select
                        native
                        value={this.state.name}
                        onChange={this.onChange}
                        label="name"
                        inputProps={{
                            name: 'name'
                        }}
                    >
                        {listname && listname.length > 0 && listname.map((listname) => (
                            //<option aria-label="None" value="" />
                            <option key={listname} value={listname} >{listname}</option>


                        ))}
                    </Select>
                </FormControl>
                <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell pading="10px" align="inherit"></TableCell>
                                <TableCell align="inherit">Equipo</TableCell>
                                <TableCell align="inherit">Puntos</TableCell>
                                <TableCell align="inherit">GolesAFavor</TableCell>
                                <TableCell align="inherit">GolesEnContra</TableCell>
                                <TableCell align="inherit">GolesDeDiferencia</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow key={filtername.name}>
                                <TableCell pading="5px" align="inherit"><Avatar src={filtername.crestUrl} /></TableCell>
                                <TableCell pading="5px" align="inherit">{filtername.name}</TableCell>
                                <TableCell pading="5px" align="inherit">{filtername.points}</TableCell>
                                <TableCell pading="5px" align="inherit">{filtername.goalsFor}</TableCell>
                                <TableCell pading="5px" align="inherit">{filtername.goalsAgainst}</TableCell>
                                <TableCell pading="5px" align="inherit">{filtername.goalDifference}</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>

                </TableContainer>

            </div>
        )
    }
}