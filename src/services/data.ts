import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export type ImageT = {
  img: string;
  width: number;
  height: number;
};

export const fetchImagesData = async (baseDir: string): Promise<ImageT[]> => {
  const baseDirPath = path.join(process.cwd(), 'public', baseDir);
  const data: ImageT[] = [];

  // Рекурсивная функция для поиска файлов в папках
  const getFilesRecursively = (dir: string) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Если директория, запускаем рекурсивно
        getFilesRecursively(fullPath);
      } else if (entry.isFile() && entry.name.match(/\.(png|jpe?g|webp)$/i)) {
        // Если это изображение, добавляем его
        data.push({ img: fullPath, width: 0, height: 0 });
      }
    }
  };

  // Запуск рекурсивного поиска файлов
  getFilesRecursively(baseDirPath);

  // Обновление размеров для всех изображений
  await Promise.all(
    data.map(async item => {
      const metadata = await sharp(item.img).metadata();
      item.width = metadata.width || 0;
      item.height = metadata.height || 0;

      // Формируем относительный путь для использования на фронтенде
      item.img = path
        .relative(path.join(process.cwd(), 'public'), item.img)
        .replace(/\\/g, '/');
    })
  );
  // Sort images by filename
  data.sort((a, b) => {
    const aName = path.basename(a.img, path.extname(a.img));
    const bName = path.basename(b.img, path.extname(b.img));
    return parseInt(aName, 10) - parseInt(bName, 10);
  });
  return data;
};
