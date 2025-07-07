import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileMenuOpen(false); // Close mobile menu on item click
  };

  const handleProfileClick = () =>
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const handleMobileToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Orders", path: "/orders" },
    { label: "Holdings", path: "/holdings" },
    { label: "Positions", path: "/positions" },
    { label: "Funds", path: "/funds" },
    { label: "Apps", path: "/apps" },
  ];

  return (
    <MenuBar>
      <MobileToggle onClick={handleMobileToggle}>
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </MobileToggle>

      <MenuItems $isOpen={isMobileMenuOpen}>
        {menuItems.map((item, idx) => (
          <StyledLink
            key={idx}
            to={item.path}
            onClick={() => handleMenuClick(idx)}
          >
            <MenuItem className={selectedMenu === idx ? "active" : ""}>
              {item.label}
            </MenuItem>
          </StyledLink>
        ))}
      </MenuItems>

      <UserArea>
        <Divider />
        <Profile onClick={handleProfileClick}>
          <Avatar>ZU</Avatar>
          <Username>USERID</Username>
        </Profile>
        {isProfileDropdownOpen && (
          <Dropdown>
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </Dropdown>
        )}
      </UserArea>
    </MenuBar>
  );
};

export default Menu;

// Styled Component
const MenuBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  background: #fff;
  min-height: 60px;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  position: relative;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const MobileToggle = styled.div`
  display: none;
  cursor: pointer;
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuItems = styled.nav`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-top: 0.5rem;
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const MenuItem = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;

  &.active {
    color: #f56c32;
    border-bottom-color: #f56c32;
  }

  &:hover {
    color: #f56c32;
  }
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
    margin-top: 1rem;
  }
`;

const Divider = styled.div`
  height: 30px;
  width: 1px;
  background: #ddd;
  margin: 0 1rem;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.6rem;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ffe6f0;
  color: #d67ea3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Username = styled.p`
  font-size: 0.9rem;
  color: #444;
  margin: 0;
  font-weight: 500;

  &:hover {
    color: #f56c32;
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 45px;
  right: 0;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 0.5rem 0;
  width: 160px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.05);
  z-index: 999;
`;

const DropdownItem = styled.li`
  list-style: none;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;
