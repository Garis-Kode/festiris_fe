import styled from "styled-components";

export default function Home() {
  return (
    <Container>
    <LeftPanel>
        <Image src="" alt="Event Ilustration"/>
        <TextWrapper>
            <h1>
                Experience Every Moment
            </h1>
            <p>Find events that inspire, entertain, and connect. From festivals to conferences, it’s all here.</p>
        </TextWrapper>
    </LeftPanel>
    <RightPanel>
        <FormWrapper>
            <Logo src=" " alt="Logo"/>
            <h2>Create Your Account</h2>
            <Form>
            <Input type="text" placeholder="Your first name" />
            <Input type="text" placeholder="Your last name" />
            <Input type="email" placeholder="Your email address" />
            <Input type="password" placeholder="Your password" />
            <GenderWrapper>
                <label>
                    <input type="radio" name="gender" value="male"/>
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female"/>
                    Female
                </label>
            </GenderWrapper>
            <SignUpButton>Sign Up</SignUpButton>
            <GoogleButton>Sign up with Google</GoogleButton>
            </Form>
            <LoginLink>Already have an account? <a href="#">Sign In</a></LoginLink>
        </FormWrapper>
    </RightPanel>
</Container>

  );
}


const Container = styled.div`
    display: flex;
    height: 100vh;
`;


const LeftPanel = styled.div`
  background-color: #6e00ff;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
  margin-bottom: 20px;
`;

const TextWrapper = styled.div`
  text-align: center;
  h1 {
    font-size: 36px;
  }
  p {
    font-size: 18px;
    margin-top: 10px;
  }
`;

const FormWrapper = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const GenderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SignUpButton = styled.button`
  padding: 10px;
  background-color: #6e00ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 15px;
`;

const GoogleButton = styled.button`
  padding: 10px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const LoginLink = styled.p`
  margin-top: 10px;
  a {
    color: #6e00ff;
    text-decoration: none;
  }
`;