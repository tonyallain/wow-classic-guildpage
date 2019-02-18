import React from 'react';
import { Menu } from 'semantic-ui-react';

const NavbarMenu = ({ choices, activeChoice, selectNavbarChoice }) => {
    return (
        <Menu>
            {choices.map((choice, index) => {
                return (
                    <Menu.Item
                        name={choice}
                        active={activeChoice === index}
                        onClick={() => {
                            selectNavbarChoice(index);
                        }}
                    >
                        {choice}
                    </Menu.Item>
                );
            })}
        </Menu>
    );
};

export default NavbarMenu;
