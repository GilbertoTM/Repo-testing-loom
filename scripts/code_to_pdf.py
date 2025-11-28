import os
from fpdf import FPDF

# Configuration
PROJECT_DIR = "."  # Current directory (project root)
OUTPUT_FILE = "project_codebase.pdf"
INCLUDED_EXTENSIONS = {'.js', '.jsx', '.css', '.html', '.md', '.json', '.config.js'}
EXCLUDED_DIRS = {'node_modules', '.git', 'dist', 'build', 'coverage', '.vscode', '.idea', '.next'}
EXCLUDED_FILES = {'package-lock.json', 'yarn.lock', 'project_codebase.pdf'}

class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 10)
        self.cell(0, 10, 'Loomix Project Codebase', 0, 1, 'C')
        self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.set_font('Arial', 'I', 8)
        self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'C')

    def chapter_title(self, title):
        self.set_font('Arial', 'B', 12)
        self.set_fill_color(200, 220, 255)
        self.cell(0, 6, title, 0, 1, 'L', 1)
        self.ln(4)

    def chapter_body(self, body):
        self.set_font('Courier', '', 10)
        # Handle unicode characters by replacing them or using a compatible font
        # Standard FPDF doesn't support full UTF-8 without external fonts, 
        # so we'll encode to latin-1 and replace errors to avoid crashes.
        try:
            encoded_body = body.encode('latin-1', 'replace').decode('latin-1')
        except Exception:
            encoded_body = body
            
        self.multi_cell(0, 5, encoded_body)
        self.ln()

def generate_pdf():
    pdf = PDF()
    pdf.add_page()
    
    file_count = 0
    
    for root, dirs, files in os.walk(PROJECT_DIR):
        # Modify dirs in-place to skip excluded directories
        dirs[:] = [d for d in dirs if d not in EXCLUDED_DIRS]
        
        for file in sorted(files):
            if file in EXCLUDED_FILES:
                continue
                
            _, ext = os.path.splitext(file)
            if ext in INCLUDED_EXTENSIONS:
                file_path = os.path.join(root, file)
                # Calculate relative path for display
                rel_path = os.path.relpath(file_path, PROJECT_DIR)
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    pdf.chapter_title(rel_path)
                    pdf.chapter_body(content)
                    file_count += 1
                    print(f"Added: {rel_path}")
                except Exception as e:
                    print(f"Skipping {rel_path}: {e}")

    pdf.output(OUTPUT_FILE)
    print(f"\nSuccess! PDF generated at {OUTPUT_FILE} with {file_count} files.")

if __name__ == "__main__":
    generate_pdf()
