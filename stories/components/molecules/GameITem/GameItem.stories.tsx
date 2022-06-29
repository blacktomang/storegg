import { Meta } from "@storybook/react";
import GameItem, { GameProps } from "../../../../components/molecules/GameItem";

export default {
  title: 'Components/Atoms/GameItem',
  component: GameItem,
} as Meta;

const Template = (args: GameProps) => <GameItem {...args} />

export const Default = Template.bind({});

Default.args = {
  gameName: 'Super Mechs',
  gameType: 'Desktop',
  image:'/img/Thumbnail-2.png'
}