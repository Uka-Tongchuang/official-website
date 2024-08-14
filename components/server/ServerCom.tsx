"use client";
import React from "react";
import Image from "next/image";
import server from "@/public/renshi/server.png";
function ServerCom() {
  return (
    <div className="w-full h-[480px]">
      <div className="w-[80%] m-auto xl:flex xl:justify-around xl:items-center">
        <div className="xl:w-[460px] xl:h-[340px] xl:p-4 xl:mt-[58px]">
          <Image className="w-full h-full" src={server} alt="" />
        </div>
        <div>
          <h3 className="xl:text-[32px] xl:font-bold xl:mb-[50px]">服务优势</h3>
          <p
            className="xl:w-[420px] xl:h-[168px] xl:text-md"
            style={{ color: "#666666" }}
          >
            专业化的顾问团队确保对企业人力资源需求的精确把握和高效执行同时，我们的数字化管理平台使得人事数据处理和信息流通更加迅速和透明。此外，今创人力的标准化服务流程减少操作误差，提高服务质量的统一性。我们提供的多元化解决方案能够满足各种复杂和多样化的企业需求，帮助企业在激烈的市场竞争中保持灵活性和创新力。这一系列综合措施共同促使我们人事管理服务的核心竞争力，让我们能够为您提供卓越的人力资源支持。
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServerCom;
