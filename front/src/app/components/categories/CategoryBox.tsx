'use client'

import styled from "styled-components"
import { CategoryBoxProps } from "./type"

const CategoryBoxContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 8px;
padding: 12px;
color: #737373;
cursor: pointer;
transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
border-bottom: 2px solid;
border-color: transparent;
&:hover {
  color: #0f172a;
  border-bottom-color: #0f172a;
}

`
const CategoryText = styled.p`
font-weight: 500;

`

export const CategoryBox:React.FC<CategoryBoxProps> = ({ label, icon: Icon, id }) => {
  return (
    <CategoryBoxContent>
      <Icon size={20}/>
      <CategoryText>
        {label}
      </CategoryText>
    </CategoryBoxContent>
  )
}
