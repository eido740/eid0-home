#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 \"project name\" [base-dir]"
  exit 1
fi

project_name="$1"
base_dir="${2:-projects/active}"

slug="$(echo "$project_name" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//')"
project_dir="$base_dir/$slug"

if [[ -z "$slug" ]]; then
  echo "Error: project name produced an empty slug"
  exit 1
fi

if [[ -e "$project_dir" ]]; then
  echo "Error: project already exists at $project_dir"
  exit 1
fi

mkdir -p "$project_dir"

for file in README PLAN TASKS LOG NEXT; do
  cp "templates/project/${file}.template.md" "$project_dir/${file}.md"
done

safe_project_name="$(printf '%s' "$project_name" | sed -E 's/[\\/&]/\\&/g')"
sed -i "s/{{PROJECT_NAME}}/$safe_project_name/g" "$project_dir/README.md"

echo "Created project scaffold at: $project_dir"
echo "Next: open $project_dir/NEXT.md and define your first 3 actions."
