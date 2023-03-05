import {Container, Start, Box1, Br, Box_item1, Box_item2, Box_item3, Box_item4, Box_item5, Box_item6, Box_item7, Quite, End, Footer} from './styles';
import Imagem1 from './Images/imagem1.jpg';
import { GoBriefcase, GoHome, GoMail, GoDeviceMobile, GoGlobe, GoCalendar, GoBook } from "react-icons/go";
import { FaFacebookSquare, FaInstagram, FaSnapchat, FaPinterestP, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsAsterisk } from "react-icons/bs";

export function Page1 () {
    return (
        <>
        <Container>
            <Start>
                <div>                    
                    <img src={Imagem1} alt=""></img>
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
                <Box1><Box_item1>90%</Box_item1></Box1>
                <p className='p1'>Photography</p>
                <Box1><Box_item2>80%</Box_item2></Box1>
                <p className='p1'>Illustrator</p>
                <Box1><Box_item3>75%</Box_item3></Box1>
                <p className='p1'>Media</p>
                <Box1><Box_item4>50%</Box_item4></Box1>
                <Br/>
                <strong><p><GoGlobe />Languages</p></strong>
                <p className='p1'>English</p>
                <Box1><Box_item5></Box_item5></Box1>
                <p className='p1'>Spanish</p>
                <Box1><Box_item6></Box_item6></Box1>
                <p className='p1'>German</p>
                <Box1><Box_item7></Box_item7></Box1>
            </Start>

            <div className='main'>
                <Quite>
                    <h1><GoBriefcase size={40}/>Work Experience</h1>
                    <Br/>
                    <h2>Front End Developer / w3schools.com</h2>
                    <p><GoCalendar size={22} />Jan 2015 - <mark>Current</mark></p>
                    <div>
                        Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
                    </div>
                    <br/>
                    <hr/>
                    <Br/>
                    <h2>Web Developer / something.com</h2>
                    <p><GoCalendar size={22} />Mar 2012 - Dec 2014</p>
                    <div>
                        Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
                    </div>
                    <br/>
                    <hr/>
                    <Br/>
                    <h2>Graphic Designer / designsomething.com</h2>
                    <p><GoCalendar size={22} />Jun 2010 - Mar 2012</p>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <br/>
                </Quite>

                <End>
                    <h1><GoBook size={40}/>Education</h1>
                    <Br/>
                    <h2>W3Schools.com</h2>
                    <p><GoCalendar size={22} />Forever</p>
                    <div>
                        Web Development! All I need to know in one place
                    </div>
                    <br/>
                    <hr/>
                    <Br/>
                    <h2>London Business School</h2>
                    <p><GoCalendar size={22} />2013 - 2015</p>
                    <div>
                        Master Degree
                    </div>
                    <br/>
                    <hr/>
                    <Br/>
                    <h2>School of Coding</h2>
                    <p><GoCalendar size={22} />2010 - 2013</p>
                    <div>
                        Bachelor Degree
                    </div>
                    <br/>
                </End>
            </div>


        </Container>
        <Footer>
            <p>Find me on social media.</p>
            <FaFacebookSquare color= "white" size={16} />
            <FaInstagram color= "white" size={16} />
            <FaSnapchat color= "white" size={16} />
            <FaPinterestP color= "white" size={16} />
            <FaTwitter color= "white" size={16} />
            <FaLinkedinIn color= "white" size={16} />
            <p className="p1">Powered by <u> w3.css</u></p>
        </Footer>
        </>
    );
}