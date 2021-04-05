import './App.css';
import React, { useEffect, useState } from 'react';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { AppBar, Tab } from '@material-ui/core';
import {Api} from './helper/Api'
import Header from './components/headers/';
import Homeimg from './components/home';
import MatchesScheduled from './views/matchestoplayed'
import MatchesFinished from './views/matchesplayed'
import Teams from './views/teams'
import Scorers from './views/scorers'
import ResultsTable from './views/table'
import Statistics from './views/statistics'
import TeamsSearsh from './views/teamssearsh'
import WantedTeams from './views/wantedteams'


function App() {

  const [tabIndex, updateTabIndex] = useState('0')

  const [loading, setLoading] = useState(false)
  const [datamatches, setDatamatches] = useState([])
  const [datateams, setDatateams] = useState([])
  const [datascorers, setDatascorers] = useState([])
  useEffect(() => {

    setLoading(true)

    Api.getMatches()
    .then(res => {
        const datamatches = res.data
        setLoading(false)
        setDatamatches(datamatches)
    })
    Api.getTeams()
    .then(res => {
        const datateams = res.data
        setLoading(false)
        setDatateams(datateams)
    })
    Api.getscorers()
    .then(res => {
        const datascorers = res.data
        setLoading(false)
        setDatascorers(datascorers)
    })
    
  },[])

  const onChangeTabIndex = (event, value) => updateTabIndex(value)

  return (
    <div>
      <Header />
      <TabContext value={tabIndex}>
        <AppBar position="static" style={{ background: '#C0C43B' }} >
          <TabList onChange={onChangeTabIndex}>
          <Tab label="Inicio" value="0" />
            <Tab label="PartidosPorJugar" value="1" />
            <Tab label="PartidosJugados" value="2" />
            <Tab label="Equipos" value="3" />
            <Tab label="Goleadores" value="4" />
            <Tab label="TablaDeResultados" value="5" />
            <Tab label="Estadisticas" value="6" />
            <Tab label="BuscarEuqipos" value="7" />
            <Tab label="EquipoBuscado" value="8" />
          </TabList>
        </AppBar>
        <TabPanel value="0">
        <Homeimg/>
        </TabPanel>
        <TabPanel value="1">
          <MatchesScheduled datamatches={datamatches} loading={loading}/>
        </TabPanel>
        <TabPanel value="2">
          <MatchesFinished datamatches={datamatches} loading={loading}/>
        </TabPanel>
        <TabPanel value="3">
        <Teams datateams={datateams} loading={loading}/>
        </TabPanel>
        <TabPanel value="4">
        <Scorers datascorers={datascorers} loading={loading}/>
        </TabPanel>
        <TabPanel value="5">
          <ResultsTable datateams={datateams} loading={loading}/>
        </TabPanel >
        <TabPanel value="6">
        <Statistics datateams={datateams} loading={loading}/>
        </TabPanel>
        <TabPanel value="7">
        <TeamsSearsh datateams={datateams} loading={loading}/>
        </TabPanel>
        <TabPanel value="8">
        <WantedTeams/>
        </TabPanel>

      </TabContext>
      
      
    </div> 
  );
}
export default App;