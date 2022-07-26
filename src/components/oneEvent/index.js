import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import LandingFooter from "../LandingFooter";
import Header from "../Header";
import "./event.css";
import { API_BASE_URL } from "../../config";
import Spinner from "../Spinner";
import axios from "axios";
import Carousel from "./Carousel";

const Event = () => {
  const [event, setEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/wp-json/wp/v2/events/${slug}`)
      .then((res) => {
        setEvent(res.data);
        setIsLoading(false);
        setError("");
      })
      .catch((err) => {
        setError("Event ID not found!");
        setIsLoading(false);
        setEvent([]);
      });
  }, [slug]);
  return (
    <div className="componentBackdrop">
      <Header />
      <div className="InformationBar">
        <div className="InfoHeader">Event</div>
      </div>
      {isLoading ? <Spinner size="big" /> : null}
      {Object.keys(event).length > 3 ? (
        <div className="eventContainer">
          <div className="eventTitle">{event.title.rendered}</div>
          <div className="eventParent">
            <div
              className="eventFeaturedImage"
            >
              <Carousel imgUrls={event.acf.images}/>
            </div>
            <div className="firstStats firstUpper">
              <div className="eventActivity">Starts:</div>
              <div className="activity">{event.acf?.start_date}</div>
            </div>
            <div className="firstStats">
              <div className="eventActivity">Ends:</div>{" "}
              <div className="activity">{event.acf?.end_date}</div>
            </div>
            <div className="firstStats">
              <div className="eventActivity">Location:</div>{" "}
              <div className="activity">{event.acf?.location}</div>
            </div>
            <div className="firstStats">
              <div className="eventActivity">Category: </div>
              <div className="activity">{event.acf?.event_type}</div>
            </div>

            <div className="eventDesc">
              <div className="eventDescTitle">Description</div>
              <div className="eventDescContent">
                {event.acf?.description} For more information contact
                dorothy@cranecloud.io
              </div>
            </div>
            <div className="videoContent">
              <div className="eventDescTitle">Video Link</div>
              <div>{event.acf?.link?event.acf?.link:'None'}</div>
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
       <div className="LandingPageFooter">
        <LandingFooter />
      </div>
    </div>
    
  );
};

export default Event;
