import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Gardens from '../components/Gardens'
import NewPost from '../components/NewPost'
import EditForm from '../components/EditForm'
import ViewPost from '../components/ViewPost'
import GardenProfile from '../components/GardenProfile'
import OtherProfiles from '../components/OtherProfiles'


export default(
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/gardens' component={ Gardens } />
        <Route exact path='/newpost' component={ NewPost } />
        <Route exact path='/editform' component={ EditForm } />
        <Route exact path='/viewpost' component={ ViewPost } />
        <Route exact path='/gardenprofile/:id'  component={GardenProfile} />
        <Route exact path='/previewprofile/:id'  component={OtherProfiles} />
    </Switch> 
)