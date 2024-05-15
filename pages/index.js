// pages/index.js
import FileUploader from "@components/FileUploader";
import MultipartFileUploader from "@components/MultipartFileUploader";

export default function Home() {
  return (
    <div>
      <h1>Upload an image:</h1>

      <FileUploader
        onUploadSuccess={(result) => alert(JSON.stringify(result))}
      />

      {/* OR */}

      <MultipartFileUploader
        onUploadSuccess={(result) => alert(JSON.stringify(result))}
      />
    </div>
  );
}