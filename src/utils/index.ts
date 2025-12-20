export const formatDate = (dateString: string, lang: string = 'es') => {
  const date = new Date(dateString);
  return date.toLocaleDateString(lang === 'pt-br' ? 'pt-BR' : lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const calculateReadTime = (content: any): string => {
  // Simple word count based read time calculation
  // Payload Lexical content can be complex, so we'll try to extract text
  const text = JSON.stringify(content);
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s+/g).length;
  const minutes = Math.ceil(noOfWords / wordsPerMinute);
  return `${minutes} min read`;
};

export const processHtmlContent = (html: string): string => {
  // Basic processing, can be expanded if needed
  // For example, ensuring absolute URLs or adding classes to specific tags
  return html;
};
