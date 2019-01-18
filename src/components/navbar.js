import React from 'react';
import { Menu } from 'semantic-ui-react';

const NavbarMenu = props => {
    return (
        <Menu>
            {props.choices.map((choice, index) => {
                return (
                    <Menu.Item
                        name={choice}
                        active={props.activeChoice === index}
                        onClick={() => {
                            props.selectNavbarChoice(index);
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
