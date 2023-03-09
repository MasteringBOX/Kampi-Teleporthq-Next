import styled from 'styled-components';
import dynamic from "next/dynamic";
import styles from './SideBar.module.css';
const BookingForm = dynamic(() => import("../components/BookingForm"), {
    loading: () => <div className={styles.loader}>Loading...</div>,
})

export const Overlay = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

const OverlayAnimation = styled(Overlay)`
  z-index: 100;
  transition: all 0.4s ease-in-out;
  &.active {
    visibility: visible;
    opacity: 0.2;
  }
`;

const Wrapper = styled.div`
  display: flex;
  z-index: 120;
  right:-100%;
  position:fixed;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  transition: all 0.4s ease-in-out;
  overflow-y: scroll;
  &.active {
    opacity: 1;
    right: 0;
  }
`;
export const SideBar = ({sidebar, onCloseSidebar}) => {

    return(
        <>
            <OverlayAnimation className={`${sidebar && "active"} overlay`} />
            <Wrapper className={`${sidebar && "active"} wrapper`}>
                {sidebar && <BookingForm onCloseSidebar={onCloseSidebar}></BookingForm>}
            </Wrapper>
        </>
    )
}
