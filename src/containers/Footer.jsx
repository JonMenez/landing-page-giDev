import * as React      from 'react';
import Navbar          from '@components/Navbar'
import SocialMediaList from '@components/SocialMediaList';
import CopyRightIcon   from "@icons/copyRight.svg"
import "@styles/navBar.scss"
import '@styles/footer.scss'

const Footer = () => {

   const currentYear = () => new Date().getFullYear();


  return (
         <section className='footer'>
            <h4 className='footer__title'>Hey!</h4>
            <p className='footer__text'>My name is <span className="footer__name">Joan</span> and like swimming, otherwise I like programming webs & apps for everyone!</p>
            <Navbar 
            navBar='footer__list' 
            navList='footer__items' 
            navLinks='footer__links' 
            />
            <SocialMediaList/>
            <div className="footer__copyright">
                <p className="footer__develop">designed & developed <span>CADI</span></p>
                <p className="footer__develop rights"><img className="copyrightIcon" src={ CopyRightIcon } alt="copyright icon" /> { currentYear() }  All Rights Reserved.</p>
            </div>
         </section>
    );
};

export default Footer;
