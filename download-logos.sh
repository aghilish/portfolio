#!/bin/bash

# Script to download company logos using Clearbit Logo API
# This provides a quick way to get decent quality logos

LOGO_DIR="public/logos"

echo "Downloading company logos..."

# Download logos using Clearbit API (provides good quality logos)
curl -L "https://logo.clearbit.com/deloitte.com" -o "$LOGO_DIR/deloitte.png"
echo "✓ Downloaded Deloitte logo"

curl -L "https://logo.clearbit.com/volkswagen.com" -o "$LOGO_DIR/volkswagen.png"
echo "✓ Downloaded Volkswagen logo"

curl -L "https://logo.clearbit.com/audi.com" -o "$LOGO_DIR/audi.png"
echo "✓ Downloaded Audi logo"

curl -L "https://logo.clearbit.com/commerzbank.com" -o "$LOGO_DIR/commerzbank.png"
echo "✓ Downloaded Commerzbank logo"

curl -L "https://logo.clearbit.com/cariad.technology" -o "$LOGO_DIR/cariad.png"
echo "✓ Downloaded CARIAD logo"

curl -L "https://logo.clearbit.com/cloud.google.com" -o "$LOGO_DIR/google-cloud.png"
echo "✓ Downloaded Google Cloud logo"

echo ""
echo "All logos downloaded to $LOGO_DIR/"
echo ""
echo "Note: These are automatically fetched logos. For better quality:"
echo "1. Check the logos in public/logos/"
echo "2. Replace any that don't look good with official versions"
echo "3. Ensure they work well on your dark background"
