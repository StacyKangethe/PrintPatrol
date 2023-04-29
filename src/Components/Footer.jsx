import styled from "styled-components";
import { mobile } from "./responsive";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoomIcon from '@mui/icons-material/Room';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>PRINT PATROL.</Logo>
          <Desc>
          We are a Nairobi based screen printing company. Here's our tribute to 4/20 as we join the global community of herbvocates, enthusiasts, planters, and consumers in marking this dope day.
          </Desc>
          
        </Left>
        <Center style={{padding:"40px"}} justifyContent="center">
            <Title>CONTACT DETAILS</Title>
            <ContactItem justifyContent="center">
                <RoomIcon style={{marginLeft:"40px"}}/> Thome, Nairobi
            </ContactItem>
            <ContactItem justifyContent="center">
                <PhoneIcon style={{marginLeft:"40px"}}/> +254717657658
            </ContactItem>
            <ContactItem justifyContent="center">
                <MailOutlineIcon style={{marginLeft:"40px"}} /> printsweknow@gmail.com
            </ContactItem>
       
          
        </Center>
        <Right>
        <Title>FIND US ON:</Title>
            <SocialContainer  justifyContent="center" style={{marginLeft:"40px"}}>
                <SocialIcon color="3B5999">
                    <WhatsAppIcon />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <MailOutlineIcon />
                </SocialIcon>
          </SocialContainer>
        </Right>
      </Container>
    );
  };
  
  export default Footer;