import React from "react";
import FooterText from './FooterText'
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const facebook = faFacebookSquare as IconProp;
const instagram = faInstagram as IconProp;
const youtube = faYoutube as IconProp;
const twitter = faTwitter as IconProp;
const github = faGithub as IconProp;

const Footer = () => {
  const today = new Date();

  return (
    <footer className=" text-gray-500 mt-16 px-24 2xl:px-96">
      <FontAwesomeIcon className='mr-4 cursor-pointer hover:text-white' icon={facebook} size='2x'/>
      <FontAwesomeIcon className='mr-4 cursor-pointer hover:text-white' icon={instagram} size='2x'/>
      <FontAwesomeIcon className='mr-4 cursor-pointer hover:text-white' icon={youtube} size='2x'/>
      <FontAwesomeIcon className='mr-4 cursor-pointer hover:text-white' icon={twitter} size='2x'/>
      <FooterText/>
      <a  href="https://github.com/MuriloSalvi" target="_blank" rel="noreferrer">
        <p className='mt-8 text-lg text-white cursor-pointer'>
          <FontAwesomeIcon icon={github} size='lg'/> Murilo d Salvi 1996 -{" "}
          {today.getFullYear()}{" "}
        </p>
      </a>
    </footer>
  );
};

export default Footer;
