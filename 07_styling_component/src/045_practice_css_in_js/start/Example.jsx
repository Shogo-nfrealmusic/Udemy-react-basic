import styled from "styled-components";

const FirstButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: none;
  background-color: pink;
`;

const SecondButton = styled(FirstButton)`
  color: white;
  background-color: red;
`;

const ThirdButton = styled(SecondButton)`
  background: ${(props) => props.dard ? "black" : "green"};
`;

const Example = () => {
  return (
    <>
     <FirstButton>Button1</FirstButton>
     <SecondButton>Button2</SecondButton>
    <ThirdButton dard>Button3</ThirdButton>     
    {/* <ThirdButton >Button3</ThirdButton>      */}

    </>
  );
};

export default Example;
