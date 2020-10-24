import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import fetch from '../libs/fetch';
import useSWR  from 'swr';
import Result from './results';

export default function Home(props) { 
  const [consumers, setConsumers] = useState(100);
  const [agents, setAgents] = useState(10);
  const [selectedConsumers, setSelectedConsumers] = useState(0);
  const [selectedAgents, setSelectedAgents] = useState(0);
  const [isStartSimulation, setIsStartSimulation] = useState(false);
  
  const handleConsumersChanged= (e) => {
     setConsumers(e.target.value);
  }
  const handleAgentsChanged= (e) => {
    setAgents(e.target.value);
  }
  const handleSubmitClicked = (e) => {
    setIsStartSimulation(true);
    setSelectedConsumers(consumers);
    setSelectedAgents(agents);
    e.preventDefault();
    
  }

  const handleSimulationDone = (e) => {
    setIsStartSimulation(false);
    setSelectedConsumers(0);
    setSelectedAgents(0);
    e.preventDefault();
  }

  return (
    <div >
      <Head>
        <title>Connection-Simulation</title>
      </Head>

      <main className={styles.main}>
        <div>
          <span className={styles.input}><label >Consumers: </label></span> 
          <input className={styles.input} type="number" max="100" min="10" id="consumers-input" onChange={handleConsumersChanged} onClick={handleSimulationDone}
            value= {consumers}
            placeholder="enter number of consumers"/>
          <br></br>
          <label className={styles.input}>Agents: </label>        
          <input className={styles.input} type="number" max="10" min="2" id="agents-input" onChange={handleAgentsChanged} onClick={handleSimulationDone}
            value={agents}
            placeholder="enter number of agents"/>
          <br></br>

          <button className={styles.submit} type="submit" onClick={handleSubmitClicked} disabled={isStartSimulation} >Submit</button>
          <Result consumers= {selectedConsumers} agents={selectedAgents} onSimulationDone={handleSimulationDone}/>
        </div>
      </main>

    </div>
  )
}

