export default function sortChecksByFilename(a: FontBakeryCheck, b: FontBakeryCheck) {
    const aFilename = a.filename || '';
    const bFilename = b.filename || '';
    const aIsRoman = aFilename.includes('/roman/');
    const bIsRoman = bFilename.includes('/roman/');

    if (aIsRoman !== bIsRoman) {
        // Sort romans before italics
        return aIsRoman && !bIsRoman ? -1 : 1;
    }

    // Sort by filename within roman/italic
    return aFilename > bFilename ? 1 : -1;
}
