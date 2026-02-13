#!/bin/bash

# Update all phone numbers to 587-801-5151

echo "Updating all phone numbers to 587-801-5151..."

# List of files to update
files=(
  "app/HeroSection.tsx"
  "app/page.tsx"
  "app/contact/page.tsx"
  "app/request-appraisal/page.tsx"
  "app/request-appraisal/intake/page.tsx"
  "app/services/self-storage/page.tsx"
  "app/services/commercial/page.tsx"
  "app/services/multifamily/page.tsx"
)

# Replace all variations of phone numbers
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Updating $file..."
    
    # Replace various phone formats
    sed -i '' 's/(403) 555-VALTA/(587) 801-5151/g' "$file"
    sed -i '' 's/(403) 555-0123/(587) 801-5151/g' "$file"
    sed -i '' 's/(403) 555-STOR/(587) 801-5151/g' "$file"
    sed -i '' 's/403-555-VALTA/587-801-5151/g' "$file"
    sed -i '' 's/403\.555\.VALTA/587.801.5151/g' "$file"
    sed -i '' 's/Call (403)/Call (587)/g' "$file"
  fi
done

echo "Phone number update complete!"