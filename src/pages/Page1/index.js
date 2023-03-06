import { FaFacebookSquare, FaInstagram, FaSnapchat, FaPinterestP, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { GoBriefcase, GoHome, GoMail, GoDeviceMobile, GoGlobe, GoCalendar, GoBook } from "react-icons/go";
import { Container, Box1, Br, BoxItem, Section, Footer } from './styles';
import Imagem1 from '../../assets/images/imagem1.jpg';
import { BsAsterisk } from "react-icons/bs";

export function Page1() {
  return (
    <>
      <Container>
        
        <Section className="stat">
          <div className="image-header">
            <img src={Imagem1} alt="" />
            <h2>Duelte Glebchen</h2>
          </div>
          <p><GoBriefcase size={22} />Programador</p>
          <p><GoHome size={22} />Brasília, DF</p>
          <p><GoMail size={22} />rh.duelte@hotmail.com</p>
          <p><GoDeviceMobile size={22} />(61) 98211-3281</p>
          <Br />
          <hr />
          <Br />
          <strong><p><BsAsterisk />Skills</p></strong>
          <p className='p1'>Adobe Photoshop</p>
          <Box1><BoxItem percent={90}>90%</BoxItem></Box1>
          <p className='p1'>Photography</p>
          <Box1><BoxItem percent={80}>80%</BoxItem></Box1>
          <p className='p1'>Illustrator</p>
          <Box1><BoxItem percent={75}>75%</BoxItem></Box1>
          <p className='p1'>Media</p>
          <Box1><BoxItem percent={50}>50%</BoxItem></Box1>
          <Br />
          <strong><p><GoGlobe />Languages</p></strong>
          <p className='p1'>English</p>
          <Box1><BoxItem percent={100}></BoxItem></Box1>
          <p className='p1'>Spanish</p>
          <Box1><BoxItem percent={50}></BoxItem></Box1>
          <p className='p1'>German</p>
          <Box1><BoxItem percent={25}></BoxItem></Box1>
        </Section>

        <div>
          <Section>
            <h1><GoBriefcase size={40} />Work Experience</h1>
            <Br />
            <h2>Front End Developer / w3schools.com</h2>
            <p><GoCalendar size={22} />Jan 2015 - <mark>Current</mark></p>
            <div>
              Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
            </div>
            <br />
            <hr />
            <Br />
            <h2>Web Developer / something.com</h2>
            <p><GoCalendar size={22} />Mar 2012 - Dec 2014</p>
            <div>
              Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
            </div>
            <br />
            <hr />
            <Br />
            <h2>Graphic Designer / designsomething.com</h2>
            <p><GoCalendar size={22} />Jun 2010 - Mar 2012</p>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </Section>

          <Section>
            <h1><GoBook size={40} />Education</h1>
            <Br />
            <h2>W3Schools.com</h2>
            <p><GoCalendar size={22} />Forever</p>
            <div>
              Web Development! All I need to know in one place
            </div>
            <br />
            <hr />
            <Br />
            <h2>London Business School</h2>
            <p><GoCalendar size={22} />2013 - 2015</p>
            <div>
              Master Degree
            </div>
            <br />
            <hr />
            <Br />
            <h2>School of Coding</h2>
            <p><GoCalendar size={22} />2010 - 2013</p>
            <div>
              Bachelor Degree
            </div>
          </Section>
        </div>

      </Container>
      <Footer>
        <p>Find me on social media.</p>
        <FaFacebookSquare color="white" size={16} />
        <FaInstagram color="white" size={16} />
        <FaSnapchat color="white" size={16} />
        <FaPinterestP color="white" size={16} />
        <FaTwitter color="white" size={16} />
        <FaLinkedinIn color="white" size={16} />
        <p className="p1">Powered by <u> w3.css</u></p>
      </Footer>
    </>
  );
}