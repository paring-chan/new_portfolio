import styled from "styled-components";
import tw from 'twin.macro';

const Container = styled.div`
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tw`md:px-24 py-10 px-4`}
  flex-direction: column;
`

const Content = styled.div`
  ${tw`flex-col md:flex-row flex`}
`

export default function Footer() {
    return (
        <Container>
            <Content className='flex justify-center' style={{ alignItems: 'center' }}>
                <div>
                    &copy; {new Date().getFullYear()} STORM All rights reserved.
                </div>
            </Content>
        </Container>
    )
}
