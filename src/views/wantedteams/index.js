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
import { makeStyles } from '@material-ui/core/styles';

export default class WantedTeams extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            loading: props.loading,

        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.loading !== this.state.loading) {
            this.setState({ loading: nextProps.loading })
        }
    }

    render() {

        const { loading } = this.state
        const items = { ...localStorage }

        const useStylesbox = makeStyles((theme) => ({
            root: {
                '& > *': {
                    margin: theme.spacing(1),
                    width: '2ch',
                },
            },
        }));
        return (
            <div>

                {loading && <img src={Loadingico} alt="loading..." />}
                <h2 className="h2">Tu Ultimo Equipo Buscado</h2>
                <TableContainer component={Paper}>
                    <Table className={useStylesbox.root} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="inherit"></TableCell>
                                <TableCell align="inherit">Equipo</TableCell>
                                <TableCell align="inherit">Puntos</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            
                                <TableRow key={items.name}>
                                    <TableCell align="inherit"><Avatar src={items.crestUrl} /></TableCell>
                                    <TableCell pading="10px" align="inherit">{items.name}</TableCell>
                                    <TableCell pading="10px" align="inherit">{items.points}</TableCell>
                                </TableRow>
                            
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}