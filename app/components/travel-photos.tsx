import { readdir } from "node:fs/promises";
import path from "node:path";
import PhotoGallery from "./photo-gallery";

const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function naturalSort(a: string, b: string) {
  return a.localeCompare(b, undefined, {
    numeric: true,
    sensitivity: "base",
  });
}

export default async function TravelPhotos() {
  let files: string[];
  try {
    files = await readdir(
      path.join(process.cwd(), "public", "images", "journal"),
    );
  } catch {
    return null;
  }

  const images = files
    .filter((file) =>
      ALLOWED_EXTENSIONS.includes(path.extname(file).toLowerCase()),
    )
    .sort(naturalSort)
    .map((file) => `/images/journal/${file}`);

  if (images.length === 0) return null;

  return (
    <section id="travel-photos" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-ink">
          Travel Photos
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
          Snapshots from our trips across the Philippines.
        </p>

        <PhotoGallery images={images} name="Travel" />
      </div>
    </section>
  );
}
