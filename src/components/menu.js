import styled from "styled-components";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;

  div {
    display: flex;
    justify-content: flex-start;
    
  }
  div h2 {
    margin-left: -70px;
  }
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 300px) {
      max-width: 127px;
    }
    .text {
     
    }
  }
`;

export default function Menu() {
  return (
    <StyledMenu>
      <div>
        <Logo />
        <h2 className="text">GodoTUBE</h2>
      </div>
    </StyledMenu>
  );
}

function Logo() {
  return (
    <svg
      className="logo"
      viewBox="0 0 454 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M120.721 14.1896C119.307 8.94024 115.168 4.80134 109.919 3.38805C100.329 0.763382 61.9683 0.763382 61.9683 0.763382C61.9683 0.763382 23.6077 0.763382 14.0176 3.2871C8.86917 4.70039 4.62931 8.94024 3.21603 14.1896C0.692307 23.7797 0.692307 43.6667 0.692307 43.6667C0.692307 43.6667 0.692307 63.6546 3.21603 73.1438C4.62931 78.3931 8.76822 82.532 14.0176 83.9453C23.7087 86.57 61.9683 86.57 61.9683 86.57C61.9683 86.57 100.329 86.57 109.919 84.0462C115.168 82.633 119.307 78.4941 120.721 73.2447C123.244 63.6546 123.244 43.7676 123.244 43.7676C123.244 43.7676 123.345 23.7797 120.721 14.1896V14.1896Z"
        fill="#FF0000"
      />
      <path
        d="M49.7535 25.294V62.0394L81.6533 43.6667L49.7535 25.294Z"
        fill="white"
      />
    </svg>
  );
}
