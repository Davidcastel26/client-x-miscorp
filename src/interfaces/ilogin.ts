export interface loginModal {
    finalRef:  React.RefObject<HTMLElement | null> | (() => void);
    isOpen: boolean;
    onClose: () => void;
    initialRef: React.RefObject<HTMLElement | null> | (() => void);
}