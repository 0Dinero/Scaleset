import { curve, heroBackground, video1 } from "../assets";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef, useState, useEffect } from "react";
import logoBanner from "../assets/logo-banner-removebg.png";
import CompanyLogos from "./CompanyLogos";
import Input from "./Input";


const PopUp = ({popUp, setPopUp, setHasLoggedIn}) => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');

   const handleSubmit = async (e) => {
     e.preventDefault();
     const name = user;
     const emailValue = email;
     const webhookUrl ="https://discord.com/api/webhooks/1325475986287890516/PANObR92uRU2-eCuR12Hl20qokKeLkGyWpPmq15momL_md_fK4h_0fIXNOZ7m28Q7FtH";

   
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

       setHasLoggedIn(true);
       setPopUp(false); // Close the popup
     } catch (error) {
       console.error("Error sending message to Discord:", error);
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
    if(!hasLoggedIn){
      videoRef.current.pause();
      setPopUp(true)
    } else {
      setPopUp(false)
    }
  }

  useEffect(() => {
    if(popUp){
      console.log("video is paused")
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  },[popUp, setHasLoggedIn])


  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] pt-[10%] lg:whitespace-nowrap">
          <h1 className="h1 mb-6">
            Appointments That Turn Into{" "}
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
          <button className="mx-16 active:scale-95 transition-all duration-100">
            <a
              className="border-color-1 scale-100 rounded-xl border-2 px-4 py-3 font-bold text-[#FFD000] bg-color-1"
              href="#how-to-use"
            >
              Book A Call
            </a>
          </button>
        </div>

        {popUp && <PopUp popUp={popUp} setPopUp={setPopUp} setHasLoggedIn={setHasLoggedIn} />}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-20">
          <div className="hover:cursor-pointer">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[970/490] lg:aspect-[1024/490]">
                  <div className="relative w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[15%]">
                    <video
                      onClick={handleVideoPlay}
                      src={video1}
                      playsInline
                      controls
                      ref={videoRef}
                      width={1024}
                      height={490}
                      alt="AI"
                    />
                  </div>
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
          </div>
          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
