import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import Spinner from "../Spinner";
import styles from "./Articles.module.css";
import Header from "../Header";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const convertHtml = myHtml => {
    return DOMPurify.sanitize(myHtml, {
      ALLOWED_TAGS: ["p"],
    });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/cranecloud"
      )
      .then((res) => {
        setArticles(res.data.items);
        setLoading(false);
        setError("");
      })
      .catch((Err) => {
        setLoading(false);
        setError("Failed to retrieve articles");
        setArticles({});
      });
  }, []);
  console.log(articles);
  return (
    <div className="componentBackdrop">
      <section>
        <h2>The example section.</h2>
        <article>
          <h5>
            <span>Article Image</span>
          </h5>
          <img src="../section.png" alt="article_photo" />
          <p>This is our firtst paragraph</p>
          <p>This is our second paragraph</p>
        </article>
      </section>
      <Header />
      <div className="InformationBar">
        <div className="InfoHeader">Articles</div>
      </div>
      <div>
        {loading ? (
          <div className={styles.NoResourcesMessage}>
            <div className={styles.SpinnerWrapper}>
              <Spinner size="big" />
            </div>
          </div>
        ) : error ? (
          <div className={styles.NoResourcesMessage}>
            Something went wrong! Failed to retrieve articles.
          </div>
        ) : (
          <div>
            {articles.length !== 0 &&
              articles.map((article) => (
                <div class="blog-card" key={article.id}>
                  <div class="meta">
                    <div
                      class="photo"
                      style={{
                        backgroundImage: `url(${article.thumbnail})`,
                      }}
                    ></div>
                    <ul class="details">
                      <li class="author">{article.author}</li>
                      <li class="date">{article.pubDate}</li>
                      <li class="tags">
                        <ul>
                          <li>{article.categories[1]}</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div class="description">
                    <h1>{article.title}</h1>
                    <h2>{article.categories[0]}</h2>
                    <p className="descriptionParagraph">
                      {" "}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: convertHtml(article.description),
                        }}
                      ></div>
                    </p>
                    <p class="read-more">
                      <a href={article.link} target="__blankR" key={article.id}>
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Articles;
