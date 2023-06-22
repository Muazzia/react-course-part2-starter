import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  userId: number | undefined;
  onSet: (id: number) => void;
}

const Select = ({ userId, onSet }: Props) => (
  <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      {userId ? userId : "Select"}
    </MenuButton>
    <MenuList>
      <MenuItem onClick={() => onSet(1)}>1</MenuItem>
      <MenuItem onClick={() => onSet(2)}>2</MenuItem>
      <MenuItem onClick={() => onSet(3)}>3</MenuItem>
    </MenuList>
  </Menu>
);

export default Select;
