import fetch from '../libs/fetch';
import useSWR  from 'swr';

export default function Result(props) {
    const { data }  = useSWR(`/api/data?consumers=${props.consumers}&agents=${props.agents}`, fetch);
    if(data && data.consumerConnectedPercent && parseInt(props.consumers) > 0) {
      return (
          <div>
            <h3>Simulation Results: </h3>
            <p>{`Consumer Connected : ${data.consumerConnectedPercent}%`}</p>
            <p>{`Agent Utilization : ${data.agentUtilizationPercent}%`}</p>
          </div>
      )
    } else if(parseInt(props.consumers) > 0) {
      return <div>loading.. </div>
    } else {
      return <div>Select Consumers and Agents and click submit</div>
    }    
}