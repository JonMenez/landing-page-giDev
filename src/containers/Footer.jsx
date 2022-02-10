import * as React    from 'react';
import { motion }    from 'framer-motion'
import NavbarFooter  from '@components/NavbarFooter'
import SocialMedia   from '@components/SocialMedia';
import CopyRightIcon from "@icons/copyRight.svg"
import "@styles/navBar.scss"
import '@styles/footer.scss'

const pageVariant = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: .5, delay: .3 }
      },
      exit: {
        y: 100,
        opacity: 0
      }
    }

const Footer = () => {

   const currentYear = () => new Date().getFullYear();


  return (
         <motion.section 
           className='footer'
           variants={pageVariant}
           initial='hidden'
           animate='visible'
           exit='exit'
         >
             <div className="footer__about">
                <h4 className='footer__title'>Hey!</h4>
                <p className='footer__text'>My name is <span className="footer__name">Joan</span> and like swimming, otherwise I like programming webs & apps for everyone!</p>
             </div>
            <NavbarFooter />
            <SocialMedia />
            <div className="footer__copyright">
                <p className="footer__rights"><img className="footer__copyrightIcon" src={ CopyRightIcon } alt="copyright icon" /> { currentYear() }  All Rights Reserved.</p>
            </div>
         </motion.section>
    );
};

export default Footer;
