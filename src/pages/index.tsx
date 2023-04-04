import styled from 'styled-components'
import Image from 'next/image'

export default function MainPage() {
  return (
    <>
      <Container>
      `<Chart>
          <Image 
            src='/images/StarChart.svg' 
            alt={'Astrology Star Chart'}
            width={200}   
            height={200}
          />
        </Chart>
        <Title>Astrology Affirmations</Title>
      </Container>
    </>
  )
}
const Container = styled.div `
  width: 300px;
  height: 300px;
  position: relative;
  margin: auto;
`;

const Title = styled.h1 `
  /* display: block;
   margin: auto;
   width: fit-content; */
   width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
`;

const Chart = styled.div`

  /* margin: auto; */
  width: fit-content;
  height: fit-content;
  animation-name: spin;
  animation-duration: 10000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 

  /* animation: spin infinite 20s linear; */
  @keyframes spin {
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
}
`;