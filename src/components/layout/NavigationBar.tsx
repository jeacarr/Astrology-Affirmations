import { useRouter } from "next/router"
import Image from 'next/image'
import styled from "styled-components";

export const Navigation = () => {
  const router = useRouter();
    return (
        <Bar>
          <Image 
            src={"/images/logo.svg"} 
            alt={"Crystal Ball Logo"}        
            width={75}
            height={75}  
            style={{margin: "5px"}}  
          />
        <NavigationList>
          <li style={{float:"left"}}>
            <Nav onClick={() => router.push("/")}>Tarot Reading</Nav>
          </li>
          <li style={{float:"left"}}>
            <Nav onClick={() => router.push("/card-reading")}>Daily Horascope</Nav>
          </li>
        </NavigationList>
      </Bar>
    )
}

const Bar = styled.nav`
  background-color: #10133c;
  border-radius:"20px"; 
  height: auto;
`;

const NavigationList = styled.ul`
  
  list-style-type: none;
`;

const Nav = styled.a`
  color: white;
  font-size: 20px;
`;