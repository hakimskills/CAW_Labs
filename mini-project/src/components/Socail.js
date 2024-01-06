import './Socail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons'
const Socail=()=>{
    return (
        <footer>
            <ul>
            <li><a href='https://www.facebook.com/profile.php?id=100011061064163&locale=fr_FR'><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href='https://github.com/hakimskills/CAW_Labs'><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href='https://www.instagram.com/hakim_rebbouh/'><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
           


        </footer>
    )
}
export default Socail;