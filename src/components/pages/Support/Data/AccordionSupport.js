import React, { useState } from "react";
import { Data } from "./SupportData";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  margin-top: 20px;
  background: transparent;
  /* background-color: #f0f0f0; */
  /* padding: 30px 120px 30px 30px; */
  /* background: #fff; */
  
  `;

const Container = styled.div`
  width: 100%;
  position: relative;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  
`;

const Wrap = styled.div`
  border-bottom: 1px solid rgba(194, 91, 233, 0.2);
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 20px 10px;
    font-size: clamp(15px, 2.5vw, 18px);
    text-align: left;
  }
  svg {
    color: rgba(194, 91, 233, 0.2) !important;
  }
  span {
    margin-right: 1.5rem;
    color: red !important;
  }
  `;

const Dropdown = styled.div`
  background-color: #fff;
  color: #333;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: clamp(10px, 2.5vw, 15px);
    padding: 0px 20px;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
