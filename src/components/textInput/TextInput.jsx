import React from "react";

import cls from "./index.module.scss";


export const TextInput = React.forwardRef(({
    type,
    placeholder
}, ref) => (
    <input
        type={type}
        placeholder={placeholder}
        className={cls.TextInput}
    />
))

