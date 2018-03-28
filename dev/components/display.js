import {h} from 'composi';
import DateTime from '../lib/dateTime';

const Display = (props) => (
  <div className="container-fluid">
    <div className="d-flex flex-row">
      <div className="col-md-4 mx-auto">
        <div className="display">
          <div className="display-time">{DateTime.toTimeString(props.date)}</div>
          { props.isDateVisible && <div className="display-date">{DateTime.toDateString(props.date)}</div> }
        </div>
      </div>
    </div>
  </div>
);

export default Display;
