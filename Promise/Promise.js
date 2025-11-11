async function loadUrlsParallel(urls) {
  try {
    const promises = urls.map(async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} for ${url}`);
        }
        return await response.text();
      } catch (error) {
        console.error(`Не удалось загрузить ${url}:`, error.message);
        return { error: error.message, url };
      }
    });

    return await Promise.all(promises);
    
  } catch (error) {
    console.error('Ошибка:', error);
    throw error;
  }
}
