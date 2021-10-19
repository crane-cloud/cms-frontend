import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./events.css";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: "",
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `http://localhost:8000/wp-json/wp/v2/events`
      );
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    return (
      <div className="componentBackdrop">
        <Header />
        <div className="InformationBar">
          <div className="InfoHeader">Events</div>
        </div>

        <div>
          {this.state.data.length !== 0 &&
            this.state.data.map((event) => (
              <div class="blog-card" key={event.id}>
                <div class="meta">
                  <div
                    class="photo"
                    style={{
                      backgroundImage: `url(${event.acf.cover_image.url})`,
                    }}
                  ></div>
                  <ul class="details">
                    <li class="author">
                      <a href="/">Crane Cloud</a>
                    </li>
                    <li class="date">{event.acf.start_date}</li>
                    <li class="tags">
                      <ul>
                        <li>
                          <a href="/">{event.acf.location}</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="description">
                  <h1>{event.title.rendered}</h1>
                  <h2>{event.acf.event_type}</h2>
                  <p className="descriptionParagraph">
                    {" "}
                    {event.acf.description}
                  </p>
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
            ))}
        </div>
      </div>
    );
  }
}

export default Events;
