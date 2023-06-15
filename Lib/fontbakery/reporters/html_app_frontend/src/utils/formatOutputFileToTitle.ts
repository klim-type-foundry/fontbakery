import { capitalize } from 'vue';

export default function formatOutputFileToTitle(outputFile: string): string {
    let filename = outputFile.split('/').pop();
    if (!filename) {
        filename = outputFile;
    }
    return capitalize(filename.replace(/\.[^/.]+$/, '').replace('-', ' ')).replace('Ufo', 'UFO');
}
