import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks, GiIndianPalace, GiFrenchFries } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { List } from './Styles';


export default function Category() {
  return (
    <List>
      <div>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </div>
      <div>
        <FaHamburger/>
        <h4>Burgers</h4>
      </div>
      <div>
        <GiNoodles/>
        <h4>Chinese</h4>
      </div>
      <div>
        <GiChopsticks/>
        <h4>Japanese</h4>
      </div>
      <div>
        <GiIndianPalace/>
        <h4>Indian</h4>
      </div>
      <div>
        <GiFrenchFries/>
        <h4>Fast Food</h4>
      </div>
      <div>
        <MdEmojiFoodBeverage/>
        <h4>Drinks</h4>
      </div>
    </List>
  )
}
