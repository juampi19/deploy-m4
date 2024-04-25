import { IconType } from "react-icons";

export interface CategoryListProps {
  id: number;
  label: string;
  icon: IconType;
  description: string;
}

export interface CategoryBoxProps {
  icon: IconType;
  label: string;
  id: number
}