import { companyLogos } from "../constants";
import Button from "./BookBtn";
const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center font-bold scale-110">
        Are you interested to know more? <br />
        Book a non-binding call to see if we're a match
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => {
          if (index === 2) {
            return (
              <div className="flex items-center mx-5">
                <Button />
              </div>
            )
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
