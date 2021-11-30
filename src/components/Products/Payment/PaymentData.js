import React, { useState } from "react";
import { Data } from "./PaymentDataOptions";
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
  /* margin-top: 20px; */
  background: transparent;
  `;

const Container = styled.div`
  width: 100%;
  background: #f0f0f0;
  position: relative;
  top: 30%;
  border: 1px solid #d9d9d9;
  /* box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3); */
  `;

const Wrap = styled.div`
  /* border-bottom: 1px solid #d9d9d9; */
  background-color: #fff;
  color: #333;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  padding: 5px 0px;
  svg {
    color: rgba(194, 91, 233, 0.2) !important;
  }
  p {
    padding: 10px 10px;
    font-size: clamp(13px, 2.5vw, 15px);
    text-align: left;
    width: 120px;
  }
  span {
    margin-right: 1.5rem;
    color: red;
  }
  img {
    width: 15%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  `;

const Dropdown = styled.div`
  background-color: #fafafa;
  border-top: 1px solid #d9d9d9;
  /* border-bottom: 1px solid #d9d9d9; */
  color: #333;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  /* p {
    font-size: clamp(10px, 2.5vw, 15px);
    padding: 0px 20px;
  } */
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
                  <p>{item.paymentOption}</p>
                  <img src={item.logo} />
                  {/* <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span> */}
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
