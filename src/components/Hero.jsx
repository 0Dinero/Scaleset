import { curve, heroBackground, video1 } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useState } from "react";
import Notification from "./Notification";
import logoBanner from "../assets/logo-banner-removebg.png";
import CompanyLogos from "./CompanyLogos";
import Input from "./Input";


const PopUp = ({popUp, setPopUp}) => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');

   const handleSubmit = async (e) => {
     e.preventDefault();
     const name = user;
     const emailValue = email;
     const webhookUrl ="https://discordapp.com/api/webhooks/1324678401151336510/cHF7wXXYSoT3tMhADLJS7Xl2ATFvVI_5P16QQLmK2D1z0xE8PaGhccw5gKgL3Y6lhc71";

   
     const messageContent = `New Form Submission:\n- **Name**: ${name}\n- **Email**: ${emailValue}`;

     try {
       // Send data to Discord Webhook
       await fetch(webhookUrl, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           content: messageContent,
         }),
       });

       alert("Form submitted successfully! Message sent to Discord.");
       setPopUp(false); // Close the popup
     } catch (error) {
       console.error("Error sending message to Discord:", error);
       alert("Failed to send message to Discord.");
     }
   };

  return (
    <div className="popup_window fixed top-[20%] left-[10%] rounded-xl px-3 py-7 bg-black h-[60dvh] w-[80dvw] lg:w-[60dvw] lg:left-[20%]" style={{zIndex: `${popUp ? "9999" : "-1"} `}}>
      <div className="flex justify-center max-md:justify-center lg:justify-start">
        <img src={logoBanner} alt="logo" width={180} height={100} className="object-cover h-10" />
      </div>
      <form onSubmit={handleSubmit} className="h-80 w-full flex justify-center items-center flex-col gap-[10%]">
        <div className="w-[90%] md:w-[60%] lg:w-[40%]">
          <Input title={"Name"} set={setUser} value={user}/>
        </div>
        <div className="w-[90%] md:w-[60%] lg:w-[40%]">
          <Input title={"Email"} set={setEmail} value={email}/>
        </div>
        <div className="">
          <button type="submit" className="hover:text-color-1 transition-colors duration-300">Continue Watching The Video</button>
        </div>
      </form>
    </div>      
  )
}


const Hero = () => {
  const parallaxRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [popUp, setPopUp] = useState(false);
  const [hasLoggedIn, setHasLoggedIn] = useState(false)

  const handleVideoPlay = () => {
    if(!isVideoPlaying){
      setPopUp(true);
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else if (isVideoPlaying) {
      setPopUp(false);
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  }

  // useEffect(() => {
  //   if (popUp){
  //     videoRef.current.pause();
  //     setIsVideoPlaying(false);
  //   } else {
  //     videoRef.current.play();
  //     setIsVideoPlaying(true);
  //   }
  // },[popUp])

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Appointments That Turn Into Deals with{" "}
            <span className="inline-block relative">
              Scaleset{" "}
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
          <a href="#how-to-use">
            <Button white>Book a call</Button>
          </a>
        </div>

        {popUp && <PopUp popUp={popUp} setPopUp={setPopUp}/>}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <a onClick={handleVideoPlay} className="hover:cursor-pointer">
            <div className="play-icon absolute text-9xl font-bold text-black">
              hi
            </div>
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[970/490] lg:aspect-[1024/490]">
                  <div className="relative w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[15%]">
                    <video
                      src={video1}
                      playsInline
                      controls
                      ref={videoRef}
                      className=""
                      width={1024}
                      height={490}
                      alt="AI"
                    />
                  </div>

                  {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                          <img src={icon} width={24} height={25} alt={icon} />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>

                  <ScrollParallax isAbsolutelyPositioned>
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                      title="Instant Response"
                    />
                  </ScrollParallax>
                </div>
              </div>

              <Gradient />
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
          </a>
          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
