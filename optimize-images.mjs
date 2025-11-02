import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function optimizeImages() {
  const publicDir = join(__dirname, 'client', 'public');
  
  // Optimize conference photo
  await sharp(join(publicDir, 'Fotoprofessionaconferencesandseminars.jpeg'))
    .resize(800, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 85 })
    .toFile(join(publicDir, 'conferences.webp'));
  
  console.log('✓ Conference photo optimized to conferences.webp');
  
  // Optimize consultancy photo
  await sharp(join(publicDir, 'Fotoindividualconsultancy.png'))
    .resize(800, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 85 })
    .toFile(join(publicDir, 'consultancy.webp'));
  
  console.log('✓ Consultancy photo optimized to consultancy.webp');
  
  console.log('\nAll images optimized successfully!');
}

optimizeImages().catch(console.error);
