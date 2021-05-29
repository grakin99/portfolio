import React from "react";

const SocialLinks = React.lazy(() => import("../ui/socialLinks"));

export default function ContactMe() {
  return (
    <section className="contact">
      <div>
        <p>
          Take a look at my github, and email me! I am currently working at
          promohack as an independent contactor!
        </p>
      </div>
      <SocialLinks />
    </section>
  );
}
