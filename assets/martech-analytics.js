/**
 * martech-analytics.js — Lightweight Executive Attribution & Outbound Tracking Engine
 * Zero-cookie, GDPR/ePrivacy compliant, zero-hydration-mismatch.
 * Captures Inbound UTMs, tracks Outbound link clicks, and records custom engagement events.
 */
(function() {
  'use strict';

  // 1. Inbound Attribution Engine
  try {
    const params = new URLSearchParams(window.location.search);
    const hasUtm = params.get('utm_source') || params.get('utm_campaign') || params.get('ref');

    let attribution = null;
    try {
      const stored = sessionStorage.getItem('gono_attribution');
      if (stored) attribution = JSON.parse(stored);
    } catch(e) {}

    if (hasUtm || !attribution) {
      attribution = {
        source: params.get('utm_source') || (document.referrer ? (new URL(document.referrer, location.href).hostname || 'direct') : 'direct'),
        medium: params.get('utm_medium') || (hasUtm ? 'referral' : 'none'),
        campaign: params.get('utm_campaign') || 'organic',
        content: params.get('utm_content') || '',
        term: params.get('utm_term') || '',
        ref: params.get('ref') || '',
        referrer: document.referrer || '',
        landingPage: window.location.pathname + window.location.search,
        firstTouchAt: attribution ? attribution.firstTouchAt : new Date().toISOString(),
        lastTouchAt: new Date().toISOString()
      };

      try {
        sessionStorage.setItem('gono_attribution', JSON.stringify(attribution));
      } catch(e) {}
    }

    window.gonoAttribution = attribution;

    // Executive Console Badge
    if (attribution && attribution.source !== 'direct') {
      console.info(
        '%c[MarTech Attribution]%c Session attributed to %c' + attribution.source + ' / ' + attribution.medium + '%c | Campaign: %c' + attribution.campaign,
        'background:#0284c7;color:#fff;padding:2px 6px;border-radius:3px;font-weight:600;font-size:11px;',
        'color:#94a3b8;font-size:11px;',
        'color:#38bdf8;font-weight:bold;font-size:11px;',
        'color:#94a3b8;font-size:11px;',
        'color:#10b981;font-weight:bold;font-size:11px;'
      );
    } else {
      console.info(
        '%c[MarTech Architecture]%c gonovn.me operational | Executive Attribution Engine Active',
        'background:#0f172a;color:#38bdf8;border:1px solid #0284c7;padding:2px 6px;border-radius:3px;font-weight:600;font-size:11px;',
        'color:#94a3b8;font-size:11px;'
      );
    }
  } catch(err) {
    // Non-blocking fail-safe
  }

  // 2. Custom Event Dispatcher
  window.gonoEvents = window.gonoEvents || [];
  window.gonoTrack = function(eventName, eventParams) {
    const payload = Object.assign({
      event: eventName,
      timestamp: new Date().toISOString(),
      attribution: window.gonoAttribution || null
    }, eventParams || {});

    window.gonoEvents.push(payload);

    // Forward to GA4 dataLayer or gtag if user connects it later
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
    }

    return payload;
  };

  // 3. Automated Outbound Click Tracking
  document.addEventListener('click', function(e) {
    const targetLink = e.target.closest('a');
    if (!targetLink || !targetLink.href) return;

    try {
      const url = new URL(targetLink.href, window.location.href);
      const isInternal = url.hostname === window.location.hostname || url.protocol === 'javascript:';
      
      if (!isInternal && (url.protocol === 'http:' || url.protocol === 'https:')) {
        window.gonoTrack('outbound_click', {
          destinationUrl: targetLink.href,
          destinationHost: url.hostname,
          linkText: targetLink.innerText ? targetLink.innerText.trim() : (targetLink.getAttribute('aria-label') || 'unlabeled')
        });
      }
    } catch(err) {}
  }, { passive: true });

})();
