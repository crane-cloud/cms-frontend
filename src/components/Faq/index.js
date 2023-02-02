import React, { useState } from "react";
import Header from "../Header";
import "./faq.css";

function Faq() {
  const [activeCollapse, setActiveCollapse] = useState("1");

  const handleExpandCollaps = (name) => {
    if (activeCollapse === name) {
      setActiveCollapse("");
    } else {
      setActiveCollapse(name);
    }
  };
  return (
    <div className="componentBackdrop">
      <Header />
      <div className="InformationBar">
        <div className="InfoHeader">Frequently Asked Questions</div>
      </div>
      <div className="sidebar-nav">
        <div className="sidebar-nav-menu">
          <div
            className={`div-item ${
              activeCollapse === "1" ? "item-active" : ""
            }`}
            onClick={() => handleExpandCollaps("1")}
            data-id="1"
          >
            <div className="div-item-head">
              <span className="div-item-head-title">What is Crane Cloud?</span>
            </div>
            <div className="div-item-body">
              Is an open source multi-cloud service layer for deployment and
              management of Cloud Native applications. Crane Cloud provides
              compute, network and storage services without vendor lock-in.
            </div>
          </div>
          <div
            className={`div-item ${
              activeCollapse === "2" ? "item-active" : ""
            }`}
            onClick={() => handleExpandCollaps("2")}
            data-id="2"
          >
            <div className="div-item-head">
              <span className="div-item-head-title">
                What is Cloud Native App development?
              </span>
            </div>
            <div className="div-item-body">
              Cloud Native technology empowers organizations to use cloud
              computing to build and run scalable applications in modern,
              dynamic IT environments. Containers, service meshes,
              microservices, immutable infrastructure and declarative APIs
              exemplify this approach. Traditionally, applications were
              developed and run on a physical server. Then they were modified to
              migrate them into a public or private cloud. Instead, cloud-native
              apps are built and deployed in a cloud.
            </div>
          </div>
          <div
            className={`div-item ${
              activeCollapse === "3" ? "item-active" : ""
            }`}
            onClick={() => handleExpandCollaps("3")}
            data-id="3"
          >
            <div className="div-item-head">
              <span className="div-item-head-title">
                What are advantages cloud native computing?
              </span>
            </div>
            <div className="div-item-body">
              <ul>
                <li>
                  The Cloud Native Development process more closely matches the
                  speed and innovation demanded by today’s business environment.
                </li>
                <li>
                  Scaling up or down proves easier with the elastic
                  infrastructure that underpins cloud native apps.
                </li>
                <li>
                  Improvements can be made non-intrusively, causing no downtime
                  or disruption of the end-user experience.
                </li>
                <li>Sustainability</li>
                <li>Competitive Edge</li>
                <li>Automatic Software Updates</li>
                <li>Loss Prevention</li>
                <li>Disaster Recovery</li>
                <li>Quality Control</li>
                <li>Increased Collaboration</li>
                <li>Cost Savings</li>
                <li>Security</li>
                <li>Flexibility</li>
                <li>Mobility Insight </li>
              </ul>
            </div>
          </div>
          <div
            className={`div-item ${
              activeCollapse === "4" ? "item-active" : ""
            }`}
            onClick={() => handleExpandCollaps("4")}
            data-id="4"
          >
            <div className="div-item-head">
              <span className="div-item-head-title">
                What services does Crane Cloud provide?
              </span>
            </div>
            <div className="div-item-body">
              <ul>
                <li>
                  {" "}
                  Crane Cloud provides hosting services, and this includes
                  deployment of your application, analytics of the application,
                  custom domain functionality.[Custom Domain is currently
                  provided for users on our Beta program to be a part reach out
                  via the contact provided at the bottom.]
                </li>
                <li>
                  {" "}
                  It provides also Database as a service currently with Postgres
                  and Mysql flavours.
                </li>
                <li>
                  **[Under our Beta Program we are testing out
                  auto-containerization functionality on our platform, join out
                  beta program and test it out.]
                </li>
                <li>
                  **[Under our Beta program we are currently testing our own
                  Image Registry to combat the limitations that are enforced by
                  service providers like Dockerhub.]
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`div-item ${
              activeCollapse === "5" ? "item-active" : ""
            }`}
            onClick={() => handleExpandCollaps("5")}
            data-id="5"
          >
            <div className="div-item-head">
              <span className="div-item-head-title">
                Can’t I host my application that is not dockerised?
              </span>
            </div>
            <div className="div-item-body">
              No, you can not but please not that this can take very few minutes
              and its something you do once. Our team can definitely help you if
              you reach out plus our documentation have links to help you with
              that. Plus we have auto-containerisation functionality being added
              to the platform; you can test it out under our Beta program.
            </div>
          </div>
          <div
            className={`div-item ${
              activeCollapse === "6" ? "item-active" : ""
            }`}
            onClick={() => handleExpandCollaps("6")}
            data-id="6"
          >
            <div className="div-item-head">
              <span className="div-item-head-title">
                What if I have no idea on how to go about
                containerization/dockerizing an application?{" "}
              </span>
            </div>
            <div className="div-item-body">
              Note that the containerization process can take very few minutes
              and its something you do once. Our team can definitely help you if
              you reach out plus our documentation have links to help you so you
              can get up to speed on how-to. We have auto-containerisation
              functionality being added to the platform; you can test it out
              under our Beta program.
            </div>
          </div>
          <div
            className={`div-item ${
              activeCollapse === "7" ? "item-active" : ""
            }`}
            onClick={() => handleExpandCollaps("7")}
            data-id="7"
          >
            <div className="div-item-head">
              <span className="div-item-head-title">
                Are the services free of charge?
              </span>
            </div>
            <div className="div-item-body">
              We have a free tier but we offer billed service.
            </div>
          </div>
          <div
            className={`div-item ${
              activeCollapse === "8" ? "item-active" : ""
            }`}
            onClick={() => handleExpandCollaps("8")}
            data-id="8"
          >
            <div className="div-item-head">
              <span className="div-item-head-title">
                Does Crane Cloud or Makerere University have any ownership of my
                application or database hosted on Crane Cloud?
              </span>
            </div>
            <div className="div-item-body">
              No, Makerere University nor its partners have no access and do not
              have any ownership to your application or resources on the Crane Cloud infrastructure..
            </div>
          </div>
          <div
            className={`div-item ${
              activeCollapse === "9" ? "item-active" : ""
            }`}
            onClick={() => handleExpandCollaps("9")}
            data-id="9"
          >
            <div className="div-item-head">
              <span className="div-item-head-title">
                Does Crane Cloud have an image registry like Dockerhub?
              </span>
            </div>
            <div className="div-item-body">
              We have one in the pipeline, you can reach out to test it out and
              hopefully share some feedback with us.
            </div>
          </div>
          <div
            className={`div-item ${
              activeCollapse === "10" ? "item-active" : ""
            }`}
            onClick={() => handleExpandCollaps("10")}
            data-id="10"
          >
            <div className="div-item-head">
              <span className="div-item-head-title">
                Can I get help on how to do things on the platform?
              </span>
            </div>
            <div className="div-item-body">
              Definitely, we created docs to help you on everything you want to
              do on the platform, and if you still have issues, kindly let us
              know, we would be glad to help.
            </div>
          </div>
          <div
            className={`div-item ${
              activeCollapse === "11" ? "item-active" : ""
            }`}
            onClick={() => handleExpandCollaps("11")}
            data-id="11"
          >
            <div className="div-item-head">
              <span className="div-item-head-title">
                Is there a contact I can use for further inquiries?
              </span>
            </div>
            <div className="div-item-body">
              Yes we have reach out to us at, info@cranecloud.io
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
