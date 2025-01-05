import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useEffect, useRef } from "react";

const Benefits = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container) {
      const scrollSpeed = 10;
      let animationFrame;

      const originalContent = container.innerHTML;
      container.innerHTML += originalContent;

      const autoScroll = () => {
        container.scrollLeft += scrollSpeed;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }

        animationFrame = requestAnimationFrame(autoScroll);
      };

      animationFrame = requestAnimationFrame(autoScroll);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, []);

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Feedback from our clients"
        />

        <div
          ref={scrollContainerRef}
          className="flex overflow-hidden gap-10 mb-10"
          style={{ scrollBehavior: "smooth" }}
        >
          {benefits.map((item, index) => (
            <div
              className="testimonial block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-[70dvw] md:w-[40vw] lg:w-[25svw]"
              key={index}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none w-[70dvw] md:w-[40vw] lg:w-[25vw]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.ClientPfp}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <div className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    <div className="flex flex-col pr-4 mb-1">
                      {item.clientName}
                      <div className="font-normal opacity-80 text-xs">{item.clientPosition}</div>
                      <img src={item.stars} alt="stars" width={50} className="h-4 object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
