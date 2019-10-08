import { Styles, Sizes } from './enums';

const defaultColors = {
    text: '#fff',
    baseL0: '#1b2431',
    baseL1: '#222c3c',
    baseL2: '#293546',
    baseL3: '#313d4f',
};

const successColors = {
    text: '#fff',
    baseL0: '#1a740b',
    baseL1: '#1b8c09',
    baseL2: '#29a326',
    baseL3: '#39b54a',
};

export const Colors = {
    [Styles.default]: defaultColors,
    [Styles.success]: successColors
};

export const Fonts = {
    ff: 'Open Sans',
    ms: '12px',
    fs: '14px',
    lh: '1.5'
};

type Dims = {
    spacing: string,
    elementPadding: string,
    elementHeight: string,
    borderRadius: string
}

const dims = (factor: number): Dims => {
    return {
        spacing: `${factor}px`,
        elementPadding: `${factor * 2}px`,
        elementHeight: `${factor * 3}px`,
        borderRadius: '3px'
    }
};

export const Dims = {
    [Sizes.xs]: dims(8),
    [Sizes.sm]: dims(10),
    [Sizes.md]: dims(12),
    [Sizes.lg]: dims(16),
    [Sizes.xl]: dims(20),
};
