import React from "react";
import EssentialsProducts from "./EssentialsProducts";
import "./styles/Specs.scss";

export default function Colors({
  cpu,
  gpu,
  ram,
  memory,
  cpuCooler,
  fans,
  pcCase,
  power,
  motherboard,
  wifi,
  windows,
  warranty,
  essentialsOne,
  essentialsTwo,
  essentialsThree,
  essentialsFour,
  essentialsFive,
}) {
  return (
    <div className="specs">
      <div className="spec__header">
        <p>INCLUDES</p>
      </div>
      <div className="specs__specs-container">
        <div className="specs__left">
          <div className="specs__items">
            {cpu.map((item, index) => (
              <div className="specs__item">
                <div className="specs__item-img">
                  <img src={item.CPUimg} alt="" />
                </div>
                <div className="specs__item-name-container">
                  <div className="specs__item-name">
                    <p>{item.CPUname}</p>
                  </div>
                  <div className="specs__item-price">
                    <p>{item.CPUprice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="specs__items">
            {gpu.map((item2, index) => (
              <div className="specs__item">
                <div className="specs__item-img">
                  <img src={item2.GPUimg} alt="" />
                </div>
                <div className="specs__item-name-container">
                  <div className="specs__item-name">
                    <p>{item2.GPUname}</p>
                  </div>
                  <div className="specs__item-price">
                    <p>{item2.GPUprice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="specs__items">
            {ram.map((item3, index) => (
              <div className="specs__item">
                <div className="specs__item-img">
                  <img src={item3.RAMimg} alt="" />
                </div>
                <div className="specs__item-name-container">
                  <div className="specs__item-name">
                    <p>{item3.RAMname}</p>
                  </div>
                  <div className="specs__item-price">
                    <p>{item3.RAMprice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="specs__items">
            {memory.map((item, index) => (
              <div className="specs__item">
                <div className="specs__item-img">
                  <img src={item.MEMORYimg} alt="" />
                </div>
                <div className="specs__item-name-container">
                  <div className="specs__item-name">
                    <p>{item.MEMORYname}</p>
                  </div>
                  <div className="specs__item-price">
                    <p>{item.MEMORYprice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="specs__items">
            {cpuCooler.map((item, index) => (
              <div className="specs__item">
                <div className="specs__item-img">
                  <img src={item.CPUCOOLERimg} alt="" />
                </div>
                <div className="specs__item-name-container">
                  <div className="specs__item-name">
                    <p>{item.CPUCOOLERname}</p>
                  </div>
                  <div className="specs__item-price">
                    <p>{item.CPUCOOLERprice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="specs__items">
            {fans.map((item, index) => (
              <div className="specs__item">
                <div className="specs__item-img">
                  <img src={item.FANSimg} alt="" />
                </div>
                <div className="specs__item-name-container">
                  <div className="specs__item-name">
                    <p>{item.FANSname}</p>
                  </div>
                  <div className="specs__item-price">
                    <p>{item.FANSprice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="specs__right">
          <div className="specs__items">
            {pcCase.map((item, index) => (
              <div className="specs__item">
                <div className="specs__item-img">
                  <img src={item.CASEimg} alt="" />
                </div>
                <div className="specs__item-name-container">
                  <div className="specs__item-name">
                    <p>{item.CASEname}</p>
                  </div>
                  <div className="specs__item-price">
                    <p>{item.CASEprice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="specs__items">
            {power.map((item, index) => (
              <div className="specs__item">
                <div className="specs__item-img">
                  <img src={item.POWERimg} alt="" />
                </div>
                <div className="specs__item-name-container">
                  <div className="specs__item-name">
                    <p>{item.POWERname}</p>
                  </div>
                  <div className="specs__item-price">
                    <p>{item.POWERprice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="specs__items">
            {motherboard.map((item, index) => (
              <div className="specs__item">
                <div className="specs__item-img">
                  <img src={item.MOTHERBOARDimg} alt="" />
                </div>
                <div className="specs__item-name-container">
                  <div className="specs__item-name">
                    <p>{item.MOTHERBOARDname}</p>
                  </div>
                  <div className="specs__item-price">
                    <p>{item.MOTHERBOARDprice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="specs__items">
            {wifi.map((item, index) => (
              <div className="specs__item">
                <div className="specs__item-img">
                  <img src={item.WIFIimg} alt="" />
                </div>
                <div className="specs__item-name-container">
                  <div className="specs__item-name">
                    <p>{item.WIFIname}</p>
                  </div>
                  <div className="specs__item-price">
                    <p>{item.WIFIprice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="specs__items">
            {windows.map((item, index) => (
              <div className="specs__item">
                <div className="specs__item-img">
                  <img src={item.WINDOWSimg} alt="" />
                </div>
                <div className="specs__item-name-container">
                  <div className="specs__item-name">
                    <p>{item.WINDOWSname}</p>
                  </div>
                  <div className="specs__item-price">
                    <p>{item.WINDOWSprice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="specs__items">
            {warranty.map((item, index) => (
              <div className="specs__item">
                <div className="specs__item-img">
                  <img src={item.WARRANTYimg} alt="" />
                </div>
                <div className="specs__item-name-container">
                  <div className="specs__item-name">
                    <p>{item.WARRANTYname}</p>
                  </div>
                  <div className="specs__item-price">
                    <p>{item.WARRANTYprice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="specs__essentials">
        <div className="specs__essentials-heading">
          <p>RECOMMENDED ESSENTIALS</p>
        </div>
        <EssentialsProducts />
      </div>
    </div>
  );
}
