import React from "react";
import Card from "../../components/ui/card";
export default () => {
  return (
    <section id="about" className="about-me">
      <div className="about-grid">
        <Card
          title="JavaScript"
          content="I am passionate about the ecosystem and the constant learing it requires."
        />
        <Card
          title="Html5 / CSS3 "
          content="Of course without these javascript means almost nothing so I keep my skills in these technologies up to date and active."
        />
        <Card />
        <Card />
      </div>
    </section>
  );
};
