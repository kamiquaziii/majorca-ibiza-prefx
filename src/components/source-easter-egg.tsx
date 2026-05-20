import { SOURCE_EASTER_EGG_HTML } from "@/lib/source-easter-egg";

export function SourceEasterEgg() {
  return (
    <div hidden dangerouslySetInnerHTML={{ __html: SOURCE_EASTER_EGG_HTML }} />
  );
}
