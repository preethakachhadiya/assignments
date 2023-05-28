import React from 'react';
import logo from '../assets/logo192.png'

export default (props) => {
    const {event} = props;
    const handleClick = () => {
        props.removeEvent(event.id);
    };
    return (
        <div class="col-md-4 col-12 col-sm-6 col-lg-3 my-3 justify-content-between">
          <div class="card mx-auto" style={{width: "18rem"}}>
            <img src={logo} class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-center">{event.name}</h5>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <div>
                    <span><i class="bi bi-calendar"></i>{event.Date}</span>
                  </div>
                  <div>
                    <span><i class="bi bi-clock"></i>{event.Time}</span>
                  </div>
                  <div>
                    <span><i class="bi bi-geo-alt-fill"></i>{event.Location}</span>
                  </div>
                </div>
                <div class="me-1" onClick={handleClick} style={{fontSize: "1.5rem"}}>
                  <span><i class="bi bi-bookmark-fill"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div> 
    )
}