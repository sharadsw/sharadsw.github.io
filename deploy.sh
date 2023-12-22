rm -rf build/
echo "Cleaning old build files"
npm run build
echo "Build complete"
npm run purge
echo "Purge complete"
npm run clean
echo "GH-clean complete"
npm run deploy