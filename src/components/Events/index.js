import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./events.css";
import { API_BASE_URL } from "../../config";
import Spinner from "../Spinner";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/wp-json/wp/v2/events`);
        const responseData = await response.json();
        setEvents(responseData);
        setIsLoading(false);
      } catch (err) {
        setError("No events yet.");
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);
  return (
    <div className="componentBackdrop">
      <Header />
      <div className="InformationBar">
        <div className="InfoHeader">Events</div>
      </div>

      <div>
        {events.length !== 0 ? (
          events.map((event) => (
            <div class="blog-card" key={event.id}>
              <div class="meta">
                <div
                  class="photo"
                  style={{
                    backgroundImage: `url(${event.acf?.cover_image.url})`,
                  }}
                ></div>
                <ul class="details">
                  <li class="author">
                    <a href="/">Crane Cloud</a>
                  </li>
                  <li class="date">{event.acf?.start_date}</li>
                  <li class="tags">
                    <ul>
                      <li>
                        <a href="/">{event.acf?.location}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="description">
                <h1>{event.title.rendered}</h1>
                <h2>{event.acf?.event_type}</h2>
                <p className="descriptionParagraph"> {event.acf?.description}</p>
                <p class="read-more">
                  <Link
                    to={{
                      pathname: `/${event.id}/event`,
                      eventData: event,
                    }}
                    key={event.id}
                  >
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>{error}</p>
          </div>
        )}
        {isLoading ? (
          <div className="loader">
            <Spinner size="big" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Events;
