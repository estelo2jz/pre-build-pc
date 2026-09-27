import React, { useState } from "react";
import { Data } from "./SalesData";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-top: 1.5rem;
  background: transparent;
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37),
              0 0 15px rgba(56, 189, 248, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(56, 189, 248, 0.4);
    box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.45),
                0 0 25px rgba(56, 189, 248, 0.15);
  }
`;

const Wrap = styled.div`
  background-color: transparent;
  color: #f8fafc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid rgba(56, 189, 248, 0.15);
  transition: background-color 0.3s ease;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(56, 189, 248, 0.08);
  }

  h1 {
    padding: 20px;
    font-size: clamp(14px, 2.2vw, 17px);
    font-weight: 600;
    text-align: left;
    margin: 0;
    letter-spacing: 0.02em;
  }

  span {
    margin-right: 1.5rem;
    display: flex;
    align-items: center;
    color: #38bdf8;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover span {
    transform: scale(1.15);
  }
`;

const Dropdown = styled.div`
  background-color: rgba(30, 41, 59, 0.6);
  color: #cbd5e1;
  width: 100%;
  max-height: ${props => (props.$isOpen ? "300px" : "0")};
  opacity: ${props => (props.$isOpen ? "1" : "0")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid rgba(56, 189, 248, 0.15);
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s ease-in-out,
              padding 0.3s ease;
  padding: ${props => (props.$isOpen ? "20px 24px" : "0 24px")};

  p {
    font-size: clamp(12px, 2vw, 15px);
    line-height: 1.6;
    margin: 0;
  }
`;

const AccordionSales = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#38bdf8", size: "22px" }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            const isOpen = clicked === index;
            return (
              <React.Fragment key={item.id || index}>
                <Wrap onClick={() => toggle(index)}>
                  <h1>{item.question}</h1>
                  <span>{isOpen ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                <Dropdown $isOpen={isOpen}>
                  <p>{item.answer}</p>
                </Dropdown>
              </React.Fragment>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default AccordionSales;