import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks, GiIndianPalace, GiFrenchFries } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { List, SLink } from './Styles';


export default function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/Burgers'}>
        <FaHamburger/>
        <h4>Burgers</h4>
      </SLink>
      <SLink to={'/cuisine/Chinese'}>
        <GiNoodles/>
        <h4>Chinese</h4>
      </SLink>
      <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks/>
        <h4>Japanese</h4>
      </SLink>
      <SLink to={'/cuisine/Indian'}>
        <GiIndianPalace/>
        <h4>Indian</h4>
      </SLink>
      <SLink to={'/cuisine/FastFood'}>
        <GiFrenchFries/>
        <h4>Fast Food</h4>
      </SLink>
      <SLink to={'/cuisine/Drinks'}>
        <MdEmojiFoodBeverage/>
        <h4>Drinks</h4>
      </SLink>
    </List>
  )
}
