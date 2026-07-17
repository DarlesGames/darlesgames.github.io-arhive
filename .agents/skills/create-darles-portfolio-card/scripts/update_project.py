#!/usr/bin/env python3
"""Surgically add or replace one projects.js object from a JSON file."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

ID_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")


def object_spans(text: str, array_start: int) -> tuple[list[tuple[int, int]], int]:
    spans: list[tuple[int, int]] = []
    depth = 0
    start = None
    quote = None
    escaped = False
    line_comment = False
    block_comment = False
    i = array_start + 1
    while i < len(text):
        char = text[i]
        nxt = text[i + 1] if i + 1 < len(text) else ""
        if line_comment:
            if char == "\n": line_comment = False
        elif block_comment:
            if char == "*" and nxt == "/": block_comment = False; i += 1
        elif quote:
            if escaped: escaped = False
            elif char == "\\": escaped = True
            elif char == quote: quote = None
        elif char in "'\"`": quote = char
        elif char == "/" and nxt == "/": line_comment = True; i += 1
        elif char == "/" and nxt == "*": block_comment = True; i += 1
        elif char == "{":
            if depth == 0: start = i
            depth += 1
        elif char == "}":
            depth -= 1
            if depth < 0: raise ValueError("unbalanced object braces")
            if depth == 0 and start is not None: spans.append((start, i + 1)); start = None
        elif char == "]" and depth == 0:
            return spans, i
        i += 1
    raise ValueError("projects array is not closed")


def object_id(source: str) -> str | None:
    match = re.search(r"(?:^|[{,]\s*)[\"']?id[\"']?\s*:\s*[\"']([^\"']+)[\"']", source)
    return match.group(1) if match else None


def format_card(card: dict) -> str:
    rendered = json.dumps(card, ensure_ascii=False, indent=2)
    return "\n".join("  " + line for line in rendered.splitlines())


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("projects", type=Path)
    parser.add_argument("card", type=Path, help="UTF-8 JSON object")
    parser.add_argument("--mode", required=True, choices=("add", "replace"))
    args = parser.parse_args()

    text = args.projects.read_text(encoding="utf-8")
    card = json.loads(args.card.read_text(encoding="utf-8"))
    if not isinstance(card, dict) or not ID_RE.fullmatch(str(card.get("id", ""))):
        parser.error("card must be an object with a kebab-case id")

    marker = "window.DARLES_PROJECTS"
    marker_at = text.find(marker)
    array_start = text.find("[", marker_at)
    if marker_at < 0 or array_start < 0:
        parser.error("window.DARLES_PROJECTS array not found")
    spans, array_end = object_spans(text, array_start)
    matches = [(start, end) for start, end in spans if object_id(text[start:end]) == card["id"]]
    if len(matches) > 1:
        parser.error(f"duplicate existing id: {card['id']}")

    rendered = format_card(card)
    if args.mode == "add":
        if matches: parser.error(f"id already exists; use --mode replace: {card['id']}")
        prefix = "\n" if not spans else ",\n"
        updated = text[:array_end].rstrip() + prefix + rendered + "\n" + text[array_end:]
    else:
        if not matches: parser.error(f"id does not exist; use --mode add: {card['id']}")
        start, end = matches[0]
        line_start = text.rfind("\n", 0, start) + 1
        replace_start = line_start if text[line_start:start].isspace() else start
        updated = text[:replace_start] + rendered + text[end:]

    args.projects.write_text(updated, encoding="utf-8", newline="\n")
    print(f"{args.mode.upper()} {card['id']} in {args.projects}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
