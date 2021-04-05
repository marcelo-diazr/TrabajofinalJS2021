import React from 'react';
import Loadingico from '../../assets/img/loadingicon.gif';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import '../../assets/styles/styles.css'

export default class MatchesFinished extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            datamatches: props.datamatches,
            loading: props.loading,
            open: false,
            match: null
        }

        this.handlerOpenModal = this.handlerOpenModal.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.datamatches !== this.state.datamatches) {
            this.setState({ datamatches: nextProps.datamatches })
        }
        if (nextProps.loading !== this.state.loading) {
            this.setState({ loading: nextProps.loading })
        }
    }

    handlerOpenModal(e, match){
        this.setState({ 
            open: true,
            match: match
        })
    }

    handleClose(){
        this.setState({ 
            open: false,
            match: null
        })
    }

    render() {
        const { datamatches, loading, match, open } = this.state
        const { matches} = datamatches
        
        const matchesFinished = matches.filter(element => element.status === 'FINISHED')
        return (
            <div>

                {loading && <img src={Loadingico} alt="loading..." />}
                <h2>{`Partidos Jugados - ${matchesFinished.length}`}</h2>

                {!loading && matchesFinished.length > 0 && <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell pading="10px" align="inherit">Grupo</TableCell>
                                <TableCell align="inherit">Fecha Partido</TableCell>
                                <TableCell align="inherit">Estado</TableCell>
                                <TableCell align="inherit">Equipos</TableCell>
                                <TableCell align="inherit"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {matchesFinished.map((match) => (
                                <TableRow key={match.id}>
                                    <TableCell pading="10px" align="inherit">{match.group}</TableCell>
                                    <TableCell pading="10px" align="inherit">{match.utcDate}</TableCell>
                                    <TableCell pading="10px" align="inherit">{match.status}</TableCell>
                                    <TableCell pading="10px" align="inherit">{match.homeTeam.name + ' VS '+ match.awayTeam.name}</TableCell>
                                    <TableCell pading="10px" align="inherit"><Button variant="contained" color="primary" onClick={e => this.handlerOpenModal(e, match)}>Ver Resultado</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>}

                {match && <Modal
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    <div className="vermodal" style={{backgroundColor: '#ffffff'}}>
                        <h2 className="h2">{`Partido: ${match.status}`}</h2>
                        <h2 className="h2">{`Local: ${match.homeTeam.name + ' ' + match.score.fullTime.homeTeam}`}</h2>
                        <h2 className="h2">{`Visita: ${match.awayTeam.name + ' ' + match.score.fullTime.awayTeam}`}</h2>
                    </div>
                </Modal>}

            </div>
        )
    }
}