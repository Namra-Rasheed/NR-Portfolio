import os
import fitz  # PyMuPDF

pdf_dir = "public/assets/coursera-certificates"

for filename in os.listdir(pdf_dir):
    if filename.endswith(".pdf"):
        pdf_path = os.path.join(pdf_dir, filename)
        img_name = filename.replace(".pdf", ".jpg")
        img_path = os.path.join(pdf_dir, img_name)
        
        if not os.path.exists(img_path):
            try:
                # Open PDF and render first page to image
                doc = fitz.open(pdf_path)
                page = doc.load_page(0)  # first page
                pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))  # Scale 2x for better resolution
                pix.save(img_path)
                print(f"Generated {img_name}")
                doc.close()
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")
