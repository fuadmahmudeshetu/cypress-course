'use client';
import * as React from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../theme'; // Assuming you'll have a theme file at this path

const createEmotionCache = () => {
  return createCache({ key: 'css' });
};

export default function ThemeRegistry(props) {
  const { options, children } = props;

  const [{ cache, flush }] = React.useState(() => {
    const cache = createEmotionCache(options);
    cache.compat = true;
    let inserted = [];
    return {
      cache,
      flush: () => {
        const prev = inserted;
        inserted = [];
        return prev;
      },
    };
  });

  useServerInsertedHTML(() => {
    const serialized = flush();
    if (serialized.length === 0) {
      return null;
    }
    let styles = '';
    for (const item of serialized) {
      styles += item.css;
    }
    return (
      <style
        data-emotion={`${cache.key} ${serialized.map((item) => item.name).join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
