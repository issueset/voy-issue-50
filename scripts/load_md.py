import json
import glob
from typing import List


# read all markdown files in a directory and return them as a list of strings
def read_markdown_files(dir_path: str) -> List[str]:
    files = glob.glob(f"{dir_path}/*.md")
    data = []
    for file in files:
        with open(file, "r") as f:
            data.append(f.read())
    return data


def write_json(data: List[str], file_path: str):
    with open(file_path, "w") as f:
        f.write(json.dumps(data, indent=2, ensure_ascii=False))


def main():
    data = read_markdown_files(
        "/Users/ocavue/Downloads/reflect-test01-20230831-1550-v1.0"
    )
    write_json(
        data, "/Users/ocavue/code/play/voy-issue-50/data/transformers-input-cn.json"
    )


if __name__ == "__main__":
    main()
