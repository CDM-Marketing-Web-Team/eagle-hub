import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { history } from '../../App';

import './LanguageSelector.scss';

export default function LanguageSelector(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleLanguageChange = (country) => {
    history.push(`/${country}`);
    history.go();
  };

  const setFlag = (country) => {
    let icon;
    icon = require(`../../assets/images/flags/${country}.png`);

    try {
      icon = require(`../../assets/images/flags/${country}.png`);
    } catch {
      icon = require(`../../assets/images/flags/world.png`);
    }
    return <img src={icon} alt={country} />;
  };

  return (
    <Dropdown isOpen={dropdownOpen} direction="up" toggle={toggle}>
      <DropdownToggle caret>
        <span style={{ paddingRight: '10px' }}>{setFlag(props.country)}</span>{' '}
        <span style={{ display: 'none' }}>{props.country}</span>
      </DropdownToggle>
      <DropdownMenu>
        {props.countries.map((item) => (
          <DropdownItem key={item} onClick={() => handleLanguageChange(item)}>
            <span>{setFlag(item)}</span>{' '}
            <span style={{ display: 'none' }}>{item}</span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
