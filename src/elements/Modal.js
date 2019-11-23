import React, { Component } from "react";
import styled from 'styled-components';
import { Portal } from 'utilities';
import Icon from './Icon';
import { Card } from './Cards';

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ModalCard = styled(Card)`
  position: relative;
  z-index: 10;
  min-width: 320px;
  margin-bottom: 100px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 10px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;

class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon name="close"/>
              </CloseButton>
              <div>{children}</div>
            </ModalCard>
            <Background onClick={toggle}/>
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

export default Modal;