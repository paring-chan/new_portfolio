import styled from "styled-components";
import tw from 'twin.macro';

const Container = styled.div`
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tw`md:px-24 py-10 px-4`}
  flex-direction: column;
  color: white;
`

const Content = styled.div`
  ${tw`flex-col md:flex-row flex`}
`

export default function Footer() {
    return (
        <Container>
            <Content className='flex justify-around sm:gap-96 gap-5' style={{ alignItems: 'center' }}>
                <div />
                <div>
                    &copy; {new Date().getFullYear()} STORM All rights reserved.
                </div>
                <div>
                    사업자번호 : 799-60-00477
                </div>
            </Content>
        </Container>
    )
}
