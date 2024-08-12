"use client";
import { useState } from "react";

export default function Footer(): JSX.Element {
  // 定义一个状态来控制下拉菜单的展开和收起
  const [isExpanded, setIsExpanded] = useState(false);

  // 切换下拉菜单的展开和收起状态
  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-screen h-auto">
      {/* 移动和平板端 */}
      <div className="aa">
        {/* 将 FooterMenu 组件集成到 .aa 盒子中 */}
        <div className="footer-menu-container">
          {/* 下拉菜单内容 */}
          <div className="flex flex-col w-full">
            <div className="bg-white flex flex-col items-start w-full">
              {/* 菜单项 */}
              <div className="w-full">
                <button
                  onClick={toggleDropdown}
                  className="inline-flex w-full items-center h-full px-4 py-4 bg-azul/50 text-white"
                >
                  产品服务
                </button>
                {/* 使用 isExpanded 状态控制子菜单的显示和隐藏 */}
                <div
                  className={`flex flex-col border-y w-full border-gray-200 bg-white transition-max-height duration-300 ease-in-out overflow-hidden ${
                    isExpanded ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <a
                    href="/products/personnel-dispatch"
                    id="personnel"
                    className="w-full flex px-4 py-4 bg-white text-black"
                  >
                    人事派遣
                  </a>
                  <a
                    href="/products/labor-dispatch"
                    id="labor"
                    className="w-full flex px-4 py-4 bg-white text-black"
                  >
                    劳务派遣
                  </a>
                  <a
                    href="/products/position-outsource"
                    id="position"
                    className="w-full flex px-4 py-4 bg-white text-black"
                  >
                    岗位外包
                  </a>
                  <a
                    href="/products/business-outsource"
                    id="business"
                    className="w-full flex px-4 py-4 bg-white text-black"
                  >
                    业务外包
                  </a>
                  <a
                    href="/products/recruitment"
                    id="recruitment"
                    className="w-full flex px-4 py-4 bg-white text-black"
                  >
                    招聘流程外包
                  </a>
                  <a
                    href="/products/flexible-outsource"
                    id="flexible"
                    className="w-full flex px-4 py-4 bg-white text-black"
                  >
                    灵活用工解决方案
                  </a>
                </div>
              </div>

              {/* 其他菜单项 */}
              <div className="w-full">
                <a
                  href="/customer-case"
                  id="customerCase"
                  className="w-full flex px-4 py-4 bg-white text-black"
                >
                  客户案例
                </a>
                <a
                  href="/news"
                  id="news"
                  className="w-full flex px-4 py-4 bg-white text-black"
                >
                  公司新闻
                </a>
                <a
                  href="/about-us"
                  id="aboutUs"
                  className="w-full flex px-4 py-4 bg-white text-black"
                >
                  关于今创
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2>联系我们</h2>
          <div></div>
          {/* 图标 */}
          <div></div>
          {/* 底部信息 */}
          <div>
            <p>2024今创人力有限公司</p>
            <p>The company was established in 2024</p>
          </div>
        </div>
      </div>
      <div className="hidden">pc</div>
    </div>
  );
}
