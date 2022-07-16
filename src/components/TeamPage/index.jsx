import React, { useState, useEffect } from "react";
import Header from "../Header";
import { API_BASE_URL } from "../../config";
import Spinner from "../Spinner";
import "./TeamPage.css";
import MemberCard from "../MemberCard";

const TeamPage = () => {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      setIsLoading(true);
      try {
        // the dfault results is 10 results which I increased to 100 with ?per_page=100
        // call all the entire objects can be slow so i optimised that by only fetching the required fields
        const response = await fetch(
          `${API_BASE_URL}/wp-json/wp/v2/members?per_page=100&_fields[]=id&_fields[]=date&_fields[]=acf`
        );
        const responseData = await response.json();
        const sortedProjects = responseData.sort((a, b) =>
          b.date < a.date ? 1 : -1
        );
        setMembers(sortedProjects);
        setIsLoading(false);
      } catch (err) {
        setError("No Members yet.");
        setIsLoading(false);
      }
    };
    fetchMembers();
  }, []);
  return (
    <div className="TeamPageContainer">
      <Header />
      <div className="TeamImagesRow">
        {members.length !== 0 ? (
          members.map((member) => (
            <div key={member.id}>
              <MemberCard
                key={member.id}
                name={member.acf.name}
                title={member.acf.role}
                image={member.acf.image}
              />
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
      <div className="TeamPageFooter">
        <footer className="TeamFooter">
          <p className="TeamFooterCopyright">
            Copyright {new Date().getFullYear()} Crane Cloud. All Rights
            Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TeamPage;
