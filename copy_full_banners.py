import os
import glob
from PIL import Image

src_dir = r"C:\Users\YesWe\.gemini\antigravity\brain\164f655d-6f96-4152-9de4-3a47b77c6942"
dest_dir = r"c:\Users\YesWe\Desktop\Dispensary Templates\mohawk-crafts\public\banners"

png_files = glob.glob(os.path.join(src_dir, "mohawk_banner_*.png"))

for file_path in png_files:
    filename = os.path.basename(file_path)
    # Extract the category name (e.g., mohawk_banner_aa_12345.png -> aa)
    # They are named like mohawk_banner_aaaplus_1779781608148.png
    parts = filename.split('_')
    if len(parts) >= 4:
        category = parts[2]
        dest_filename = f"mohawk_banner_{category}.webp"
        dest_path = os.path.join(dest_dir, dest_filename)
        
        try:
            with Image.open(file_path) as img:
                # Convert to RGB just in case
                img = img.convert("RGB")
                # Save as webp without cropping
                img.save(dest_path, "WEBP", quality=90)
                print(f"Converted {filename} to {dest_filename} (FULL IMAGE)")
        except Exception as e:
            print(f"Error processing {filename}: {e}")
