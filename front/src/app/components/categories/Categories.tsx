'use client'

import { FaCamera, FaHeadphones, FaLaptop, FaTable, FaXbox } from "react-icons/fa";
import { FiMonitor, FiPrinter, FiSmartphone } from "react-icons/fi";
import { MdStorage } from "react-icons/md";
import styled from "styled-components";
import { Container } from "../container/Container";
import { CategoryBox } from "./CategoryBox";
import { CategoryListProps } from "./type";

const categories: CategoryListProps[] = [
  {
    id: 1,
    label: 'Smartphones',
    icon: FiSmartphone ,
    description: 'Los mejores smartphones!'
  },
  {
    id: 2,
    label: 'Laptops',
    icon: FaLaptop ,
    description: 'Los mejores laptops!'
  },
  {
    id: 3,
    label: 'Tablets',
    icon: FaTable ,
    description: 'Los mejores tablets!'
  },
  {
    id: 4,
    label: 'Headphones',
    icon: FaHeadphones,
    description: 'Los mejores audifonos!'
  },
  {
    id: 5,
    label: 'Cameras',
    icon: FaCamera,
    description: 'Las mejores camaras!'
  },
  {
    id: 6,
    label: 'Printers',
    icon: FiPrinter,
    description: 'Las mejores impresoras!'
  },
  {
    id: 7,
    label: 'Monitors',
    icon: FiMonitor,
    description: 'Los mejores monitores!'
  },
  {
    id: 8,
    label: 'Storage',
    icon: MdStorage,
    description: 'Los mejores almacenamientos!'
  },
  {
    id: 9,
    label: 'Accessories',
    icon: FaXbox,
    description: 'Los mejores accesorios!'
  }
];


const CategoryContent = styled.div`
padding-top: 16px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
overflow-x: auto;
`

export const Categories = () => {
  return (
    <Container>
      <CategoryContent>
        {
          categories.map( (item) => (
            <CategoryBox 
              key={item.id}
              icon={item.icon}
              label={item.label}
              id={item.id}
            />
          ) )
        }
      </CategoryContent>
    </Container>
  )
}
