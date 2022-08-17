import styled from "styled-components";
import { Facebook , Instagram , Twitter ,Pinterest, Room, Phone, MailOutline } from "@material-ui/icons";
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}

`;

const Left = styled.div`
flex: 1;
display: flex;
padding:20px;
flex-direction: column;
`;

const Logo = styled.h1`
`;

const Desc = styled.p`
margin: 20px 0 ;

`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius: 50%;
color:white;
background-color: #${props=>props.color};
margin-right: 20px;
display:flex;
justify-content: center;
align-items:center;

`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
${mobile({ display: "none"})}

`;

const Title = styled.h3`
Margin-bottom: 30px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom:5px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
${mobile({ backgroundColor: "#fff8f8"})}

`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items:center;
`
const Payment = styled.img`
width: 50%
`



const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          There are many variations of passages if Lorem Ipsum available, nut
          the majority have suffered. Lorem
        </Desc>
        <SocialContainer>
          <SocialIcon  color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="E60023">
          <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
          <Title>Useful Links</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>About</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Your Collection</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>Whislist</ListItem>
              <ListItem>Feedback</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>

          <ContactItem> <Room style={{marginRight:"10px"}}/>  Rudrapur ,  Udham Singh Nagar 263153 Uttarakhand</ContactItem>
          <ContactItem><Phone  style={{marginRight:"10px"}}/>+91 9943275833</ContactItem>
          <ContactItem> <MailOutline  style={{marginRight:"10px"}}/>E-Bazaar@gmail.com</ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
