import React from 'react'
import discord from "../images/Discord.webp";
import fb from "../images/FB.webp";
import instagram from "../images/Instgram.webp";
import twitter from "../images/twitter.webp";
function Footer()
{
    return(
        <div className='footerN'>

        <div className="row ">
          <div className="col-md-12">
            <h1 className="supplytext pt-5 pb-2 text-center">Check us out on</h1>
            <span className="socials oslogo pt-3 ">
              <a href="https://discord.gg/kzyctCBTC8">
                <img className="socialicon " src={discord} alt="pic" />
              </a>
              <a href="https://twitter.com/BillionaireShe1">
                <img className="socialicon" src={twitter} alt="pic" />
              </a>
              <a href="https://www.facebook.com/Billionaire-Sheep-Club-104094652177728">
                <img className="socialicon" src={fb} alt="pic" />
              </a>
              <a href="https://www.instagram.com/billionairesheepclub/">
                <img className="socialicon" src={instagram} alt="pic" />
              </a>
            </span>
          </div>
      </div>
      <hr className="mt-4 mb-2" />
      <small className="text-white text-center d-block pb-2">© 2023</small>
        </div>
    );

}
export default Footer