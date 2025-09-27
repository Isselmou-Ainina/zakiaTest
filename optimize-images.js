#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create optimized versions of images
const imagesToOptimize = [
  {
    input: 'public/team_pic.jpg',
    output: 'public/team_pic.webp',
    description: 'Main team photo (LCP image)'
  },
  {
    input: 'public/team_pic_2.jpg', 
    output: 'public/team_pic_2.webp',
    description: 'Secondary team photo'
  },
  {
    input: 'public/zakia_transparent_logo.png',
    output: 'public/zakia_transparent_logo.webp',
    description: 'Logo'
  }
];

console.log('Image optimization script created.');
console.log('To optimize images, you can:');
console.log('1. Use online tools like https://squoosh.app/');
console.log('2. Install ImageMagick: brew install imagemagick webp');
console.log('3. Use the following commands:');

imagesToOptimize.forEach(img => {
  console.log(`\n# Convert ${img.description}`);
  console.log(`convert ${img.input} -quality 85 -resize 1920x1080> ${img.output}`);
});

console.log('\n# For the logo (smaller size)');
console.log('convert public/zakia_transparent_logo.png -quality 90 -resize 128x128> public/zakia_transparent_logo.webp');

console.log('\nAfter conversion, update the imports in src/pages/Index.tsx to use .webp files.');
