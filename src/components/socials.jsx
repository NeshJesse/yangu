// src/components/SocialMediaLinks.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { href: 'https://web.facebook.com/profile.php?id=100089091364174', icon: faFacebookF },
  { href: 'https://twitter.com/itsjessenesh', icon: faTwitter },
  { href: 'https://instagram.com/itsjesse.nehemiah', icon: faInstagram },
  { href: 'https://www.linkedin.com/in/nehemiah-onyango/', icon: faLinkedin },
  { href: 'https://github.com/NeshJesse/',icon: faGithub },
];

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-4 p-4">
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-100 w-20 rounded-full shadow-md hover:bg-gray-200 transition-colors"
          aria-label={link.href}
        >
          <FontAwesomeIcon icon={link.icon} size="2x" className="text-gray-700" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;


