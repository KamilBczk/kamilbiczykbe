import React from 'react'
import behance_white from './behance-white.svg';
import behance_blue from './behance-blue.svg';
import github_white from './github-white.svg';
import github_blue from './github-blue.svg';
import twitter_white from './twitter-white.svg';
import linkedin_white from './linkedin-white.svg';
import instagram_white from './instagram-white.svg';
import arrow_blue from './arrow-blue.svg';
import phone_blue from './phone-blue.svg';
import ping_blue from './ping-blue.svg';
import me_blue from './me-blue.svg';
import mail_blue from './mail-blue.svg';



function Socials(props) {
  let image;
  if (props.icon === "behance-white") {
    image = behance_white; 
  } else if (props.icon === "behance-blue") {
    image = behance_blue;
  } else if (props.icon === "github-white") {
    image = github_white;
  } else if (props.icon === "github-blue") {
    image = github_blue;
  } else if (props.icon === "twitter-white") {
    image = twitter_white;
  } else if (props.icon === "linkedin-white") {
    image = linkedin_white;
  } else if (props.icon === "instagram-white") {
    image = instagram_white;
  } else if (props.icon === "arrow-blue") {
    image = arrow_blue;
  } else if (props.icon === "phone-blue") {
    image = phone_blue;
  } else if (props.icon === "ping-blue") {
    image = ping_blue;
  } else if (props.icon === "me-blue") {
    image = me_blue;
  } else if (props.icon === "mail-blue") {
    image = mail_blue;
  }

  return (
    <img src={image} width={props.width} height={props.height} alt={props.icon} />
  )
}

export default Socials