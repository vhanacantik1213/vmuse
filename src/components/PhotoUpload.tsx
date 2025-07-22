import { useState, useRef } from "react";
import { Upload, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhotoUploadProps {
  onImageChange?: (file: File | null) => void;
  className?: string;
  placeholder?: string;
  defaultIcon?: React.ReactNode;
}

const PhotoUpload = ({ 
  onImageChange, 
  className = "", 
  placeholder = "Add your photo here!",
  defaultIcon = <Camera className="h-16 w-16 text-primary" />
}: PhotoUploadProps) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setUploadedImage(imageUrl);
        onImageChange?.(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    onImageChange?.(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*"
        className="hidden"
      />
      
      {uploadedImage ? (
        <div className="relative group">
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={handleUploadClick}
                className="bg-white/20 hover:bg-white/30 text-white border-white/20"
              >
                <Upload className="h-4 w-4 mr-1" />
                Change
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={handleRemoveImage}
                className="bg-red-500/80 hover:bg-red-500 text-white"
              >
                <X className="h-4 w-4 mr-1" />
                Remove
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div 
          className="w-full h-full bg-gradient-to-br from-primary/20 to-coral/20 rounded-2xl flex items-center justify-center cursor-pointer hover:from-primary/30 hover:to-coral/30 transition-colors group"
          onClick={handleUploadClick}
        >
          <div className="text-center space-y-4">
            <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              {defaultIcon}
            </div>
            <div>
              <p className="text-muted-foreground mb-2">{placeholder}</p>
              <Button variant="outline" size="sm" className="pointer-events-none">
                <Upload className="h-4 w-4 mr-2" />
                Upload Photo
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;