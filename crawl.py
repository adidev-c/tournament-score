import os

def is_text_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            f.read()
        return True
    except:
        return False

def crawl_directory(root_dir):
    output = []
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if not filename.endswith(".js") or filename.endswith(".html") or filename.endswith(".css"):
                continue
            print(filename)
            filepath = os.path.join(dirpath, filename)
            rel_path = os.path.relpath(filepath, root_dir)
            if is_text_file(filepath):
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    output.append(f"=== {rel_path} ===\n{content}\n")
                except Exception as e:
                    output.append(f"=== {rel_path} ===\n[Error reading file: {e}]\n")
            else:
                output.append(f"=== {rel_path} ===\n[Binary or non-text file skipped]\n")
    return output

if __name__ == "__main__":
    root = "."  # current directory
    results = crawl_directory(root)
    with open("project_snapshot.txt", "w", encoding="utf-8") as out_file:
        out_file.write("\n".join(results))
    print("✅ Done! Output saved to 'project_snapshot.txt'")
