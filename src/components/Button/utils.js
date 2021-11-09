export const getClassName = (variant) => {
    if (variant === "special") {
        return "button--special";
    }
    if (variant === "secondary") {
        return "button--secondary";
    }
    if (variant === "primary") {
        return "button--primary";
    }
    return ""
}
