import styled from 'styled-components';

export const SidebarContent = styled.div`
  background-color: #312F4F;
  color: #ffffff;
  padding: 30px;
  transition: ease-in-out, 1s;

  &.collapsed{
    /* flex-basis: 6%; */
    

    .sidebar-header{
      justify-content: center;
    }

    a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    padding: 15px 15px !important;
    border-radius: 15px;
    border-bottom: none;
    svg{
      margin-right: 0px !important;

    }
    .sidebar-item-text{
      display: none;
    }

    &:hover {
      color: rgba(255, 255, 255, 0.5);
      text-decoration: none;
      background-color: #000;
      svg{
        /* color: rgba(255,255,255, 0.8) */
      }
    }
  }
  }


  a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #ffffff;
    padding: 10px 15px !important;
    border-radius: 15px;
    border-bottom: none;
    font-size: 16px;
    /* border-bottom: 1px solid #ffffff; */
    svg{
      margin-right: 10px;
    }
    &:hover {
      color: rgba(255, 255, 255, 0.5);
      text-decoration: none;
      background-color: rgba(0, 0, 0, 0.6);
      svg{
        color: rgba(255,255,255, 0.8)
      }
    }
  }
`;
export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;



  button {
    background: none;
    border: none;
    outline: none;

    svg {
      color: #fff;
    }
  }

  span{
    font-size: 14px;
    display: flex;
    label{
      margin-right: 5px;
    }
  }
`;
