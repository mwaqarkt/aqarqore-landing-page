import fs from 'fs';
import { PNG } from 'pngjs';

const inputPath = 'C:\\Users\\user\\.gemini\\antigravity-ide\\brain\\db0ae153-ae41-48bc-be23-a1cdb8442919\\.user_uploaded\\media_1787980931963.png';
const outputPath = 'c:\\Users\\user\\Desktop\\aqarqore-landing-page\\public\\aqarqore-command-center.png';

fs.createReadStream(inputPath)
  .pipe(new PNG({ filterType: 4 }))
  .on('parsed', function() {
    const width = this.width;
    const height = this.height;
    console.log(`Image parsed: ${width}x${height}`);

    const isCheckerboardPixel = (x, y) => {
      const idx = (width * y + x) << 2;
      const r = this.data[idx];
      const g = this.data[idx + 1];
      const b = this.data[idx + 2];
      const isNeutral = Math.abs(r - g) < 25 && Math.abs(g - b) < 25 && Math.abs(r - b) < 25;
      const isLight = (r > 165 && g > 165 && b > 165);
      return isNeutral && isLight;
    };

    // BFS Flood Fill from edges
    const visited = new Uint8Array(width * height);
    const queue = [];

    // Seed with all edge pixels that are checkerboard
    for (let x = 0; x < width; x++) {
      if (isCheckerboardPixel(x, 0)) { queue.push((0 * width) + x); visited[x] = 1; }
      if (isCheckerboardPixel(x, height - 1)) { queue.push(((height - 1) * width) + x); visited[(height - 1) * width + x] = 1; }
    }
    for (let y = 0; y < height; y++) {
      if (isCheckerboardPixel(0, y)) { queue.push((y * width) + 0); visited[y * width] = 1; }
      if (isCheckerboardPixel(width - 1, y)) { queue.push((y * width) + (width - 1)); visited[y * width + (width - 1)] = 1; }
    }

    let head = 0;
    while (head < queue.length) {
      const pos = queue[head++];
      const cx = pos % width;
      const cy = Math.floor(pos / width);

      // Make this pixel transparent
      const idx = pos << 2;
      this.data[idx + 3] = 0;

      // Check neighbors
      const neighbors = [
        [cx + 1, cy],
        [cx - 1, cy],
        [cx, cy + 1],
        [cx, cy - 1]
      ];

      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const npos = ny * width + nx;
          if (!visited[npos]) {
            visited[npos] = 1;
            if (isCheckerboardPixel(nx, ny)) {
              queue.push(npos);
            }
          }
        }
      }
    }

    console.log(`Flood filled ${queue.length} checkerboard pixels to transparent.`);

    this.pack().pipe(fs.createWriteStream(outputPath)).on('finish', () => {
      console.log('Saved transparent command center image to', outputPath);
    });
  });
