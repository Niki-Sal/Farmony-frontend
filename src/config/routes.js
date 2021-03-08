import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Gardens from '../components/Gardens'


export default(
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/gardens' component={ Gardens } />
    </Switch> 
)