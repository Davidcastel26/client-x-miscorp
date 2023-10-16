export interface loginModal {
    finalRef:  React.RefObject<HTMLElement | null> | (() => void);
    isOpen: boolean;
    onClose: () => void;
    initialRef: React.RefObject<HTMLElement | null> | (() => void);
}

export interface login {
    onClose: () => void;
    // initialRef: React.RefObject<HTMLElement | null> | (() => void);
}

export interface TextFiledProps {
    label: string
    name:string
    placeholder:string
    autoComplete:string
    type:string
}