import React from "react";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";

const HightlightTab = () => {
  return {
    key: "Hightlights",
    label: `Hightlights`,
    children: (
      <div className="flex flex-row flex-nowrap overflow-x-auto">
        <div className="w-[300px] flex-shrink-0">
          Test 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio possimus error alias, perspiciatis
          dolor odio nisi amet pariatur culpa dignissimos, voluptatem cumque ratione.
        </div>
        <div className="w-[300px]">Test 2</div>
        <div className="w-[300px]">Test 3</div>
      </div>
    ),
    icon: <AppleOutlined />,
  };
};

const PromoTab = () => {
  const id = 2;
  return {
    key: `Promos`,
    label: `Promos`,
    children: `Promos`,
    icon: <AppleOutlined />,
  };
};

const items = [HightlightTab(), PromoTab()];

const PromoTabs = () => <Tabs defaultActiveKey="1" items={items} />;

export default PromoTabs;
