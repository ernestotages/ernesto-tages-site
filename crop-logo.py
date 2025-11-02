#!/usr/bin/env python3
from PIL import Image

# Open the original logo
img = Image.open('/home/ubuntu/ernesto-tages-site/client/public/logo_ENG.jpg')

# Get image dimensions
width, height = img.size
print(f"Original size: {width}x{height}")

# Crop to keep only "ernesto Tages" part (left portion before the vertical line)
# Based on the image, the vertical line appears around 75% of the width
# We'll crop to keep approximately the left 62% to remove the line and text completely
crop_width = int(width * 0.62)

# Crop the image (left, top, right, bottom)
cropped = img.crop((0, 0, crop_width, height))

# Save the cropped logo
output_path = '/home/ubuntu/ernesto-tages-site/client/public/logo_ET.jpg'
cropped.save(output_path, 'JPEG', quality=95)

print(f"Cropped logo saved to: {output_path}")
print(f"New size: {cropped.size[0]}x{cropped.size[1]}")
