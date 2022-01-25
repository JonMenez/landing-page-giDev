import * as React from 'react'
import GitIcon       from "@icons/github.svg"
import LinkndIcon    from "@icons/linkedin.svg"
import InstagramIcon from "@icons/instagram.svg"
import TwitterIcon   from "@icons/twitter.svg"
import '@styles/socialMedia.scss'

const SocialMedia = () => {
  return(
    <div className="footer__social">
            <h6 className="footer__socialTitle">Social Media</h6>
               <a className="footer__socialLink" target="_blank" href="https://github.com/JonMenez">
                <img className="footer__socialIcon" src={ GitIcon } alt="github icon" />
                <span className="footer__socialUser">/JonMenez</span>
               </a>
               <a className="footer__socialLink" target="_blank" href="https://www.linkedin.com/in/joan-g-2485961bb/">
                <img className="footer__socialIcon" src={ LinkndIcon } alt="linkedin icon" />
                <span className="footer__socialUser">/Jon_menez</span>
               </a>
               <a className="footer__socialLink" target="_blank" href="https://www.instagram.com/jon_menez/">
                <img className="footer__socialIcon" src={ InstagramIcon } alt="instagram icon" />
                <span className="footer__socialUser">/Jon_menez</span>
               </a>
               <a className="footer__socialLink" target="_blank" href="https://twitter.com/Jon_menez">
                <img className="footer__socialIcon" src={ TwitterIcon} alt="twitter icon" />
                <span className="footer__socialUser">/Jon_menez</span>

               </a>
            </div>
  ) 
};

export default SocialMedia;
