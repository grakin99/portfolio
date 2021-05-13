const Card = React.lazy(() => import("../ui/card"));
import React from "react";
export default () => {
  return (
    <section id="about" className="about-me">
      <div className="about-grid">
        <Card
          title="JavaScript"
          content="I am passionate about the ecosystem and the constant learning it requires."
        />
        <Card
          title="Html5 / CSS3 "
          content="Of course without these javascript means almost nothing so I keep my skills in these technologies up to date and active."
        />
        <Card
          title="Clean Code"
          content="Clean and readable code is something I always strive for. There is nothing worse then code that doesn't make sense. Do not try to reinvent the wheel, just improve it."
        />
        <Card
          title="CMS"
          content="I am proficient in WordPress development And have dabbled with joomla as well."
        />
      </div>
    </section>
  );
};
