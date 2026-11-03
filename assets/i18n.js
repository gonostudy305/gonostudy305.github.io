/**
 * gono-i18n.js — Senior Bilingual (VI/EN) Engine for gonovn.me
 * High-performance, Zero-Hydration-Mismatch DOM translation engine with URL sync and MutationObserver.
 */
(function() {
  const DICT = {
    vi: {
      // Nav
      "Systems": "Hệ thống",
      "Interactive NLP": "Mô phỏng NLP",
      "Showcase": "Dự án Tiêu biểu",
      "Architecture": "Kiến trúc",
      "Contact": "Liên hệ",
      "Get in Touch": "Kết nối",

      // Hero
      "Available for AI & Systems Engineering": "Sẵn sàng cho cơ hội Kỹ sư AI & Hệ thống",
      "Available for AI &amp; Systems Engineering": "Sẵn sàng cho cơ hội Kỹ sư AI &amp; Hệ thống",
      "Architecting Applied AI Pipelines & Distributed Data Systems.": "Thiết kế Pipeline AI Ứng dụng & Hệ thống Dữ liệu Phân tán.",
      "I bridge the gap between machine learning research and fault-tolerant production software — transformer NLP inference, vector retrieval, and scalable MarTech engines.":
        "Cầu nối giữa nghiên cứu Học máy và phần mềm production chịu lỗi cao — tối ưu suy luận NLP Transformer, truy xuất vector và kiến trúc MarTech quy mô lớn.",
      "View Systems": "Xem Hệ thống",
      "Open Command Center": "Mở Bảng điều khiển",

      // Metrics
      "Google Maps reviews mined with PhoBERT": "Đánh giá Google Maps được phân tích với PhoBERT",
      "p95 latency reduction via dual-worker NGINX": "Giảm độ trễ p95 qua NGINX cân bằng tải 2-worker",
      "Three-nines reliability on mock fallback": "Khả năng phục hồi hệ thống với Graceful Mock Provider",
      "4-tier decoupled distributed topology": "Kiến trúc Microservices tách rời 4 tầng (Decoupled)",

      // NLP Sandbox
      "PHOBERT INFERENCE SANDBOX": "PHOBERT INFERENCE SANDBOX",
      "Live browser-side NLP simulator": "Môi trường thử nghiệm NLP trực tiếp trên trình duyệt",
      "Analyze Sentiment": "Phân tích Cảm xúc",
      "sample: positive": "mẫu: tích cực",
      "sample: negative": "mẫu: tiêu cực",
      "sample: mixed": "mẫu: hỗn hợp",
      "Aspect: Service & Drink": "Khía cạnh: Dịch vụ & Món uống",
      "Aspect: Space & Wait time": "Khía cạnh: Vận hành & Thời gian chờ",
      "Aspect: Quality (Good) / Staff (Issue)": "Khía cạnh: Chất lượng (Tốt) / Nhân viên (Vấn đề)",
      "Execution:": "Thời gian xử lý:",
      "Routed to": "Điều hướng đến",

      // Showcase
      "02 / Showcase": "02 / Dự án Tiêu biểu",
      "Systems engineered for scale and observability.": "Hệ thống được thiết kế cho quy mô và khả năng quan sát.",
      "Real architectures, battle-tested codebases and reproducible metrics.": "Kiến trúc thực chiến, mã nguồn chuẩn mực và số liệu kiểm chứng.",
      "Large-scale F&B sentiment intelligence engine. Real-time aspect extraction with fine-tuned PhoBERT, dual-worker NGINX load balancing and fault-tolerant mock fallback.":
        "Hệ thống khai thác cảm xúc F&B quy mô lớn với PhoBERT, NGINX cân bằng tải 2 worker và kiến trúc microservices 4 tầng chịu lỗi cao.",
      "Autonomous agent control plane. Deterministic event loop, multi-agent coordination, OpenTelemetry distributed tracing and resilient state machines.":
        "Hệ điều hành Agent AI với vòng lặp sự kiện tiền định (deterministic event loop), telemetry tracing và quản lý trạng thái phân tán.",
      "Interactive 3D digital twin for smart-home villa. Real-time lighting physics (WebGL shaders), multi-zone device state synchronization and bidirectional IoT controls.":
        "Bản sao số không gian 3D tương tác mô phỏng quang học thời gian thực (WebGL Shaders) và điều khiển IoT hai chiều cho dinh thự thông minh.",
      "Cross-platform healthcare management ecosystem. Modern web portal and native Android experience, honoring UEL academic roots with transparent architecture.":
        "Hệ sinh thái y tế số đa nền tảng kết hợp Web Portal hiện đại và ứng dụng Android gốc, minh bạch nguồn gốc đồ án tốt nghiệp UEL.",
      "Public engineering credential audit platform. Verifies portfolio metrics against reproducible codebase evidence and transparent peer reviews.":
        "Nền tảng kiểm chứng hồ sơ năng lực và minh chứng số liệu kỹ thuật công khai, gắn kết trực tiếp mã nguồn GitHub.",
      "View Code": "Xem Mã nguồn",
      "Live Demo": "Bản Trực tiếp",

      // Architecture
      "03 / Architecture": "03 / Kiến trúc",
      "Deep-dive into the system design.": "Phân tích sâu kiến trúc hệ thống.",
      "Deterministic over magical — every hop is observable.": "Ưu tiên tính tiền định hơn huyền bí — mọi bước truyền tải đều quan sát được.",
      "Microservices Topology": "Cấu trúc Microservices",
      "Failure-First Resiliency": "Khả năng Phục hồi Failure-First",
      "Data Pipeline & pgvector": "Đường ống Dữ liệu & pgvector",
      "Data Pipeline &amp; pgvector": "Đường ống Dữ liệu &amp; pgvector",

      // Principles
      "04 / Principles": "04 / Triết lý Kỹ thuật",
      "“Deterministic over magical. Failure-first system design. Every claim backed by verifiable benchmarks.”":
        "“Ưu tiên tính tiền định hơn sự huyền bí. Thiết kế hệ thống luôn đặt kịch bản sự cố lên hàng đầu. Mọi khẳng định kỹ thuật đều có benchmark kiểm chứng.”",
      "University of Economics and Law (UEL · VNU-HCM)": "Trường Đại học Kinh tế - Luật (UEL · ĐHQG-HCM)",
      "Information Systems & E-Commerce": "Hệ thống Thông tin & Thương mại Điện tử",
      "Information Systems &amp; E-Commerce": "Hệ thống Thông tin &amp; Thương mại Điện tử",
      "MarTech Executive · AKIA Smart Home": "Chuyên viên MarTech · AKIA Smart Home",
      "AI automation, DAM media pipelines, multi-channel touchpoints": "Tự động hóa AI, đường ống media DAM, điểm chạm đa kênh",

      // Contact
      "05 / Contact": "05 / Liên hệ",
      "Let's build resilient systems together.": "Cùng nhau xây dựng các hệ thống bền bỉ.",
      "Let&#x27;s build resilient systems together.": "Cùng nhau xây dựng các hệ thống bền bỉ."
    }
  };

  // Build reverse dictionary for switching back to English
  DICT.en = {};
  for (const [enKey, viVal] of Object.entries(DICT.vi)) {
    DICT.en[viVal] = enKey;
  }

  // Detect language: URL ?lang= > localStorage > navigator.language
  function detectLang() {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'vi' || urlLang === 'en') return urlLang;
      
      const saved = localStorage.getItem('gono_lang');
      if (saved === 'vi' || saved === 'en') return saved;

      if (navigator.language && navigator.language.toLowerCase().startsWith('vi')) {
        return 'vi';
      }
    } catch(e) {}
    return 'en';
  }

  let currentLang = detectLang();

  // Helper to translate H1 with styled inner gradient
  function translateH1(lang) {
    const h1 = document.querySelector('h1');
    if (!h1) return;
    if (lang === 'vi') {
      h1.innerHTML = 'Thiết kế Pipeline <span class="text-gradient">AI Ứng dụng</span> &amp; Hệ thống Dữ liệu Phân tán.';
    } else {
      h1.innerHTML = 'Architecting <span class="text-gradient">Applied AI Pipelines</span> &amp; Distributed Data Systems.';
    }
  }

  // Translate all matching text in DOM
  function applyTranslations(lang) {
    document.documentElement.setAttribute('lang', lang);
    translateH1(lang);

    const mapping = (lang === 'vi') ? DICT.vi : DICT.en;

    // Fast selective query for elements that contain translatable text
    const selectors = 'p, a, button, blockquote, h2, h3, span, div';
    const elements = document.querySelectorAll(selectors);

    elements.forEach(el => {
      // Only process elements with direct text children or simple wrappers
      if (el.children.length === 0 || (el.children.length === 1 && el.firstElementChild.tagName === 'SPAN')) {
        const trimmed = el.textContent.trim();
        if (mapping[trimmed]) {
          el.textContent = mapping[trimmed];
        }
      }
    });

    // Update switcher buttons UI
    updateSwitcherButtons(lang);
  }

  function updateSwitcherButtons(lang) {
    // Header button
    const btn = document.getElementById('lang-toggle-btn');
    if (btn) {
      const flag = btn.querySelector('.lang-flag');
      const text = btn.querySelector('.lang-text');
      if (flag) flag.textContent = (lang === 'vi') ? '🇻🇳' : '🇬🇧';
      if (text) text.textContent = (lang === 'vi') ? 'VI' : 'EN';
      btn.title = (lang === 'vi') ? 'Chuyển sang Tiếng Anh (Ctrl+Shift+V)' : 'Switch to Vietnamese (Ctrl+Shift+V)';
    }

    // Floating pill button
    const floatIcon = document.getElementById('floating-lang-icon');
    const floatLabel = document.getElementById('floating-lang-label');
    if (floatIcon && floatLabel) {
      floatIcon.textContent = (lang === 'vi') ? '🇻🇳' : '🇬🇧';
      floatLabel.textContent = (lang === 'vi') ? 'Tiếng Việt' : 'English';
    }
  }

  // Public API
  window.getGonoLang = function() {
    return currentLang;
  };

  window.setGonoLang = function(lang) {
    if (lang !== 'vi' && lang !== 'en') return;
    currentLang = lang;
    try {
      localStorage.setItem('gono_lang', lang);
      // Sync URL query without page reload
      const url = new URL(window.location);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url);
    } catch(e) {}

    applyTranslations(lang);
  };

  window.toggleGonoLang = function() {
    const nextLang = (currentLang === 'vi') ? 'en' : 'vi';
    window.setGonoLang(nextLang);
    return nextLang;
  };

  // Keyboard shortcut: Ctrl + Shift + V or Cmd + Shift + V
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'V' || e.key === 'v')) {
      e.preventDefault();
      window.toggleGonoLang();
    }
  });

  // Apply on DOMContentLoaded and on window.load (post-hydration)
  function initI18n() {
    if (currentLang === 'vi') {
      applyTranslations('vi');
    } else {
      updateSwitcherButtons('en');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }

  window.addEventListener('load', function() {
    initI18n();
    // Second pass after React TanStack hydration completes
    setTimeout(initI18n, 200);
    setTimeout(initI18n, 800);
  });

  // Lightweight MutationObserver to translate dynamically rendered elements (like tabs or modals)
  let timeoutId = null;
  const observer = new MutationObserver(function() {
    if (currentLang === 'vi') {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function() {
        applyTranslations('vi');
      }, 100);
    }
  });

  window.addEventListener('DOMContentLoaded', function() {
    const mainEl = document.querySelector('main') || document.body;
    observer.observe(mainEl, { childList: true, subtree: true });
  });
})();
