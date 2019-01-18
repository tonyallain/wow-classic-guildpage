import React from 'react';
import { Menu } from 'semantic-ui-react';

const NavbarMenu = props => {
    return (
        <Menu>
            <Menu.Item
                name='test'
                active={true}
                onClick={() => {
                    console.log('clicked');
                }}
            >
                {props.name}
            </Menu.Item>
        </Menu>
    );
};

export default NavbarMenu;
