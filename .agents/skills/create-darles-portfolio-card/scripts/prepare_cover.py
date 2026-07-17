#!/usr/bin/env python3
"""Center-crop an image and save a validated 1600x900 WebP cover."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    print("error: Pillow is required; install it with: python -m pip install Pillow", file=sys.stderr)
    raise SystemExit(2)

WIDTH = 1600
HEIGHT = 900


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    parser.add_argument("--quality", type=int, default=88)
    args = parser.parse_args()

    if not args.source.is_file():
        parser.error(f"source image does not exist: {args.source}")
    if not 1 <= args.quality <= 100:
        parser.error("--quality must be between 1 and 100")

    args.destination.parent.mkdir(parents=True, exist_ok=True)
    try:
        with Image.open(args.source) as source:
            source = ImageOps.exif_transpose(source).convert("RGB")
            cover = ImageOps.fit(source, (WIDTH, HEIGHT), method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
            cover.save(args.destination, "WEBP", quality=args.quality, method=6)
        with Image.open(args.destination) as result:
            if result.format != "WEBP" or result.size != (WIDTH, HEIGHT):
                raise ValueError(f"invalid result: format={result.format}, size={result.size}")
    except (OSError, ValueError) as exc:
        print(f"error: could not prepare cover: {exc}", file=sys.stderr)
        return 1

    print(f"created {args.destination} (WEBP {WIDTH}x{HEIGHT})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
