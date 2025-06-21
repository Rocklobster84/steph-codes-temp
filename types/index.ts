import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    isDisabled?: boolean;
}

export interface ExperienceProps {
    heading: string;
    subHeading: string;
    direction: string;
}