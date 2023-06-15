import { AllFontTypes } from '@/Settings';

export default function getFontTypeFromFilePath(filePath: string | undefined): FontBakeryFontType {
    if (!filePath) {
        return 'Whole family';
    }
    const extension = filePath.split('.').pop()?.toUpperCase() as FontBakeryFontType;
    if (!AllFontTypes.includes(extension)) {
        throw Error(
            `The extension ${extension} is not an accepted font type (filename: ${filePath})!`,
        );
    }
    return extension;
}
