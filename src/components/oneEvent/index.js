import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Header from "../Header";
import "./event.css";

class Event extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: "",
    };
  }

  async componentDidMount() {
    const {
      location: { eventData },
    } = this.props;
    try {
      const response = await fetch(
        `http://localhost:8000/wp-json/wp/v2/events/${eventData.id}/`
      );
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
      this.setState({ error });
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div className="componentBackdrop">
        <Header />
        <div className="InformationBar">
          <div className="InfoHeader">Event</div>
        </div>
        {data.length !== 0 && (
          <div className="eventContainer">
            <div className="eventTitle">{data.title.rendered}</div>
            <div className="eventParent">
              <div>
                <div
                  class="eventFeaturedImage"
                  style={{
                    backgroundImage: `url(${data.acf.cover_image.url})`,
                  }}
                ></div>
                <div className="firstStats firstUpper">
                  <div className="eventActivity">Starts:</div>
                  <div className="activity">{data.acf.start_date}</div>
                </div>
                <div className="firstStats">
                  <div className="eventActivity">Ends:</div>{" "}
                  <div className="activity">{data.acf.end_date}</div>
                </div>
                <div className="firstStats">
                  <div className="eventActivity">Location:</div>{" "}
                  <div className="activity">{data.acf.location}</div>
                </div>
                <div className="firstStats">
                  <div className="eventActivity">Category: </div>
                  <div className="activity">{data.acf.event_type}</div>
                </div>
              </div>
              <div className="eventDesc">
                <div className="eventDescTitle">Description</div>
                <div className="eventDescContent">
                  {data.acf.description} For more information contact
                  dorothy@cranecloud.io
                </div>
              </div>
              <div className="videoContent">
                <div className="eventDescTitle">Video Content</div>
                <div
                  style={{
                    width: "100%",
                    height: "50vh",
                    paddingBottom: "10%",
                    position: "relative",
                  }}
                >
                  <iframe
                    src={`${data.acf.links}`}
                    title="iframe title"
                    width="100%"
                    height="100%"
                    style={{ position: "absolute" }}
                    frameBorder="0"
                    class="giphy-embed"
                    allowFullScreen
                  />
                  {/* <iframe
                    src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                    frameborder="0"
                    allow="encrypted-media"
                    allowfullscreen
                    title="video"
                  /> */}
                </div>
              </div>
            </div>
            <div>
              You can also check out this content on our{" "}
              <a href="www.youtube.com">Youtube Channel</a>.
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
