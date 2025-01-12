import { useRef, useState, useEffect } from "react";
import { curve, heroBackground } from "../assets";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import logoBanner from "../assets/logo-banner-removebg.png";
import CompanyLogos from "./CompanyLogos";
import Button from "./BookBtn";
import Input from "./Input";
import { Element } from "react-scroll";
import close from "../assets/x-mark.png"

const PopUp = ({ popUp, setPopUp, setHasLoggedIn, onFormSubmit }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = user;
    const emailValue = email;
    const webhookUrl ="https://discord.com/api/webhooks/1325475986287890516/PANObR92uRU2-eCuR12Hl20qokKeLkGyWpPmq15momL_md_fK4h_0fIXNOZ7m28Q7FtH";

    const messageContent = `New Form Submission:\n- **Name**: ${name}\n- **Email**: ${emailValue}`;

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: messageContent,
        }),
      });

      setHasLoggedIn(true);
      setPopUp(false); // Close the popup
      onFormSubmit(); // Trigger video play after form submission
    } catch (error) {
      console.error("Error sending message to Discord:", error);
    }
  };

  return (
    <div
      className="popup_window fixed top-[20%] left-[10%] rounded-xl px-3 py-7 bg-black h-[63dvh] w-[80dvw] lg:w-[60dvw] lg:left-[20%]"
      style={{ zIndex: `${popUp ? "9999" : "-1"}` }}
    >
      <div
        onClick={() => setPopUp(false)}
        className="absolute right-[-15px] top-[-15px] rounded-full border-2 border-black px-4 py-4 bg-[#FFD000] hover:bg-[#6427D6] transition-all duration-300 cursor-pointer"
      >
        <img height={10} width={10} src={close} alt="close" />
      </div>
      <div className="flex justify-center max-md:justify-center lg:justify-start">
        <img
          src={logoBanner}
          alt="logo"
          width={180}
          height={100}
          className="object-cover h-10"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="h-80 w-full flex justify-center items-center flex-col gap-[10%]"
      >
        <div className="w-[90%] md:w-[60%] lg:w-[40%]">
          <Input title={"Name"} set={setUser} value={user} />
        </div>
        <div className="w-[90%] md:w-[60%] lg:w-[40%]">
          <Input title={"Email"} set={setEmail} value={email} />
        </div>
        <div className="bg-[#6427D6] hover:bg-black transition-all duration-300 rounded-lg px-5 py-3 font-bold text-lg hover:text-[#6427D6] text-white active:scale-95">
          <button type="submit">Continue Watching The Video</button>
        </div>
      </form>
    </div>
  );
};

const Hero = () => {
  const parallaxRef = useRef(null);
  const [popUp, setPopUp] = useState(false);
  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  const [overlayActive, setOverlayActive] = useState(true);
  const [player, setPlayer] = useState(null); // Reference for the YouTube player

  // Initialize the YouTube player
  useEffect(() => {
    if (window.YT) {
      const ytPlayer = new window.YT.Player("youtube-video", {
        events: {
          onReady: (event) => {
            setPlayer(event.target); // Store the player instance
          },
        },
      });
    }
  }, []);

  const handlePopUp = () => {
    if (!hasLoggedIn) {
      setPopUp(true);
    } else {
      setPopUp(false);
      setOverlayActive(false); // Disable overlay after login
    }
  };

  // Trigger video play after successful form submission
  const handleFormSubmit = () => {
    if (player) {
      player.playVideo(); // Start video playback
    }
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <Element name="Our Strategy">
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] lg:whitespace-nowrap">
            <h1 className="h1 mb-6">
              Appointments <br></br> That Turn Into{" "}
              <span className="inline-block relative">
                Deals{" "}  
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              We help you scale by making result-driven appointment setting
              campaigns for your business
            </p>
            <Button/>
          </div>

          {popUp && (
            <PopUp
              popUp={popUp}
              setPopUp={setPopUp}
              setHasLoggedIn={setHasLoggedIn}
              onFormSubmit={handleFormSubmit} // Pass callback to trigger video play
            />
          )}

          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-20">
            <div className="relative z-10 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[970/490] lg:aspect-[1024/490] hover:cursor-pointer">
                  {overlayActive && (
                    <div
                      className="absolute inset-0 bg-transparent z-20"
                      onClick={handlePopUp}
                    ></div>
                  )}
                  <div
                    id="youtube-video"
                    className="w-full h-full"
                    style={{ position: "relative" }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/0_6AK52kSVQ?enablejsapi=1"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <img
                src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>
            <BackgroundCircles />
          </div>

          <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
        </div>

        <BottomLine />
      </Element>
    </Section>
  );
};

export default Hero;
