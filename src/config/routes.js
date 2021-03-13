import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Gardens from '../components/Gardens'
import NewPost from '../components/NewPost'
import EditForm from '../components/EditForm'
import ViewPost from '../components/ViewPost'
import GardenProfile from '../components/GardenProfile'
import NewPostBuy from '../components/NewPostBuy'
import ViewPostBuy from '../components/ViewPostBuy'
import ViewPostTrade from '../components/ViewPostTrade'
import NewPostTrade from '../components/NewPostTrade'
import OtherProfiles from '../components/OtherProfiles'
import ViewPostVolunteer from '../components/NewPostVolunteer'
import NewPostVolunteer from '../components/NewPostVolunteer'
import Volunteer from '../components/Volunteer'



export default(
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/gardens' component={ Gardens } />
        <Route exact path='/newpost' component={ NewPost } />
        <Route exact path='/newpostbuy' component={ NewPostBuy } />
        <Route exact path='/editform' component={ EditForm } />
        <Route exact path='/post/:id' component={ ViewPost } />
        <Route exact path='/viewpost' component={ ViewPost } />
        <Route exact path='/viewpostbuy/:id' component={ ViewPostBuy } />
        <Route exact path='/viewposttrade/:id' component={ ViewPostTrade } />
        <Route exact path='/viewposttrade' component={ ViewPostTrade } />
        <Route exact path='/newposttrade' component={ NewPostTrade } />
        <Route exact path='/gardenprofile/:id'  component={GardenProfile} />
        <Route exact path='/viewpostvolunteer'  component={ViewPostVolunteer}/>
        <Route exact path='/newpostvolunteer'  component={NewPostVolunteer}/>
        <Route exact path='/previewprofile/:id'  component={OtherProfiles} />
        <Route exact path='/volunteer' component={Volunteer} />
    </Switch> 
)