import React from 'react'
import placeholder from "../images/about2.png";
import bandana from "../images/bandana.png";
import eth from "../images/eth.png";
import spray from "../images/spray.png";
import discord from "../images/Discord.webp";
import fb from "../images/FB.webp";
import instagram from "../images/Instgram.webp";
import twitter from "../images/twitter.webp";
import user from "../images/user.png";
function HomeN()
{
    return(
        <div className='HomeN'>
            <div className=" pt-5 container">
        <div className="row mb-5 pb-5">
          <div className="col-md-7">
            <div className="intro mb-5 pt-5" id="mint">
              <h1 className="titletext1 tex t-center">
                WHY CryptoPharmacy?
              </h1>
              <p className="text-white text-lg t ext-center">
              Pharmaceutical supply chain stakeholders can now rest easy, thanks to our blockchain-based solution designed to prevent the distribution of counterfeit drugs. Our innovative platform ensures authenticity and safety at every step, empowering you to take charge of the integrity of your supply chain. Come and join us in our quest to revolutionize the industry and safeguard the lives of millions worldwide
                                    

              </p>
            </div>
          </div>

          <div className="col-md-5">
            <img
              src={placeholder}
              alt="pic"
              height={"200px"}
              className="pb-5 mx-auto d-block rotate imgs"
            />
            {/* <Mintbtn /> */}
            <button className="mt-3 mint-btn mx-auto d-block">
              Register Yourself
            </button>
            {/* <a className="text-center text-white infotext d-block">Smart Contract Address</a> */}
          </div>
        </div>

        <div className="row container maincards ">
          <div className="row  cards  ">
            <div className="col-md-4 px-2 background">
              <img src={spray} alt="pic" className="d-block mx-auto pb-2   " />
              <p className="text-center  infotext">
              The PharmaLedger project will create a scalable blockchain platform validated 
              through reference use cases in supply chain,
              that will serve trendsetters in the industry, thus enabling early adopters..{" "}
              </p>
            </div>

            <div className="col-md-4 px-2 background">
              <img src={eth} alt="pic" className="d-block mx-auto pb-3" />
              <p className="text-center e infotext">
                Blockchain based Pharma counterfeit, You can now verify Pharma products
                and batches with the help of blockchain, order and track your product delivery,
                 check your driver's rating{" "}
              </p>
            </div>

            <div className="col-md-4 px-2 background">
              <img src={bandana} alt="pic" className="d-block mx-auto pb-3" />
              <p className="text-center  infotext">
                Now Pharmacies, Warehouses, Manufacturers
                and Drivers can work with each other directly to ensure safety of drugs.
                All the data is stored on blockchain and users can verify{" "}
              </p>
            </div>
          </div>
          <p className="text-center text-white pt-3">
          Crypto Pharma will serve as a single source of truth for the healthcare ecosystem and will be designed for 
          efficient decentralised governance, wide adoption by the stakeholders of the ecosystem, compliance with extant 
          and emerging standards and regulation, and end-to-end connectivity and interoperability.
          </p>
        </div>
      </div>
      <br></br>

      <div className="pt-5 container  story">
        <div className="col-md-12 ">
          <h1 className="titletext text-center py-5">Supply Chain</h1>

          <p className="  titletext3">
          Driving patient safety, reliable product traceability, aiding the fight against counterfeiting, 
          reducing fraud and complying with European regulations are key priorities for pharmaceutical manufacturers, 
          distributors, dispensers, and governments. European regulators and the European Federation of Pharmaceutical Industries and Associations (EFPIA) 
          have implemented serialisation of prescription drugs (by the manufacturer) with systematic control at the point of dispense (Pharmacy or Hospital),
           to solve the aforementioned sectoral priorities, aiming at balancing efficiency (ensuring patient safety) and cost control. 
           Product serialisation at the saleable unit is the foundation upon which Crypto Pharma will be built.


          </p>
        </div>
      </div>

      <div className="team pt-5 px-5 container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="titletext text-center pb-5">Team</h1>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-md-3 px-4">
            <img src={user} alt="pic" className="d-block mx-auto teamimg w-100" />
            <h3 className="teamname pt-4">Tala Shishani</h3>
            <p className="text-center text-white">
              Project Lead
            </p>
          </div>

        </div>
      </div>

      <div className="team pt-5 mt-5 px-5 container text-white">
        <div className="row">
          <div className="col-md-12">
            <h1 className="titletext text-center pb-2 roadmap" id="roadmap">
              Crypto Pharma Roadmap
            </h1>
            <p className="text-white billion text-center text-lg">
              Website Interface<br></br>
              Dashboard for Pharmacists, Manufacturers, Warehourses, Drivers<br></br>
              Blockchain Integration<br></br>
              User Login and Authentication System<br></br>
              Order, Delivery and Tracking System<br></br>
              Drugs Box Temperature Updates<br></br>
              Driver's rating<br></br>
              QR Upload and verification for product<br></br>

            </p>
          </div>
        </div>
        </div>
        </div>
    );

}
export default HomeN