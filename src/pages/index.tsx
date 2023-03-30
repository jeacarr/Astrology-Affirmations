import styled from 'styled-components'
import Image from 'next/image'

export default function MainPage() {
  return (
    <>
    <Chart>
      <Image 
        src='/images/StarChart.svg' 
        alt={'Astrology Star Chart'}
        width={100}   
        height={100}
      />
    </Chart>
      <Title>Astrology Affirmations</Title>
    </>
  )
}

const Title = styled.h1 `
   margin: auto;
`;

const Chart = styled.div`
  margin: auto;
  width: 20%;
  height: 20%;
  animation-name: spin;
  animation-duration: 5000ms;
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