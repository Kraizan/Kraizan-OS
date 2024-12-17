interface RGB {
  r: number;
  g: number;
  b: number;
}

const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
};

const getColorBrightness = (rgb: RGB): number => {
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
};

const getContrastColor = (rgb: RGB): string => {
  const brightness = getColorBrightness(rgb);
  return brightness > 128 ? '#000000' : '#ffffff';
};

const getAverageRGB = (imageData: ImageData, startX: number, startY: number, size: number): RGB => {
  let r = 0, g = 0, b = 0;
  let count = 0;

  for (let x = startX; x < startX + size && x < imageData.width; x++) {
    for (let y = startY; y < startY + size && y < imageData.height; y++) {
      const i = (y * imageData.width + x) * 4;
      r += imageData.data[i];
      g += imageData.data[i + 1];
      b += imageData.data[i + 2];
      count++;
    }
  }

  return {
    r: Math.round(r / count),
    g: Math.round(g / count),
    b: Math.round(b / count)
  };
};

export const extractThemeFromImage = async (imageUrl: string): Promise<{
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      // Set canvas size to match image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw image and get image data
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // Get colors from different regions of the image
      const topColor = getAverageRGB(imageData, 0, 0, Math.floor(canvas.height / 3));
      const middleColor = getAverageRGB(imageData, 0, Math.floor(canvas.height / 3), Math.floor(canvas.height / 3));
      const bottomColor = getAverageRGB(imageData, 0, Math.floor(2 * canvas.height / 3), Math.floor(canvas.height / 3));

      // Convert to hex colors
      const primary = rgbToHex(topColor.r, topColor.g, topColor.b);
      const secondary = rgbToHex(middleColor.r, middleColor.g, middleColor.b);
      const accent = rgbToHex(bottomColor.r, bottomColor.g, bottomColor.b);
      const background = rgbToHex(
        Math.floor((topColor.r + middleColor.r) / 2),
        Math.floor((topColor.g + middleColor.g) / 2),
        Math.floor((topColor.b + middleColor.b) / 2)
      );

      // Get contrasting text color based on background
      const text = getContrastColor({
        r: Math.floor((topColor.r + middleColor.r) / 2),
        g: Math.floor((topColor.g + middleColor.g) / 2),
        b: Math.floor((topColor.b + middleColor.b) / 2)
      });

      resolve({
        primary,
        secondary,
        accent,
        background,
        text
      });
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };

    img.src = imageUrl;
  });
}; 