import Section from "./Section";
import Heading from "./Heading";
import {
  Gradient,
} from "./design/Services";
import { useEffect } from "react";


const Services = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Book a call now."
          text="Scaleset unlocks the potential of your business."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[52rem]">
            <div
              className="calendly-inline-widget h-full w-full"
              data-url="https://calendly.com/oscar-hansen1/meeting?hide_landing_page_details=1&hide_gdpr_banner=1"
            ></div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
