import styled from "styled-components"

const Button = styled.button`
  padding: 32px;
  background-color: #75bda7ff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin: 4px;
  border: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #45a049;
    padding: 32px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
`;

export default function CustomButton({text, func}) {
    return (
        <Button onClick={func}>
            {text}
        </Button>
    )
}