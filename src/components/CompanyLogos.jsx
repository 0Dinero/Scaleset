import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Are you interested to know more? <br />
        Book a non-binding call to see if we're a match
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => {
          if (index === 2) {
            return (
              <button className="mx-16" key={index}>
                <a className="border-color-1 rounded-xl border-2 px-4 py-3 transition-all duration-500 hover:text-[#FFD000] hover:bg-color-1" href="#how-to-use">
                  Book A Call
                </a>
              </button>
            );
          }

        return (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        )})}
      </ul>
    </div>
  );
};

export default CompanyLogos;
