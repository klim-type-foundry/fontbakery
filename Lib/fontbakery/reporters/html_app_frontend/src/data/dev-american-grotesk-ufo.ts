const data: Pick<FontBakeryData, 'result' | 'sections' | 'outputFile' | 'datetime'> = {
    datetime: '2023-06-15T12:45:47.758718',
    outputFile: 'reports/ufo-report.html',
    result: { ERROR: 10, FAIL: 2, PASS: 56, WARN: 12 },
    sections: [
        {
            checks: [
                {
                    description: 'Run ufolint on UFO source directory.',
                    filename: 'sources/roman/AmericanGrotesk-Thin.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufolint>',
                        [['ufo', 0]],
                    ],
                    logs: [
                        {
                            message: 'ufolint passed the UFO source.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    result: 'PASS',
                },
                {
                    description: 'Check that required fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGrotesk-Thin.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_required_fields>',
                        [['ufo', 0]],
                    ],
                    logs: [
                        { message: 'Required fields present.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft requires these info fields to compile a font binary:\n        unitsPerEm, ascender, descender, xHeight, capHeight and familyName.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Check that recommended fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGrotesk-Thin.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_recommended_fields>',
                        [['ufo', 0]],
                    ],
                    logs: [
                        {
                            message:
                                "Recommended field(s) missing: ['copyright'] [code: missing-recommended-fields]",
                            status: 'WARN',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        This includes fields that should be in any production font.\n    ',
                    result: 'WARN',
                },
                {
                    description:
                        'Check that no unnecessary fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGrotesk-Thin.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_unnecessary_fields>',
                        [['ufo', 0]],
                    ],
                    logs: [
                        { message: 'Unnecessary fields omitted.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft will generate these.\n\n        openTypeOS2UnicodeRanges and openTypeOS2CodePageRanges are exempted\n        because it is useful to toggle a range when not _all_ the glyphs in that\n        region are present.\n\n        year is deprecated since UFO v2.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Run ufolint on UFO source directory.',
                    filename: 'sources/roman/AmericanGrotesk-Regular.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufolint>',
                        [['ufo', 1]],
                    ],
                    logs: [
                        {
                            message: 'ufolint passed the UFO source.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    result: 'PASS',
                },
                {
                    description: 'Check that required fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGrotesk-Regular.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_required_fields>',
                        [['ufo', 1]],
                    ],
                    logs: [
                        { message: 'Required fields present.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft requires these info fields to compile a font binary:\n        unitsPerEm, ascender, descender, xHeight, capHeight and familyName.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Check that recommended fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGrotesk-Regular.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_recommended_fields>',
                        [['ufo', 1]],
                    ],
                    logs: [
                        {
                            message:
                                "Recommended field(s) missing: ['copyright'] [code: missing-recommended-fields]",
                            status: 'WARN',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        This includes fields that should be in any production font.\n    ',
                    result: 'WARN',
                },
                {
                    description:
                        'Check that no unnecessary fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGrotesk-Regular.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_unnecessary_fields>',
                        [['ufo', 1]],
                    ],
                    logs: [
                        { message: 'Unnecessary fields omitted.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft will generate these.\n\n        openTypeOS2UnicodeRanges and openTypeOS2CodePageRanges are exempted\n        because it is useful to toggle a range when not _all_ the glyphs in that\n        region are present.\n\n        year is deprecated since UFO v2.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Run ufolint on UFO source directory.',
                    filename: 'sources/roman/AmericanGroteskCompressed-Thin.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufolint>',
                        [['ufo', 2]],
                    ],
                    logs: [
                        {
                            message: 'ufolint passed the UFO source.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    result: 'PASS',
                },
                {
                    description: 'Check that required fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGroteskCompressed-Thin.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_required_fields>',
                        [['ufo', 2]],
                    ],
                    logs: [
                        { message: 'Required fields present.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft requires these info fields to compile a font binary:\n        unitsPerEm, ascender, descender, xHeight, capHeight and familyName.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Check that recommended fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGroteskCompressed-Thin.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_recommended_fields>',
                        [['ufo', 2]],
                    ],
                    logs: [
                        {
                            message:
                                "Recommended field(s) missing: ['copyright'] [code: missing-recommended-fields]",
                            status: 'WARN',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        This includes fields that should be in any production font.\n    ',
                    result: 'WARN',
                },
                {
                    description:
                        'Check that no unnecessary fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGroteskCompressed-Thin.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_unnecessary_fields>',
                        [['ufo', 2]],
                    ],
                    logs: [
                        { message: 'Unnecessary fields omitted.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft will generate these.\n\n        openTypeOS2UnicodeRanges and openTypeOS2CodePageRanges are exempted\n        because it is useful to toggle a range when not _all_ the glyphs in that\n        region are present.\n\n        year is deprecated since UFO v2.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Run ufolint on UFO source directory.',
                    filename: 'sources/roman/AmericanGroteskCompressed-Regular.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufolint>',
                        [['ufo', 3]],
                    ],
                    logs: [
                        {
                            message: 'ufolint passed the UFO source.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    result: 'PASS',
                },
                {
                    description: 'Check that required fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGroteskCompressed-Regular.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_required_fields>',
                        [['ufo', 3]],
                    ],
                    logs: [
                        { message: 'Required fields present.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft requires these info fields to compile a font binary:\n        unitsPerEm, ascender, descender, xHeight, capHeight and familyName.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Check that recommended fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGroteskCompressed-Regular.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_recommended_fields>',
                        [['ufo', 3]],
                    ],
                    logs: [
                        {
                            message:
                                "Recommended field(s) missing: ['copyright'] [code: missing-recommended-fields]",
                            status: 'WARN',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        This includes fields that should be in any production font.\n    ',
                    result: 'WARN',
                },
                {
                    description:
                        'Check that no unnecessary fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGroteskCompressed-Regular.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_unnecessary_fields>',
                        [['ufo', 3]],
                    ],
                    logs: [
                        { message: 'Unnecessary fields omitted.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft will generate these.\n\n        openTypeOS2UnicodeRanges and openTypeOS2CodePageRanges are exempted\n        because it is useful to toggle a range when not _all_ the glyphs in that\n        region are present.\n\n        year is deprecated since UFO v2.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Run ufolint on UFO source directory.',
                    filename: 'sources/roman/AmericanGrotesk-Black.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufolint>',
                        [['ufo', 4]],
                    ],
                    logs: [
                        {
                            message: 'ufolint passed the UFO source.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    result: 'PASS',
                },
                {
                    description: 'Check that required fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGrotesk-Black.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_required_fields>',
                        [['ufo', 4]],
                    ],
                    logs: [
                        { message: 'Required fields present.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft requires these info fields to compile a font binary:\n        unitsPerEm, ascender, descender, xHeight, capHeight and familyName.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Check that recommended fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGrotesk-Black.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_recommended_fields>',
                        [['ufo', 4]],
                    ],
                    logs: [
                        {
                            message:
                                "Recommended field(s) missing: ['copyright'] [code: missing-recommended-fields]",
                            status: 'WARN',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        This includes fields that should be in any production font.\n    ',
                    result: 'WARN',
                },
                {
                    description:
                        'Check that no unnecessary fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGrotesk-Black.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_unnecessary_fields>',
                        [['ufo', 4]],
                    ],
                    logs: [
                        { message: 'Unnecessary fields omitted.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft will generate these.\n\n        openTypeOS2UnicodeRanges and openTypeOS2CodePageRanges are exempted\n        because it is useful to toggle a range when not _all_ the glyphs in that\n        region are present.\n\n        year is deprecated since UFO v2.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Run ufolint on UFO source directory.',
                    filename: 'sources/roman/AmericanGroteskCompressed-Black.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufolint>',
                        [['ufo', 5]],
                    ],
                    logs: [
                        {
                            message: 'ufolint passed the UFO source.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    result: 'PASS',
                },
                {
                    description: 'Check that required fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGroteskCompressed-Black.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_required_fields>',
                        [['ufo', 5]],
                    ],
                    logs: [
                        { message: 'Required fields present.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft requires these info fields to compile a font binary:\n        unitsPerEm, ascender, descender, xHeight, capHeight and familyName.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Check that recommended fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGroteskCompressed-Black.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_recommended_fields>',
                        [['ufo', 5]],
                    ],
                    logs: [
                        {
                            message:
                                "Recommended field(s) missing: ['copyright'] [code: missing-recommended-fields]",
                            status: 'WARN',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        This includes fields that should be in any production font.\n    ',
                    result: 'WARN',
                },
                {
                    description:
                        'Check that no unnecessary fields are present in the UFO fontinfo.',
                    filename: 'sources/roman/AmericanGroteskCompressed-Black.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_unnecessary_fields>',
                        [['ufo', 5]],
                    ],
                    logs: [
                        { message: 'Unnecessary fields omitted.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft will generate these.\n\n        openTypeOS2UnicodeRanges and openTypeOS2CodePageRanges are exempted\n        because it is useful to toggle a range when not _all_ the glyphs in that\n        region are present.\n\n        year is deprecated since UFO v2.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Run ufolint on UFO source directory.',
                    filename: 'sources/italic/AmericanGroteskCompressed-Italic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufolint>',
                        [['ufo', 6]],
                    ],
                    logs: [
                        {
                            message: 'ufolint passed the UFO source.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    result: 'PASS',
                },
                {
                    description: 'Check that required fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGroteskCompressed-Italic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_required_fields>',
                        [['ufo', 6]],
                    ],
                    logs: [
                        { message: 'Required fields present.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft requires these info fields to compile a font binary:\n        unitsPerEm, ascender, descender, xHeight, capHeight and familyName.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Check that recommended fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGroteskCompressed-Italic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_recommended_fields>',
                        [['ufo', 6]],
                    ],
                    logs: [
                        {
                            message:
                                "Recommended field(s) missing: ['copyright'] [code: missing-recommended-fields]",
                            status: 'WARN',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        This includes fields that should be in any production font.\n    ',
                    result: 'WARN',
                },
                {
                    description:
                        'Check that no unnecessary fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGroteskCompressed-Italic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_unnecessary_fields>',
                        [['ufo', 6]],
                    ],
                    logs: [
                        { message: 'Unnecessary fields omitted.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft will generate these.\n\n        openTypeOS2UnicodeRanges and openTypeOS2CodePageRanges are exempted\n        because it is useful to toggle a range when not _all_ the glyphs in that\n        region are present.\n\n        year is deprecated since UFO v2.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Run ufolint on UFO source directory.',
                    filename: 'sources/italic/AmericanGroteskCompressed-BlackItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufolint>',
                        [['ufo', 7]],
                    ],
                    logs: [
                        {
                            message: 'ufolint passed the UFO source.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    result: 'PASS',
                },
                {
                    description: 'Check that required fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGroteskCompressed-BlackItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_required_fields>',
                        [['ufo', 7]],
                    ],
                    logs: [
                        { message: 'Required fields present.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft requires these info fields to compile a font binary:\n        unitsPerEm, ascender, descender, xHeight, capHeight and familyName.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Check that recommended fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGroteskCompressed-BlackItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_recommended_fields>',
                        [['ufo', 7]],
                    ],
                    logs: [
                        {
                            message:
                                "Recommended field(s) missing: ['copyright'] [code: missing-recommended-fields]",
                            status: 'WARN',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        This includes fields that should be in any production font.\n    ',
                    result: 'WARN',
                },
                {
                    description:
                        'Check that no unnecessary fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGroteskCompressed-BlackItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_unnecessary_fields>',
                        [['ufo', 7]],
                    ],
                    logs: [
                        { message: 'Unnecessary fields omitted.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft will generate these.\n\n        openTypeOS2UnicodeRanges and openTypeOS2CodePageRanges are exempted\n        because it is useful to toggle a range when not _all_ the glyphs in that\n        region are present.\n\n        year is deprecated since UFO v2.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Run ufolint on UFO source directory.',
                    filename: 'sources/italic/AmericanGrotesk-BlackItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufolint>',
                        [['ufo', 8]],
                    ],
                    logs: [
                        {
                            message: 'ufolint passed the UFO source.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    result: 'PASS',
                },
                {
                    description: 'Check that required fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGrotesk-BlackItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_required_fields>',
                        [['ufo', 8]],
                    ],
                    logs: [
                        { message: 'Required fields present.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft requires these info fields to compile a font binary:\n        unitsPerEm, ascender, descender, xHeight, capHeight and familyName.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Check that recommended fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGrotesk-BlackItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_recommended_fields>',
                        [['ufo', 8]],
                    ],
                    logs: [
                        {
                            message:
                                "Recommended field(s) missing: ['copyright'] [code: missing-recommended-fields]",
                            status: 'WARN',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        This includes fields that should be in any production font.\n    ',
                    result: 'WARN',
                },
                {
                    description:
                        'Check that no unnecessary fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGrotesk-BlackItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_unnecessary_fields>',
                        [['ufo', 8]],
                    ],
                    logs: [
                        { message: 'Unnecessary fields omitted.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft will generate these.\n\n        openTypeOS2UnicodeRanges and openTypeOS2CodePageRanges are exempted\n        because it is useful to toggle a range when not _all_ the glyphs in that\n        region are present.\n\n        year is deprecated since UFO v2.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Run ufolint on UFO source directory.',
                    filename: 'sources/italic/AmericanGrotesk-ThinItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufolint>',
                        [['ufo', 9]],
                    ],
                    logs: [
                        {
                            message: 'ufolint passed the UFO source.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    result: 'PASS',
                },
                {
                    description: 'Check that required fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGrotesk-ThinItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_required_fields>',
                        [['ufo', 9]],
                    ],
                    logs: [
                        { message: 'Required fields present.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft requires these info fields to compile a font binary:\n        unitsPerEm, ascender, descender, xHeight, capHeight and familyName.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Check that recommended fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGrotesk-ThinItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_recommended_fields>',
                        [['ufo', 9]],
                    ],
                    logs: [
                        {
                            message:
                                "Recommended field(s) missing: ['copyright'] [code: missing-recommended-fields]",
                            status: 'WARN',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        This includes fields that should be in any production font.\n    ',
                    result: 'WARN',
                },
                {
                    description:
                        'Check that no unnecessary fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGrotesk-ThinItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_unnecessary_fields>',
                        [['ufo', 9]],
                    ],
                    logs: [
                        { message: 'Unnecessary fields omitted.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft will generate these.\n\n        openTypeOS2UnicodeRanges and openTypeOS2CodePageRanges are exempted\n        because it is useful to toggle a range when not _all_ the glyphs in that\n        region are present.\n\n        year is deprecated since UFO v2.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Run ufolint on UFO source directory.',
                    filename: 'sources/italic/AmericanGrotesk-Italic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufolint>',
                        [['ufo', 10]],
                    ],
                    logs: [
                        {
                            message: 'ufolint passed the UFO source.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    result: 'PASS',
                },
                {
                    description: 'Check that required fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGrotesk-Italic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_required_fields>',
                        [['ufo', 10]],
                    ],
                    logs: [
                        { message: 'Required fields present.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft requires these info fields to compile a font binary:\n        unitsPerEm, ascender, descender, xHeight, capHeight and familyName.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Check that recommended fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGrotesk-Italic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_recommended_fields>',
                        [['ufo', 10]],
                    ],
                    logs: [
                        {
                            message:
                                "Recommended field(s) missing: ['copyright'] [code: missing-recommended-fields]",
                            status: 'WARN',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        This includes fields that should be in any production font.\n    ',
                    result: 'WARN',
                },
                {
                    description:
                        'Check that no unnecessary fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGrotesk-Italic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_unnecessary_fields>',
                        [['ufo', 10]],
                    ],
                    logs: [
                        { message: 'Unnecessary fields omitted.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft will generate these.\n\n        openTypeOS2UnicodeRanges and openTypeOS2CodePageRanges are exempted\n        because it is useful to toggle a range when not _all_ the glyphs in that\n        region are present.\n\n        year is deprecated since UFO v2.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Run ufolint on UFO source directory.',
                    filename: 'sources/italic/AmericanGroteskCompressed-ThinItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufolint>',
                        [['ufo', 11]],
                    ],
                    logs: [
                        {
                            message: 'ufolint passed the UFO source.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    result: 'PASS',
                },
                {
                    description: 'Check that required fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGroteskCompressed-ThinItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_required_fields>',
                        [['ufo', 11]],
                    ],
                    logs: [
                        { message: 'Required fields present.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft requires these info fields to compile a font binary:\n        unitsPerEm, ascender, descender, xHeight, capHeight and familyName.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Check that recommended fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGroteskCompressed-ThinItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_recommended_fields>',
                        [['ufo', 11]],
                    ],
                    logs: [
                        {
                            message:
                                "Recommended field(s) missing: ['copyright'] [code: missing-recommended-fields]",
                            status: 'WARN',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        This includes fields that should be in any production font.\n    ',
                    result: 'WARN',
                },
                {
                    description:
                        'Check that no unnecessary fields are present in the UFO fontinfo.',
                    filename: 'sources/italic/AmericanGroteskCompressed-ThinItalic.ufo',
                    key: [
                        '<Section: UFO Linting and Fields>',
                        '<FontBakeryCheck:com.daltonmaag/check/ufo_unnecessary_fields>',
                        [['ufo', 11]],
                    ],
                    logs: [
                        { message: 'Unnecessary fields omitted.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        '\n        ufo2ft will generate these.\n\n        openTypeOS2UnicodeRanges and openTypeOS2CodePageRanges are exempted\n        because it is useful to toggle a range when not _all_ the glyphs in that\n        region are present.\n\n        year is deprecated since UFO v2.\n    ',
                    result: 'PASS',
                },
            ],
            key: ['<Section: UFO Linting and Fields>', null, null],
            result: { PASS: 36, WARN: 12 },
        },
        {
            checks: [
                {
                    description: 'See if we can actually load the source files.',
                    filename: 'sources/roman/_AmericanGrotesk.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_sources>',
                        [['designspace', 0]],
                    ],
                    logs: [{ message: 'OK', status: 'PASS', traceback: null }],
                    rationale:
                        '\n        This check parses a designspace file and tries to load the\n        source files specified.\n\n        This is meant to ensure that the file is not malformed,\n        can be properly parsed and does include valid source file references.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Ensure a default master is defined.',
                    filename: 'sources/roman/_AmericanGrotesk.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_default_master>',
                        [['designspace', 0]],
                    ],
                    logs: [
                        {
                            message: 'We located a default master.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        We expect that designspace files declare on of the masters as default.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Check consistency of glyphset in a designspace file.',
                    filename: 'sources/roman/_AmericanGrotesk.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_consistent_glyphset>',
                        [['designspace', 0]],
                    ],
                    logs: [
                        { message: 'Glyphsets were consistent.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        "\n        This check ensures that non-default masters don't have glyphs\n        not present in the default one.\n    ",
                    result: 'PASS',
                },
                {
                    description: 'Check codepoints consistency in a designspace file.',
                    filename: 'sources/roman/_AmericanGrotesk.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_consistent_codepoints>',
                        [['designspace', 0]],
                    ],
                    logs: [
                        {
                            message: 'Unicode assignments were consistent.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        This check ensures that Unicode assignments are consistent\n        across all sources specified in a designspace file.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'See if we can actually load the source files.',
                    filename: 'sources/roman/_AmericanGroteskVF.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_sources>',
                        [['designspace', 1]],
                    ],
                    logs: [
                        {
                            message:
                                "The check <FontBakeryCheck:com.google.fonts/check/designspace_has_sources> had an error: FailedConditionError: The condition <FontBakeryCondition:designspace_sources> had an error: FailedConditionError: The condition <FontBakeryCondition:designSpace> had an error: UFOLibError: No such file or directory: '/Users/peter/Work/Fonts/AmericanGrotesk/sources/roman/AmericanGrotesk-RegularVF.ufo'",
                            status: 'ERROR',
                            traceback:
                                '  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 405, in _get_check_dependencies\n    args = self._get_args(check, iterargs)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 360, in _get_args\n    args[name] = self._get(name, iterargs, path)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 331, in _get\n    raise error\n',
                        },
                    ],
                    rationale:
                        '\n        This check parses a designspace file and tries to load the\n        source files specified.\n\n        This is meant to ensure that the file is not malformed,\n        can be properly parsed and does include valid source file references.\n    ',
                    result: 'ERROR',
                },
                {
                    description: 'Ensure a default master is defined.',
                    filename: 'sources/roman/_AmericanGroteskVF.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_default_master>',
                        [['designspace', 1]],
                    ],
                    logs: [
                        {
                            message:
                                "The check <FontBakeryCheck:com.google.fonts/check/designspace_has_default_master> had an error: FailedConditionError: The condition <FontBakeryCondition:designSpace> had an error: UFOLibError: No such file or directory: '/Users/peter/Work/Fonts/AmericanGrotesk/sources/roman/AmericanGrotesk-RegularVF.ufo'",
                            status: 'ERROR',
                            traceback:
                                '  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 405, in _get_check_dependencies\n    args = self._get_args(check, iterargs)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 360, in _get_args\n    args[name] = self._get(name, iterargs, path)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 331, in _get\n    raise error\n',
                        },
                    ],
                    rationale:
                        '\n        We expect that designspace files declare on of the masters as default.\n    ',
                    result: 'ERROR',
                },
                {
                    description: 'Check consistency of glyphset in a designspace file.',
                    filename: 'sources/roman/_AmericanGroteskVF.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_consistent_glyphset>',
                        [['designspace', 1]],
                    ],
                    logs: [
                        {
                            message:
                                "The condition <FontBakeryCondition:designspace_sources> had an error: FailedConditionError: The condition <FontBakeryCondition:designSpace> had an error: UFOLibError: No such file or directory: '/Users/peter/Work/Fonts/AmericanGrotesk/sources/roman/AmericanGrotesk-RegularVF.ufo'",
                            status: 'ERROR',
                            traceback:
                                '  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 221, in _evaluate_condition\n    args = self._get_args(condition, iterargs, path)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 360, in _get_args\n    args[name] = self._get(name, iterargs, path)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 331, in _get\n    raise error\n',
                        },
                    ],
                    rationale:
                        "\n        This check ensures that non-default masters don't have glyphs\n        not present in the default one.\n    ",
                    result: 'ERROR',
                },
                {
                    description: 'Check codepoints consistency in a designspace file.',
                    filename: 'sources/roman/_AmericanGroteskVF.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_consistent_codepoints>',
                        [['designspace', 1]],
                    ],
                    logs: [
                        {
                            message:
                                "The condition <FontBakeryCondition:designspace_sources> had an error: FailedConditionError: The condition <FontBakeryCondition:designSpace> had an error: UFOLibError: No such file or directory: '/Users/peter/Work/Fonts/AmericanGrotesk/sources/roman/AmericanGrotesk-RegularVF.ufo'",
                            status: 'ERROR',
                            traceback:
                                '  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 221, in _evaluate_condition\n    args = self._get_args(condition, iterargs, path)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 360, in _get_args\n    args[name] = self._get(name, iterargs, path)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 331, in _get\n    raise error\n',
                        },
                    ],
                    rationale:
                        '\n        This check ensures that Unicode assignments are consistent\n        across all sources specified in a designspace file.\n    ',
                    result: 'ERROR',
                },
                {
                    description: 'See if we can actually load the source files.',
                    filename: 'sources/italic/_AmericanGroteskItalicVF.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_sources>',
                        [['designspace', 2]],
                    ],
                    logs: [
                        {
                            message:
                                "The check <FontBakeryCheck:com.google.fonts/check/designspace_has_sources> had an error: FailedConditionError: The condition <FontBakeryCondition:designspace_sources> had an error: FailedConditionError: The condition <FontBakeryCondition:designSpace> had an error: UFOLibError: No such file or directory: '/Users/peter/Work/Fonts/AmericanGrotesk/sources/italic/AmericanGrotesk-ItalicVF.ufo'",
                            status: 'ERROR',
                            traceback:
                                '  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 405, in _get_check_dependencies\n    args = self._get_args(check, iterargs)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 360, in _get_args\n    args[name] = self._get(name, iterargs, path)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 331, in _get\n    raise error\n',
                        },
                    ],
                    rationale:
                        '\n        This check parses a designspace file and tries to load the\n        source files specified.\n\n        This is meant to ensure that the file is not malformed,\n        can be properly parsed and does include valid source file references.\n    ',
                    result: 'ERROR',
                },
                {
                    description: 'Ensure a default master is defined.',
                    filename: 'sources/italic/_AmericanGroteskItalicVF.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_default_master>',
                        [['designspace', 2]],
                    ],
                    logs: [
                        {
                            message:
                                "The check <FontBakeryCheck:com.google.fonts/check/designspace_has_default_master> had an error: FailedConditionError: The condition <FontBakeryCondition:designSpace> had an error: UFOLibError: No such file or directory: '/Users/peter/Work/Fonts/AmericanGrotesk/sources/italic/AmericanGrotesk-ItalicVF.ufo'",
                            status: 'ERROR',
                            traceback:
                                '  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 405, in _get_check_dependencies\n    args = self._get_args(check, iterargs)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 360, in _get_args\n    args[name] = self._get(name, iterargs, path)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 331, in _get\n    raise error\n',
                        },
                    ],
                    rationale:
                        '\n        We expect that designspace files declare on of the masters as default.\n    ',
                    result: 'ERROR',
                },
                {
                    description: 'Check consistency of glyphset in a designspace file.',
                    filename: 'sources/italic/_AmericanGroteskItalicVF.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_consistent_glyphset>',
                        [['designspace', 2]],
                    ],
                    logs: [
                        {
                            message:
                                "The condition <FontBakeryCondition:designspace_sources> had an error: FailedConditionError: The condition <FontBakeryCondition:designSpace> had an error: UFOLibError: No such file or directory: '/Users/peter/Work/Fonts/AmericanGrotesk/sources/italic/AmericanGrotesk-ItalicVF.ufo'",
                            status: 'ERROR',
                            traceback:
                                '  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 221, in _evaluate_condition\n    args = self._get_args(condition, iterargs, path)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 360, in _get_args\n    args[name] = self._get(name, iterargs, path)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 331, in _get\n    raise error\n',
                        },
                    ],
                    rationale:
                        "\n        This check ensures that non-default masters don't have glyphs\n        not present in the default one.\n    ",
                    result: 'ERROR',
                },
                {
                    description: 'Check codepoints consistency in a designspace file.',
                    filename: 'sources/italic/_AmericanGroteskItalicVF.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_consistent_codepoints>',
                        [['designspace', 2]],
                    ],
                    logs: [
                        {
                            message:
                                "The condition <FontBakeryCondition:designspace_sources> had an error: FailedConditionError: The condition <FontBakeryCondition:designSpace> had an error: UFOLibError: No such file or directory: '/Users/peter/Work/Fonts/AmericanGrotesk/sources/italic/AmericanGrotesk-ItalicVF.ufo'",
                            status: 'ERROR',
                            traceback:
                                '  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 221, in _evaluate_condition\n    args = self._get_args(condition, iterargs, path)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 360, in _get_args\n    args[name] = self._get(name, iterargs, path)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 331, in _get\n    raise error\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 405, in _get_check_dependencies\n    args = self._get_args(check, iterargs)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 360, in _get_args\n    args[name] = self._get(name, iterargs, path)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 331, in _get\n    raise error\n',
                        },
                    ],
                    rationale:
                        '\n        This check ensures that Unicode assignments are consistent\n        across all sources specified in a designspace file.\n    ',
                    result: 'ERROR',
                },
                {
                    description: 'See if we can actually load the source files.',
                    filename: 'sources/italic/_AmericanGroteskItalic.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_sources>',
                        [['designspace', 3]],
                    ],
                    logs: [{ message: 'OK', status: 'PASS', traceback: null }],
                    rationale:
                        '\n        This check parses a designspace file and tries to load the\n        source files specified.\n\n        This is meant to ensure that the file is not malformed,\n        can be properly parsed and does include valid source file references.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Ensure a default master is defined.',
                    filename: 'sources/italic/_AmericanGroteskItalic.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_default_master>',
                        [['designspace', 3]],
                    ],
                    logs: [
                        {
                            message: 'We located a default master.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        We expect that designspace files declare on of the masters as default.\n    ',
                    result: 'PASS',
                },
                {
                    description: 'Check consistency of glyphset in a designspace file.',
                    filename: 'sources/italic/_AmericanGroteskItalic.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_consistent_glyphset>',
                        [['designspace', 3]],
                    ],
                    logs: [
                        { message: 'Glyphsets were consistent.', status: 'PASS', traceback: null },
                    ],
                    rationale:
                        "\n        This check ensures that non-default masters don't have glyphs\n        not present in the default one.\n    ",
                    result: 'PASS',
                },
                {
                    description: 'Check codepoints consistency in a designspace file.',
                    filename: 'sources/italic/_AmericanGroteskItalic.designspace',
                    key: [
                        '<Section: UFO Designspace>',
                        '<FontBakeryCheck:com.google.fonts/check/designspace_has_consistent_codepoints>',
                        [['designspace', 3]],
                    ],
                    logs: [
                        {
                            message: 'Unicode assignments were consistent.',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    rationale:
                        '\n        This check ensures that Unicode assignments are consistent\n        across all sources specified in a designspace file.\n    ',
                    result: 'PASS',
                },
            ],
            key: ['<Section: UFO Designspace>', null, null],
            result: { ERROR: 8, PASS: 8 },
        },
        {
            checks: [
                {
                    description: 'Ensure that all romans and italics are interpolatable.',
                    filename: 'sources/roman/_AmericanGrotesk.designspace',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/interpolatable>',
                        [['designspace', 0]],
                    ],
                    logs: [
                        {
                            message:
                                'Glyph asterisk was not compatible: Contour 0 start point differs: AmericanGrotesk-Thin, AmericanGroteskCompressed-Thin [code: not_interpolatable]',
                            status: 'FAIL',
                            traceback: null,
                        },
                        {
                            message: 'All glyphs are interpolatable',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    result: 'FAIL',
                },
                {
                    description: 'Ensure that all romans and italics are interpolatable.',
                    filename: 'sources/roman/_AmericanGroteskVF.designspace',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/interpolatable>',
                        [['designspace', 1]],
                    ],
                    logs: [
                        {
                            message:
                                "The condition <FontBakeryCondition:designSpace> had an error: UFOLibError: No such file or directory: '/Users/peter/Work/Fonts/AmericanGrotesk/sources/roman/AmericanGrotesk-RegularVF.ufo'",
                            status: 'ERROR',
                            traceback:
                                '  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 228, in _evaluate_condition\n    return None, condition(**args)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/callable.py", line 110, in __call__\n    return self.__wrapped__(*args, **kwds)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/profiles/shared_conditions.py", line 119, in designSpace\n    DS.loadSourceFonts(defcon.Font)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontTools/designspaceLib/__init__.py", line 3076, in loadSourceFonts\n    source.font = opener(source.path, **kwargs)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/defcon/objects/font.py", line 146, in __init__\n    self._reader = reader = UFOReader(self._path, validate=self.ufoLibReadValidate)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontTools/ufoLib/__init__.py", line 213, in __init__\n    structure = _sniffFileStructure(path)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontTools/ufoLib/__init__.py", line 1751, in _sniffFileStructure\n    raise UFOLibError("No such file or directory: \'%s\'" % ufo_path)\n',
                        },
                    ],
                    result: 'ERROR',
                },
                {
                    description: 'Ensure that all romans and italics are interpolatable.',
                    filename: 'sources/italic/_AmericanGroteskItalicVF.designspace',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/interpolatable>',
                        [['designspace', 2]],
                    ],
                    logs: [
                        {
                            message:
                                "The condition <FontBakeryCondition:designSpace> had an error: UFOLibError: No such file or directory: '/Users/peter/Work/Fonts/AmericanGrotesk/sources/italic/AmericanGrotesk-ItalicVF.ufo'",
                            status: 'ERROR',
                            traceback:
                                '  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/checkrunner.py", line 228, in _evaluate_condition\n    return None, condition(**args)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/callable.py", line 110, in __call__\n    return self.__wrapped__(*args, **kwds)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontbakery/profiles/shared_conditions.py", line 119, in designSpace\n    DS.loadSourceFonts(defcon.Font)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontTools/designspaceLib/__init__.py", line 3076, in loadSourceFonts\n    source.font = opener(source.path, **kwargs)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/defcon/objects/font.py", line 146, in __init__\n    self._reader = reader = UFOReader(self._path, validate=self.ufoLibReadValidate)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontTools/ufoLib/__init__.py", line 213, in __init__\n    structure = _sniffFileStructure(path)\n  File "/Users/peter/.pyenv/versions/3.10.4/envs/venv-AmericanGrotesk/lib/python3.10/site-packages/fontTools/ufoLib/__init__.py", line 1751, in _sniffFileStructure\n    raise UFOLibError("No such file or directory: \'%s\'" % ufo_path)\n',
                        },
                    ],
                    result: 'ERROR',
                },
                {
                    description: 'Ensure that all romans and italics are interpolatable.',
                    filename: 'sources/italic/_AmericanGroteskItalic.designspace',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/interpolatable>',
                        [['designspace', 3]],
                    ],
                    logs: [
                        {
                            message:
                                'Glyph j.ord was not compatible: Node 5 incompatible in path 0: curveTo in AmericanGrotesk-ThinItalic, lineTo in AmericanGroteskCompressed-BlackItalic [code: not_interpolatable]',
                            status: 'FAIL',
                            traceback: null,
                        },
                        {
                            message: 'All glyphs are interpolatable',
                            status: 'PASS',
                            traceback: null,
                        },
                    ],
                    result: 'FAIL',
                },
                {
                    description: 'Check if combining marks have anchors.',
                    filename: 'sources/roman/AmericanGrotesk-Thin.ufo',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/marks_have_anchors>',
                        [['ufo', 0]],
                    ],
                    logs: [{ message: 'All marks have anchors', status: 'PASS', traceback: null }],
                    result: 'PASS',
                },
                {
                    description: 'Check if combining marks have anchors.',
                    filename: 'sources/roman/AmericanGrotesk-Regular.ufo',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/marks_have_anchors>',
                        [['ufo', 1]],
                    ],
                    logs: [{ message: 'All marks have anchors', status: 'PASS', traceback: null }],
                    result: 'PASS',
                },
                {
                    description: 'Check if combining marks have anchors.',
                    filename: 'sources/roman/AmericanGroteskCompressed-Thin.ufo',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/marks_have_anchors>',
                        [['ufo', 2]],
                    ],
                    logs: [{ message: 'All marks have anchors', status: 'PASS', traceback: null }],
                    result: 'PASS',
                },
                {
                    description: 'Check if combining marks have anchors.',
                    filename: 'sources/roman/AmericanGroteskCompressed-Regular.ufo',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/marks_have_anchors>',
                        [['ufo', 3]],
                    ],
                    logs: [{ message: 'All marks have anchors', status: 'PASS', traceback: null }],
                    result: 'PASS',
                },
                {
                    description: 'Check if combining marks have anchors.',
                    filename: 'sources/roman/AmericanGrotesk-Black.ufo',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/marks_have_anchors>',
                        [['ufo', 4]],
                    ],
                    logs: [{ message: 'All marks have anchors', status: 'PASS', traceback: null }],
                    result: 'PASS',
                },
                {
                    description: 'Check if combining marks have anchors.',
                    filename: 'sources/roman/AmericanGroteskCompressed-Black.ufo',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/marks_have_anchors>',
                        [['ufo', 5]],
                    ],
                    logs: [{ message: 'All marks have anchors', status: 'PASS', traceback: null }],
                    result: 'PASS',
                },
                {
                    description: 'Check if combining marks have anchors.',
                    filename: 'sources/italic/AmericanGroteskCompressed-Italic.ufo',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/marks_have_anchors>',
                        [['ufo', 6]],
                    ],
                    logs: [{ message: 'All marks have anchors', status: 'PASS', traceback: null }],
                    result: 'PASS',
                },
                {
                    description: 'Check if combining marks have anchors.',
                    filename: 'sources/italic/AmericanGroteskCompressed-BlackItalic.ufo',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/marks_have_anchors>',
                        [['ufo', 7]],
                    ],
                    logs: [{ message: 'All marks have anchors', status: 'PASS', traceback: null }],
                    result: 'PASS',
                },
                {
                    description: 'Check if combining marks have anchors.',
                    filename: 'sources/italic/AmericanGrotesk-BlackItalic.ufo',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/marks_have_anchors>',
                        [['ufo', 8]],
                    ],
                    logs: [{ message: 'All marks have anchors', status: 'PASS', traceback: null }],
                    result: 'PASS',
                },
                {
                    description: 'Check if combining marks have anchors.',
                    filename: 'sources/italic/AmericanGrotesk-ThinItalic.ufo',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/marks_have_anchors>',
                        [['ufo', 9]],
                    ],
                    logs: [{ message: 'All marks have anchors', status: 'PASS', traceback: null }],
                    result: 'PASS',
                },
                {
                    description: 'Check if combining marks have anchors.',
                    filename: 'sources/italic/AmericanGrotesk-Italic.ufo',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/marks_have_anchors>',
                        [['ufo', 10]],
                    ],
                    logs: [{ message: 'All marks have anchors', status: 'PASS', traceback: null }],
                    result: 'PASS',
                },
                {
                    description: 'Check if combining marks have anchors.',
                    filename: 'sources/italic/AmericanGroteskCompressed-ThinItalic.ufo',
                    key: [
                        '<Section: UFO Klim>',
                        '<FontBakeryCheck:com.klim/check/marks_have_anchors>',
                        [['ufo', 11]],
                    ],
                    logs: [{ message: 'All marks have anchors', status: 'PASS', traceback: null }],
                    result: 'PASS',
                },
            ],
            key: ['<Section: UFO Klim>', null, null],
            result: { ERROR: 2, FAIL: 2, PASS: 12 },
        },
    ],
};

export default data;
