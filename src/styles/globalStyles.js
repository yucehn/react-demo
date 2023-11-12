import { createGlobalStyle, css } from "styled-components";

const fontSizeBase = "1";
const defaultSpacer = "1";

const theme = {
    spacers: [
        0,
        defaultSpacer * 0.25,
        defaultSpacer * 0.75,
        defaultSpacer * 1,
        defaultSpacer * 1.2,
        defaultSpacer * 1.5
    ],
    fonts: [
        0,
        fontSizeBase * 0.25,
        fontSizeBase * 0.75,
        fontSizeBase * 1,
        fontSizeBase * 1.2,
        fontSizeBase * 1.5
    ]
}

const GlobalStyles = createGlobalStyle`
a {
    text-decoration: none;
}
${theme.fonts.map((font, fontKey)=> css`
    .fz-${fontKey}{
        font-size: ${font}rem; // !important
    }
`)}
${theme.spacers.map((spacer, spacerKey)=> css`
    ${["top","right","bottom","left"].map(
        (dir) => css`
        .m${dir[0]}-${spacerKey}{
        margin-${dir}: ${spacer}rem; // !important
    }`
    )}
`)}
`;

export default GlobalStyles;