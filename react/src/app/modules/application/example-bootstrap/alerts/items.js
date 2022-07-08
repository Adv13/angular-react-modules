import React from 'react';

import './items.css';

class Alerts extends React.Component {

  render() {
    return (

      <div className="row">
        <div className="col p-4">
          <div className="card mb-2">
            <div className="card-body">
              <h1 className="card-title text-center text-primary">Alerts</h1>
              <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Alien Covenant!</strong> Warning Movie with custom close button.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              <div className="alert alert-primary alert-dismissible fade show" role="alert" data-tor="show:scale.from(0)">
                <strong>Alien Prometheus!</strong> Primary Movie with custom close button.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-body">
              <h1 className="card-title text-primary">Alerts</h1>
              <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
              </div>
              <div className="alert alert-secondary" role="alert">
                A simple secondary alert—check it out!
              </div>
              <div className="alert alert-success" role="alert">
                A simple success alert—check it out!
              </div>
              <div className="alert alert-danger" role="alert">
                A simple danger alert—check it out!
              </div>
              <div className="alert alert-warning" role="alert">
                A simple warning alert—check it out!
              </div>
              <div className="alert alert-info" role="alert">
                A simple info alert—check it out!
              </div>
              <div className="alert alert-light" role="alert">
                A simple light alert—check it out!
              </div>
              <div className="alert alert-dark" role="alert">
                A simple dark alert—check it out!
              </div>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-body">
              <h1 className="card-title text-center text-primary">Alerts with links</h1>
              <div className="alert alert-primary" role="alert">
                A simple primary movie with <a href="#" className="alert-link">Alien Covenant</a>. Click to see the details.
              </div>
              <div className="alert alert-secondary" role="alert">
                A simple secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if
                you
                like.
              </div>
              <div className="alert alert-success" role="alert">
                A simple success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you
                like.
              </div>
              <div className="alert alert-danger" role="alert">
                A simple danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you
                like.
              </div>
              <div className="alert alert-warning" role="alert">
                A simple warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you
                like.
              </div>
              <div className="alert alert-info" role="alert">
                A simple info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you
                like.
              </div>
              <div className="alert alert-light" role="alert">
                A simple light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you
                like.
              </div>
              <div className="alert alert-dark" role="alert">
                A simple dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you
                like.
              </div>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-body">
              <h1 className="card-title text-primary">Alerts with Font Awesome Icon</h1>
              <div className="alert alert-primary d-flex align-items-center" role="alert">
                <div>
                  <i className="fas fa-rss-square me-1"></i>
                  An example alert with an icon
                </div>
              </div>
              <div className="alert alert-primary d-flex align-items-center" role="alert">
                <div>
                  <i className="fas fa-rss-square me-1"></i>
                  An example alert with an icon
                </div>
              </div>
              <div className="alert alert-success d-flex align-items-center" role="alert">
                <div>
                  <i className="fas fa-rss-square me-1"></i>
                  An example success alert with an icon
                </div>
              </div>
              <div className="alert alert-warning d-flex align-items-center" role="alert">
                <div>
                  <i className="fas fa-rss-square me-1"></i>
                  An example warning alert with an icon
                </div>
              </div>
              <div className="alert alert-danger d-flex align-items-center" role="alert">
                <div>
                  <i className="fas fa-rss-square me-1"></i>
                  An example danger alert with an icon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }

}
export default Alerts; 
