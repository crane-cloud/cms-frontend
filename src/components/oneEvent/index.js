import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import Header from "../Header";
import "./event.css";
import { API_BASE_URL } from "../../config";
import Spinner from "../Spinner";

const Event = () => {
  const [event, setEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { slug } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${API_BASE_URL}/wp-json/wp/v2/events/${slug}`
        );
        const responseData = await response.json();
        setEvent(responseData);
        setIsLoading(false);
      } catch (err) {
        const { message } = err;
        console.log(err);
        setError(message);
        setIsLoading(false);
      }
    };
    fetchEvent();
  }, [setEvent]);
  console.log(error);
  return (
    <div className="componentBackdrop">
      <Header />
      <div className="InformationBar">
        <div className="InfoHeader">Event</div>
      </div>
      {/* {error && (
        <div className="errorDiv">
          <div>{error}</div>
        </div>
      )} */}
      {Object.keys(event).length > 3 ? (
        <div className="eventContainer">
          <div className="eventTitle">{event.title.rendered}</div>
          <div className="eventParent">
            <div>
              <div
                class="eventFeaturedImage"
                style={{
                  backgroundImage: `url(${event.acf.cover_image.url})`,
                }}
              ></div>
              <div className="firstStats firstUpper">
                <div className="eventActivity">Starts:</div>
                <div className="activity">{event.acf.start_date}</div>
              </div>
              <div className="firstStats">
                <div className="eventActivity">Ends:</div>{" "}
                <div className="activity">{event.acf.end_date}</div>
              </div>
              <div className="firstStats">
                <div className="eventActivity">Location:</div>{" "}
                <div className="activity">{event.acf.location}</div>
              </div>
              <div className="firstStats">
                <div className="eventActivity">Category: </div>
                <div className="activity">{event.acf.event_type}</div>
              </div>
            </div>
            <div className="eventDesc">
              <div className="eventDescTitle">Description</div>
              <div className="eventDescContent">
                {event.acf.description} For more information contact
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
                  src={`${event.acf.links}`}
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
      ) : (
        <div className="errorDiv">
          <div>{error}</div>
        </div>
      )}
    </div>
  );
};

export default Event;
