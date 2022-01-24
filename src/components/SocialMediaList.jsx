import * as React from 'react'
import GitIcon       from "@icons/github.svg"
import LinkndIcon    from "@icons/linkedin.svg"
import InstagramIcon from "@icons/instagram.svg"
import TwitterIcon   from "@icons/twitter.svg"

const SocialMediaList = () => {
  return(
    <div className="footer__icons">
            <h6 className="footer__title--social">Social Media</h6>
               <a className="footer__socialLink" target="_blank" href="https://github.com/JonMenez">
                <img className="footer__link--icon" src={ GitIcon } alt="github icon" />
                <span className="footer__link--text">/JonMenez</span>
               </a>
               <a className="footer__socialLink" target="_blank" href="https://www.linkedin.com/in/joan-g-2485961bb/">
                <img className="footer__link--icon" src={ LinkndIcon } alt="linkedin icon" />
                <span className="footer__link--text">/Jon_menez</span>
               </a>
               <a className="footer__socialLink" target="_blank" href="https://www.instagram.com/jon_menez/">
                <img className="footer__link--icon" src={ InstagramIcon } alt="instagram icon" />
                <span className="footer__link--text">/Jon_menez</span>
               </a>
               <a className="footer__socialLink" target="_blank" href="https://twitter.com/Jon_menez">
                <img className="footer__link--icon" src={ TwitterIcon} alt="twitter icon" />
                <span className="footer__link--text">/Jon_menez</span>

               </a>
            </div>
  ) 
};

export default SocialMediaList;
