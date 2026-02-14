import fs from 'fs';
import path from 'path';

const inputPath = path.resolve('src/assets/profile/profile.png');
const outputPath = path.resolve('public/favicon.svg');

try {
    const imageBuffer = fs.readFileSync(inputPath);
    const base64Image = imageBuffer.toString('base64');
    const mimeType = 'image/png';

    const svgContent = `
<svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="circle">
      <circle cx="50" cy="50" r="50" />
    </clipPath>
  </defs>
  <image width="100" height="100" xlink:href="data:${mimeType};base64,${base64Image}" clip-path="url(#circle)" preserveAspectRatio="xMidYMid slice"/>
</svg>`;

    fs.writeFileSync(outputPath, svgContent);
    console.log('Successfully generated public/favicon.svg');
} catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
}
