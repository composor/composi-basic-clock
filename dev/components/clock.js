import {h, Component} from 'composi';
import Display from './display';
import Panel from './panel';

export class Clock extends Component {

  constructor() {
    super();
    
    this.container = 'section'
    this.state = {
      date: new Date(),
      isDateVisible: true
    };
    
    this.toggleDate = this.toggleDate.bind(this);
  }

  componentDidMount() {
    this.startTime();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTime() {    
    this.timer = setInterval(() => {
      this.setState(() => ({ date: new Date()}));
    }, 1000);
  }   
  
  toggleDate() {
    this.setState((prevState) => ({ isDateVisible: !prevState.isDateVisible}));
  }

  render() {
    return (
      <div>
        <Panel toggleDate={this.toggleDate} dateOn={this.state.isDateVisible} />
        <Display date={this.state.date} isDateVisible={this.state.isDateVisible} />
      </div>
    );
  }
}
