export interface ModalProps {
  body?: React.ReactElement,
  title?: string;
  isOpen?:boolean;
  onClose: () => void;
  onSubmit?: () => void;
  goCheck?: () => void;
  isCheck?: boolean;
}


interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  isEmpy?: boolean;
  goCheck: () => void;
}