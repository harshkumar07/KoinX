// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
  {
    "symbol": "INDEX:BTCUSD",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "light",
    "style": "2",
    "locale": "en",
    "enable_publishing": false,
    "hide_top_toolbar": true,
    "hide_legend": true,
    "save_image": false,
    "calendar": false,
    "hide_volume": true,
    "support_host": "https://www.tradingview.com",
    "container_id": "tradingview-widget-container",
    "library_path": "https://s3.tradingview.com/tv.js",
    "autosize": true,
    "width": "100%",
    "height": "450",
    "border": "none",
    "padding": "8px",
    "display": "none"
  }
`;

      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} >
      <div className="tradingview-widget-container__widget pb-4"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
