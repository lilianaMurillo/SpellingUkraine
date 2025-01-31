import React from 'react';

const useMediaQuery = (query: string) => {
  const isClientSide = typeof window !== 'undefined';
  const [result, setResult] = React.useState<boolean>();

  React.useEffect(() => {
    if (!isClientSide) {
      return;
    }

    const mediaQueryList = window.matchMedia(query);

    const onChange = () => setResult(mediaQueryList.matches);
    onChange();

    mediaQueryList.addEventListener('change', onChange);
    return () => mediaQueryList.removeEventListener('change', onChange);
  }, [query, isClientSide]);

  return result;
};

export default useMediaQuery;
