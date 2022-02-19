export const setResponsiveClassName = (classes, screenSize, baseClassName) => {
    let responsiveClassString = `
        ${(`classes.${baseClassName}`)} ${screenSize === "large" ? (`classes.${baseClassName}Large`) :
        screenSize === "medium" ? (`classes.${baseClassName}Medium`) : 
        screenSize === "small" ? (`classes.${baseClassName}Small`) : 
        screenSize === "extraSmall" ? (`classes.${baseClassName}ExtraSmall`) : 
        null}`;
    return responsiveClassString;
}