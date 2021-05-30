import React from 'react';


export interface SimpleInputProps {
    label: string;
}
export const SimpleInput:React.FunctionComponent<SimpleInputProps> = ({
    label = "default"
}) => {
    return(
        <div>
            Hello {label}
        </div>
    );
}