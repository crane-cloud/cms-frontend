import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Terms from './components/documents/terms';
import Privacy from './components/documents/privacy';
import TeamPage from './components/TeamPage';
import LandingPage from './components/LandingPage';
import Events from './components/Events';
import ACN from './components/acn';
import PageNotFound from './components/PageNotFound';
import Event from './components/oneEvent';
import './App.css';
import Articles from './components/Articles';
import Faq from './components/Faq';
import Pricing from './components/Pricing'

class App extends Component {
  render(){
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/terms-of-service" component={Terms} />
        <Route exact path="/privacy-policy" component={Privacy} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/:slug/event" component={Event} />
        <Route exact path="/cloud-native-africa" component={ACN}/>
        <Route exact path="/faqs" component={Faq}/>
        <Route exact path="/pricing" component={Pricing} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
  }
}

export default App;
