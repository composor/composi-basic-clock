import {h} from 'composi';

const Panel = (props) => {
  return (
    <div className="container">
      <div className="d-flex flex-row">
        <div className="col-md-4 mx-auto">
          <div className="panel">            
            <label id="date-switch" className="switch">
              <input type="checkbox" checked={props.dateOn} onChange={props.toggleDate}/>
              <span className="slider round"></span>
            </label>
            <label className="panel-switch-text" htmlFor="date-switch">
              <i className="fa fa-calendar"></i>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
