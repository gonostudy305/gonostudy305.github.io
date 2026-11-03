/**
 * gono-i18n.js — Senior Bilingual (VI/EN) Engine for gonovn.me
 * High-performance, Zero-Hydration-Mismatch DOM translation engine with URL sync and MutationObserver.
 */
(function() {
  const VN_FLAG_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="16" height="11" style="border-radius:2px;display:inline-block;vertical-align:middle;box-shadow:0 0 1px rgba(0,0,0,0.5)"><rect width="900" height="600" fill="#da251d"/><polygon fill="#ff0" points="450,150 491,277 625,277 516,356 558,483 450,404 342,483 384,356 275,277 409,277"/></svg>';
  const EN_FLAG_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="16" height="11" style="border-radius:2px;display:inline-block;vertical-align:middle;box-shadow:0 0 1px rgba(0,0,0,0.5)"><clipPath id="uk-flag-clip"><path d="M0,0 v30 h60 v-30 z"/></clipPath><g clip-path="url(#uk-flag-clip)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>';

  const DICT = {
    vi: {
      "🔒 Confidential NDA — Live Demo Available on Request": "🔒 Dự án Bảo mật NDA — Sẵn sàng Demo theo yêu cầu",
      "PL-Insight — Customer Feedback & Sentiment Intelligence": "PL-Insight — Phân tích Phản hồi Khách hàng & Sắc thái Thương hiệu",
      "AKIA Spatial Digital Twin — Neoclassic Villa Living Lab": "AKIA Spatial Digital Twin — Mô phỏng Không gian Biệt thự",
      "Panacea — Hospitality Booking Funnel & AI Chatbot": "Panacea — Phễu Đặt phòng Nghỉ dưỡng & AI Chatbot",
      "OmniAgent-OS — Agentic AI Operations & Workflow Automation": "OmniAgent-OS — Điều phối AI Agent & Tự động hóa Vận hành",

      // Nav
      "Systems": "Hệ thống",
      "Interactive NLP": "Mô phỏng NLP",
      "Showcase": "Dự án Tiêu biểu",
      "Architecture": "Kiến trúc",
      "Contact": "Liên hệ",
      "Get in Touch": "Kết nối",

      // Hero
      "Available for MarTech & Applied AI Roles": "Sẵn sàng cho cơ hội MarTech & Applied AI",
      "Available for MarTech &amp; Applied AI Roles": "Sẵn sàng cho cơ hội MarTech &amp; Applied AI",
      "Architecting MarTech & Applied AI Systems for Measurable Growth.": "Thiết kế Hệ thống MarTech & AI Ứng dụng thúc đẩy Tăng trưởng.",
      "I bridge the gap between AI engineering and marketing growth — turning transformer NLP, 3D spatial twins, and automated data pipelines into measurable business revenue.":
        "Cầu nối giữa kỹ thuật AI và tăng trưởng tiếp thị số — biến NLP Transformer, Digital Twin 3D và pipeline dữ liệu tự động thành doanh thu thực tế.",
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
      "Flagship systems, shipped to production.": "Hệ thống tiêu biểu, đã triển khai thực tế.",
      "Proof-of-work over promises. Every card links to code or a live deployment.": "Chứng minh qua sản phẩm thực tế. Mỗi dự án đều gắn liền mã nguồn hoặc bản thử nghiệm.",
      "View Architecture & Code": "Xem Kiến trúc & Mã nguồn",
      "Live Web Demo": "Xem Bản Web Thực tế",
      "Android Showcase": "Bản Trình diễn Android",
      "Explore Agent OS": "Khám phá Hệ điều hành Agent",

      // Descriptions
      "High-throughput sentiment analytics platform mining 6,350+ customer reviews for retail & e-commerce. NGINX load-balanced PhoBERT inference workers with real-time customer voice insights and automated alerting.":
        "Nền tảng phân tích sắc thái phản hồi thông lượng cao xử lý 6,350+ đánh giá cho bán lẻ & thương mại điện tử. Hệ thống NGINX cân bằng tải worker PhoBERT mang lại insight tiếng nói khách hàng tức thời.",
      "Spatial digital twin simulating real-time smart-home lighting physics (multi-pass additive shaders) and bidirectional IoT controls, accelerating high-end villa sales cycles.":
        "Bản sao số không gian mô phỏng quang học ánh sáng nhà thông minh thời gian thực (multi-pass additive WebGL shaders) và điều khiển IoT hai chiều, rút ngắn chu kỳ bán hàng biệt thự cao cấp.",
      "End-to-end eco-resort booking platform with real-time personalized room-recommendation chatbot and localized conversion funnels across Web and Mobile.":
        "Hệ thống đặt phòng nghỉ dưỡng toàn diện tích hợp chatbot gợi ý phòng cá nhân hóa theo thời gian thực và phễu chuyển đổi tối ưu trên cả Web và Di động.",
      "Unified control plane coordinating skills, memory persistence and drift auditing across multi-agent AI ecosystems, automating marketing & development workflows.":
        "Bảng điều phối hợp nhất quản lý kỹ năng (skills), bộ nhớ lưu trữ và kiểm toán độ lệch cho hệ sinh thái đa Agent, tự động hóa toàn diện quy trình tiếp thị & phát triển phần mềm.",

      // Architecture
      "03 / Architecture": "03 / Kiến trúc Hệ thống",
      "Deep-dive into the system design.": "Phân tích sâu kiến trúc thiết kế.",
      "Deterministic over magical — every hop is observable.": "Ưu tiên tính tiền định hơn sự huyền bí — mọi bước luân chuyển đều quan sát được.",

      // Principles
      "04 / Principles": "04 / Triết lý Kỹ thuật",
      "“Deterministic over magical. Failure-first system design. Every claim backed by verifiable benchmarks.”":
        "“Ưu tiên tính tiền định hơn sự huyền bí. Thiết kế hệ thống luôn đặt kịch bản sự cố lên hàng đầu. Mọi khẳng định kỹ thuật đều có benchmark kiểm chứng.”",
      "University of Economics and Law (UEL · VNU-HCM)": "Trường Đại học Kinh tế - Luật (UEL · ĐHQG-HCM)",
      "Information Systems & E-Commerce": "Hệ thống Thông tin & Thương mại Điện tử",
      "Information Systems &amp; E-Commerce": "Hệ thống Thông tin &amp; Thương mại Điện tử",
      "MarTech Executive · AKIA Smart Home": "Chuyên viên MarTech · AKIA Smart Home",
      "DAM media pipelines (Cloudflare R2 + pgvector), AI Vision automated tagging, and multi-channel touchpoints.":
        "Đường ống media DAM (Cloudflare R2 + pgvector), gắn nhãn AI Vision tự động và quản lý điểm chạm đa kênh.",

      // Contact
      "05 / Contact": "05 / Liên hệ",
      "Let's build resilient systems together.": "Cùng nhau xây dựng các hệ thống bền bỉ.",
      "Let&#x27;s build resilient systems together.": "Cùng nhau xây dựng các hệ thống bền bỉ.",
      "Send message": "Gửi tin nhắn",
      "What are you building?": "Bạn đang ấp ủ dự án gì?",
      "Your name": "Họ và tên của bạn"
    }
  };

  // Build reverse dictionary for switching back to English
  DICT.en = {};
  for (const [enKey, viVal] of Object.entries(DICT.vi)) {
    DICT.en[viVal] = enKey;
  }

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

  function translateH1(lang) {
    const h1 = document.querySelector('h1');
    if (!h1) return;
    if (lang === 'vi') {
      h1.innerHTML = 'Thiết kế Hệ thống <span class="text-gradient">MarTech &amp; AI Ứng dụng</span> cho Tăng trưởng.';
    } else {
      h1.innerHTML = 'Architecting <span class="text-gradient">MarTech &amp; Applied AI</span> Systems for Measurable Growth.';
    }
  }

  function applyTranslations(lang) {
    document.documentElement.setAttribute('lang', lang);
    translateH1(lang);

    const mapping = (lang === 'vi') ? DICT.vi : DICT.en;

    // Use TreeWalker for safe text-only node replacement (no breaking icons or spans)
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    const toUpdate = [];
    while ((node = walker.nextNode())) {
      const val = node.nodeValue.trim();
      if (val && mapping[val]) {
        toUpdate.push({ node, original: val, replacement: mapping[val] });
      }
    }

    toUpdate.forEach(item => {
      item.node.nodeValue = item.node.nodeValue.replace(item.original, item.replacement);
    });

    updateSwitcherButtons(lang);
  }

  function updateSwitcherButtons(lang) {
    // Header button
    const btn = document.getElementById('lang-toggle-btn');
    if (btn) {
      const flag = btn.querySelector('.lang-flag');
      const text = btn.querySelector('.lang-text');
      if (flag) {
        flag.innerHTML = (lang === 'vi') ? VN_FLAG_SVG : EN_FLAG_SVG;
      }
      if (text) {
        text.textContent = (lang === 'vi') ? 'VI' : 'EN';
      }
      btn.title = (lang === 'vi') ? 'Chuyển sang Tiếng Anh (Ctrl+Shift+V)' : 'Switch to Vietnamese (Ctrl+Shift+V)';
    }

    // Floating pill button
    const floatIcon = document.getElementById('floating-lang-icon');
    const floatLabel = document.getElementById('floating-lang-label');
    if (floatIcon) {
      floatIcon.innerHTML = (lang === 'vi') ? VN_FLAG_SVG : EN_FLAG_SVG;
    }
    if (floatLabel) {
      floatLabel.textContent = (lang === 'vi') ? 'Tiếng Việt' : 'English';
    }
  }

  // Public APIs
  window.getGonoLang = function() {
    return currentLang;
  };

  window.setGonoLang = function(lang) {
    if (lang !== 'vi' && lang !== 'en') return;
    currentLang = lang;
    try {
      localStorage.setItem('gono_lang', lang);
      const url = new URL(window.location);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
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

  // Post-hydration initialization
  function initI18n() {
    updateSwitcherButtons(currentLang);
    if (currentLang === 'vi') {
      applyTranslations('vi');
    }
  }

  if (document.readyState === 'complete') {
    initI18n();
  } else {
    window.addEventListener('load', function() {
      // Delay slightly so React finishes mount first
      setTimeout(initI18n, 150);
      setTimeout(initI18n, 600);
    });
  }

  // Observe dynamically loaded text (e.g. tabs or dynamic states)
  let timeoutId = null;
  const observer = new MutationObserver(function() {
    if (currentLang === 'vi') {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function() {
        applyTranslations('vi');
      }, 150);
    }
  });

  window.addEventListener('load', function() {
    const mainEl = document.querySelector('main') || document.body;
    if (mainEl) {
      observer.observe(mainEl, { childList: true, subtree: true, characterData: false });
    }
  });
})();
