import React from "react";
import dayjs from "dayjs";
import { DatePicker, Space } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;

const onRangeChange = (dates, dateStrings) => {
  if (dates) {
    console.log("From: ", dates[0], ", to: ", dates[1]);
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
  } else {
    console.log("Clear");
  }
};

const rangePresets = [
  {
    label: "Last 7 Days",
    value: [dayjs().add(-7, "d"), dayjs()],
  },
  {
    label: "Last 14 Days",
    value: [dayjs().add(-14, "d"), dayjs()],
  },
  {
    label: "Last 30 Days",
    value: [dayjs().add(-30, "d"), dayjs()],
  },
  {
    label: "Last 90 Days",
    value: [dayjs().add(-90, "d"), dayjs()],
  },
];

const CustomDatePicker = () => (
  <Space direction="vertical" size={12}>
    <RangePicker prevIcon={<CalendarOutlined />} presets={rangePresets} onChange={onRangeChange} />
  </Space>
);

export default CustomDatePicker;
