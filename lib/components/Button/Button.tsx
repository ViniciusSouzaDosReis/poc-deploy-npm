import MUIButton, { ButtonProps } from "@mui/material/Button"
import React from "react";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { variant = "contained", color = "primary", size = "medium", ...props },
        ref,
    ) => {
        return (
            <MUIButton
                ref={ref}
                variant={variant}
                color={color}
                size={size}
                sx={{
                  backgroundColor: 'red'
                }}
                className="ApButton"
                {...props}
            />
        );
    },
);