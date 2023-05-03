import React, { Component } from "react";
import NotebookDetailsModal from "./NotebookDetailsModal";

class Notebooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeNotebooks && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.notebooks;
      var notebooks = this.props.resumeNotebooks.map(function (notebooks) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={notebooks.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(notebooks)}>
                <div>
                  <img
                    src={notebooks.images[0]}
                    alt="projectImages"
                    height="230"
                    width="260"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{notebooks.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {notebooks.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{notebooks}</div>
          </div>
          <NotebookDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Notebooks;
