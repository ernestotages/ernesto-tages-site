#!/usr/bin/env python3
from PIL import Image
import os

# Paths
consultancy_path = '/home/ubuntu/upload/Fotoindividualconsultancy.jpeg'
conferences_path = '/home/ubuntu/upload/CD5D61AF-E866-487A-80AB-9A7F41319ABD_1_201_a.jpeg'
output_dir = '/home/ubuntu/ernesto-tages-site/client/public'

# Load images
consultancy = Image.open(consultancy_path)
conferences = Image.open(conferences_path)

print(f"Original consultancy: {consultancy.size}")
print(f"Original conferences: {conferences.size}")

# Target dimensions - use consultancy dimensions as reference
target_width = 937
target_height = 812

# Resize conferences to match consultancy dimensions
# Use LANCZOS for high-quality downsampling
conferences_resized = conferences.resize((target_width, target_height), Image.Resampling.LANCZOS)

print(f"Resized conferences: {conferences_resized.size}")

# Save as WebP with high quality
consultancy.save(os.path.join(output_dir, 'consultancy.webp'), 'WEBP', quality=85)
conferences_resized.save(os.path.join(output_dir, 'conferences.webp'), 'WEBP', quality=85)

print("✓ Photos optimized and saved as WebP")
print(f"  - consultancy.webp: {target_width}x{target_height}")
print(f"  - conferences.webp: {target_width}x{target_height}")
