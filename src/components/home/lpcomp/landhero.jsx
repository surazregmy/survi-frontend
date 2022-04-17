import React from "react";
import { Button, Carousel } from "antd";

const items = [
  {
    key: "1",
    title: "Surveys made easy!",
    content: "Surveys made easy.",
  },
  {
    key: "2",
    title: "Get better survey results. Create surveys.",
    content: "Create surveys for research. Get real feedback from real people.",
  },
  {
    key: "3",
    title: "Participate in Survey!",
    content: "Fill up the survey and collect points!",
  },
];

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map((item) => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">
                    Create Survey Now
                  </Button>
                  <Button size="large">
                    <i className="fas fa-desktop"></i> Register
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;
