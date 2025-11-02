import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function optimizePhotos() {
  try {
    // Optimize consultancy photo
    await sharp('/home/ubuntu/upload/Fotoindividualconsultancy.jpeg')
      .webp({ quality: 85 })
      .toFile(join(__dirname, 'client/public/consultancy.webp'));
    
    console.log('✓ Consultancy photo optimized');

    // Optimize conferences photo
    await sharp('/home/ubuntu/upload/Fotoprofessionaconferencesandseminars.jpeg')
      .webp({ quality: 85 })
      .toFile(join(__dirname, 'client/public/conferences.webp'));
    
    console.log('✓ Conferences photo optimized');
    
    console.log('\nAll photos optimized successfully!');
  } catch (error) {
    console.error('Error optimizing photos:', error);
    process.exit(1);
  }
}

optimizePhotos();
