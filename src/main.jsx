import React from "react";
import title1 from "./phts/АКТИВИРУЙ ИММУНИТЕТ.png" ;
import five from "./phts/Всего пять секунд в день помогут укрепить иммунитет и повысить защитные силы организма.png"
import nooHelp from "./phts/NOOTRIS ПОМОГАЕТ.png"
import yourOrg from "./phts/Вашему организму во время пандемии и сезонных простуд.png"
import ginger from "./phts/ginger.png"
import nootris from "./phts/nootris (2).png"
import lemon from "./phts/Lemon.png"
import title2 from "./phts/title2.png"
import ginger2 from "./phts/ginger.png"
import imb from "./phts/Содержит имбирь.png"
import rect from "./phts/Rectangle 3.png"
import sale1 from  "./phts/750₽.png"
import sale2 from "./phts/690₽.png"
import free from "./phts/Бесплатная доставка.png"
import specImg from "./phts/Специальная цена.png"
import virus from "./phts/vorus.png"
import virusText from "./phts/Нейтрализует вирусы.png"
function Main(){
    return(
        <div>
            <section className="sect1">
                <div className="textsDiv">
                    <img src={title1} alt="" className="active" />
                    <img src={five} alt="" className="fiveSecond" />
                    <div className="littleTextDiv">
                    <img src={nooHelp} alt="" className="nooHelp" />
                        <img src={yourOrg} alt="" className="yourOrg" />
                    </div>
                </div>
                <div className="imagesDiv">
                    <img src={ginger} alt="" className="ginger" />
                    <img src={nootris} alt="" className="nootris" />
                    <img src={lemon} alt="" className="lemon" />
                </div>
            </section>
        
          <section className="sect2">
          <div className="sect2Title">
              <img src={title2} alt="" className="title2" />
          </div>
          <div className="imgMenu">
              <div className="gingerDiv">
                  <img src={ginger2} alt="" className="ginger2" />
                  <img src={imb} alt="" className="imb" />
              </div>
              <div className="nootDiv">
                  
              <div className="saleDiv">
                  <img src={rect} alt="" className="rect" />
                  <img src={sale1} alt="" className="sale1" />
                  <img src={sale2} alt="" className="sale2" />
              </div>
                 <img src={nootris}alt="" className="nott" />
                 <div className="specDiv">
                      <img src={free} alt="" className="free" />
                      <img src={specImg} alt="" className="specImg" />
                 </div>
              </div>
              <div className="virusDiv">
                  <img src={virus} alt="" className="virus" />
                  <img src={virusText} alt="" className="virusText" />
              </div>
          </div>
          <div className="btnDiv">
              <button >Оформить заказ!</button>
          </div>
      </section>
    </div>
    )
}

export default Main