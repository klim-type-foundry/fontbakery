export default function getFontBakerySectionKeys(sections: FontBakerySection[]): string[] {
    return sections.map((section) => section.key[0]);
}
