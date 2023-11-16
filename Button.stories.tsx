import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { SvgIcon } from "@components/atom/icon/SvgIcon";

const meta: Meta<typeof Button> = {
  title: "Mepublic/atom/button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select", options: ["filled", "outlined"] }
    },
    color: {
      control: { type: "color" }
    },
    // instance: {
    //   control: { type: "select", options: ["write", "setting", "follow", "following", "sponsoring"] }
    // },
    icon: {
      control: "text", // 텍스트 입력으로 아이콘을 받습니다.
      defaultValue: <SvgIcon iconName="close" title="삭제 아이콘" size={24} /> // 기본 아이콘 값 (선택적으로 지정)
    },
    label: {
      control: "input"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: "filled",
    color: "blue",
    label: "글쓰기1"
  }
};

export const BlackFilled: Story = {
  args: {
    variant: "filled",
    color: "black",
    label: "글쓰기2"
  }
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    color: "blue",
    label: "글쓰기1"
  }
};

export const BlackOutlined: Story = {
  args: {
    variant: "outlined",
    color: "black",
    label: "글쓰기2"
  }
};

export const Icon: Story = {
  args: {
    variant: "outlined",
    color: "black",
    label: "설정",
    icon: <SvgIcon iconName="setting" title="설정 아이콘" size={17} />
  }
};

export const Connect: Story = {
  args: {
    connect: "connect"
  }
};

export const Disconnect: Story = {
  args: {
    connect: "disconnect"
  }
};

export const write: Story = {
  args: {
    instance: "write"
  }
};

export const setting: Story = {
  args: {
    instance: "setting",
    icon: <SvgIcon iconName="setting" title="설정 아이콘" size={17} />
  }
};
