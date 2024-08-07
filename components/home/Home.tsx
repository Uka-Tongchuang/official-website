"use client";
import "./index.css";
import React from "react";
import img from "../../public/bg/about.png"
import Image from "next/image";
function Home() {
  return (
    <div className="home_box">
      <div className="imgbanner">
        <h1>关于今创，了解今创</h1>
        <h3>About Our Company, Learn About Jinchuang</h3>
      </div>

      <div className="titlebanner">
        <div className="titlecontent">数字信息盒子</div>
      </div>

      <div className="aboutus">
        <div className="aboutus_banner_box">
          <div className="aboutus_title">关于公司</div>
          <div className="aboutus_content">
            <div className="img">
              <Image src={img} alt="" />
            </div>
            <div className="text">
              <h3>成都今创人力资源有限公司</h3>
              <p>
                “今创人力”，是一家致力于全球为企业客户提供全面人力资源服务解决方案的专业公司
                ，业务范围涵盖，人事管理、劳务派遣、岗位外包、灵活用工等在内的一站式人力资源综合解决方案。
                旗下分支机构和服务网点覆盖全国各地等一二线主要地市；与国内多家行业领军企业深入合作，拥有四个地市人力资源平台经济产业园运营权；
                成都今创人力资源有限公司是万古人力旗下独立运营的人力公司,是一家综合性人力资源服务集团。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="product_services">
        <div className="product_banner_box">
          <div className="product_title">业务系统，产品服务</div>
          <div className="cartbox">
            <div className="cart"></div>
            <div className="cart"></div>
            <div className="cart"></div>
            <div className="cart"></div>
            <div className="cart"></div>
            <div className="cart"></div>
            <div className="cart"></div>
            <div className="cart"></div>
          </div>
        </div>
      </div>

      <div className="cooperate_box">

      </div>
    </div>
  );
}

export default Home;
