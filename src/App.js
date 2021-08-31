import Start from './Start';
import Message from './Message';
import Score from './Score';
import Quiz from './Quiz';
import Ranking from './Ranking';
import { Switch } from 'react-router';
import {Route} from "react-router-dom";

const App = () => {
  
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Start}/>
        <Route path = '/quiz' component={Quiz}/>
        <Route path = '/message' component={Message}/>
        <Route path = '/Score' component={Score}/>
        <Route path = '/ranking' component={Ranking}/>
      </Switch>

    </div>
  );
}

export default App;