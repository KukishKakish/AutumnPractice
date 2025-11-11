async function urlCalls(firstUrl, someExtractorFunction, someUrlBuilder) {
  try {

    const firstResponse = await fetch(firstUrl);
    if (!firstResponse.ok) throw new Error(`Error (first URL): ${firstResponse.status}`);
    const firstData = await firstResponse.json();

    const params = someExtractorFunction(firstData);

    const secondUrl = someUrlBuilder(params);

    const secondResponse = await fetch(secondUrl);
    if (!secondResponse.ok) throw new Error(`Error (second URL): ${secondResponse.status}`);
    const secondData = await secondResponse.json();
    
    return {
      firstData,
      secondData
    };
    
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}
