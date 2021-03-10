import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Gardens from '../components/Gardens'
import NewPost from '../components/NewPost'
import EditForm from '../components/EditForm'
import ViewPost from '../components/ViewPost'
import Holistic from '../components/Holistic'


export default(
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/gardens' component={ Gardens } />
        <Route exact path='/newpost' component={ NewPost } />
        <Route exact path='/editform' component={ EditForm } />
        <Route exact path='/viewpost/:id' component={ ViewPost } />
    </Switch> 
)