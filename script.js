(() => {
  "use strict";
  document.documentElement.classList.add("js");

  const base = "https://github.com/EunHyeok-Ju/ai-project-lab/blob/main/projects";
  const projects = {
    finance: {
      eyebrow: "01 / FINANCE · MOBILE PRODUCT",
      subtitle: "내가 실제로 사용하는 개인 금융 시스템",
      title: "Finance Agent",
      summary: "단순한 지출 기록이 아니라, 생활 금융·카드부채·대출·투자자산을 일관된 회계 규칙으로 연결하는 프로젝트입니다. 개인 금융 영역의 복잡한 예외를 정교한 데이터 모델로 다루고, 모바일 사용 경험까지 이어지는 것을 목표로 했습니다.",
      built: [
        "복식부기 기반 거래 원장, 수입·지출·이체·정산·환불",
        "정정·무효화의 추적 가능 이력과 중복 요청 방지",
        "대출·투자자산 평가, 순자산 조회",
        "Expo 모바일 앱 및 Android 실기기 검증"
      ],
      decisions: [
        "카드 결제·계좌이체를 새로운 소비로 중복 계상하지 않기",
        "원장 잔액과 금융기관 실제 잔액의 차이 명시",
        "시세·환율 누락 시 임의의 0을 쓰지 않기",
        "AI 설명과 결정적 금융 계산 로직을 분리"
      ],
      status: "V0.7 개인용 모바일 MVP 구현·검증 완료. 자연어 AI 분석과 연말정산 계산 기능 확장은 향후 작업입니다.",
      url: base + "/finance-agent/README.md"
    },
    investment: {
      eyebrow: "02 / DATA · AUTOMATION",
      subtitle: "경제 데이터를 신뢰 가능한 정보로",
      title: "Investment Intelligence",
      summary: "무료 공개 경제 데이터를 수집하고 기준 시점, 수집 상태, 수정 이력을 보존하는 분석 기반을 구축하고 있습니다. 파이프라인의 핵심은 데이터를 많이 모으는 것보다 출처와 품질을 설명하는 데 있습니다.",
      built: [
        "미국 국채금리 및 소비자물가 데이터 수집기",
        "수집 실행·관측·변경 이력 및 정규화",
        "GitHub Actions 기반 수동·예약 데이터 수집",
        "인증된 읽기 전용 시장 데이터 대시보드"
      ],
      decisions: [
        "공식·무료 공공 데이터 소스를 우선 선정",
        "원본 수집과 계산·해석 단계를 분리",
        "실제 운영 상태와 개발 브랜치 구현 상태를 명시적으로 구분",
        "자동화 실행 기록이 없을 때는 완료로 표시하지 않기"
      ],
      status: "대시보드 V1은 보호된 운영 환경에서 확인. 규칙형 Analyst·Reporter 등은 개발 코드로 구현 중이며, 운영 자동 실행과 배포 완료를 의미하지 않습니다.",
      url: base + "/investment-intelligence/README.md"
    },
    maple: {
      eyebrow: "03 / OPEN API · PERSONAL COACH",
      subtitle: "데이터로 설명하는 개인화된 게임 성장",
      title: "MapleStory AI Coach",
      summary: "PC 메이플스토리 공식 API의 관측값을 꾸준히 기록하고, 사용자 목표와 플레이 시간을 고려한 추천을 제공합니다. 정보가 없으면 추측하지 않고 불확실성을 표시하도록 설계했습니다.",
      built: [
        "게임 공식 API의 일별·시간별 관측 수집 구조",
        "데이터베이스 스냅샷과 품질·최신성 검사",
        "캐릭터 현황·성장 이력 확인 화면과 API",
        "근거가 명확한 규칙 기반 추천 TOP 3"
      ],
      decisions: [
        "게임 관측일과 서버 저장 시각을 분리",
        "API 미제공·부분 성공·오류를 구분",
        "추천의 비용과 예상효율에 출처가 없으면 단정하지 않기",
        "LLM 의존보다 재현 가능한 추천 규칙 먼저 구현"
      ],
      status: "수집·추천 로직과 테스트 구현. 보호된 운영 API의 전체 end-to-end 및 실제 플레이 효과 검증은 일부 남아 있습니다.",
      url: base + "/maplestory-ai-coach/README.md"
    },
    warroom: {
      eyebrow: "04 / INTERFACE · EXPLORATION",
      subtitle: "보이지 않는 자동화 작업을 가시화",
      title: "Miniature War Room",
      summary: "데이터 수집과 처리, 분석과 보고가 각각 다른 역할로 수행될 때 이를 누구나 직관적으로 이해할 수 있도록 시각화하는 개인적인 인터페이스 실험입니다.",
      built: [
        "작업 에이전트 역할과 상태를 표현하는 정보 구조 탐색",
        "수집 → 가공 → 분석 → 보고의 시각적 콘셉트",
        "로컬 수준의 UI 프로토타입 실험"
      ],
      decisions: [
        "자동 실행 중인지 대기 중인지 혼동하지 않기",
        "역할과 실행 이력을 시각적으로 연결하기",
        "실제 백엔드 상태와 데모 애니메이션을 구분하기"
      ],
      status: "콘셉트·로컬 프로토타입 단계. 배포된 협업 에이전트 시스템이나 검증된 실시간 모니터링 서비스로 주장하지 않습니다.",
      url: base + "/miniature-warroom/README.md"
    }
  };

  const dialog = document.getElementById("project-dialog");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogEyebrow = document.getElementById("dialog-eyebrow");
  const dialogSubheading = document.getElementById("dialog-subheading");
  const dialogSummary = document.getElementById("dialog-summary");
  const dialogBuilt = document.getElementById("dialog-built");
  const dialogDecisions = document.getElementById("dialog-decisions");
  const dialogStatus = document.getElementById("dialog-status");
  const dialogLink = document.getElementById("dialog-doc-link");

  function fillList(node, items) {
    node.replaceChildren();
    for (const value of items) {
      const item = document.createElement("li");
      item.textContent = value;
      node.append(item);
    }
  }

  function openProject(id) {
    const item = projects[id];
    if (!item || !dialog) return;
    dialogEyebrow.textContent = item.eyebrow;
    dialogSubheading.textContent = item.subtitle;
    dialogTitle.textContent = item.title;
    dialogSummary.textContent = item.summary;
    dialogStatus.textContent = item.status;
    dialogLink.href = item.url;
    fillList(dialogBuilt, item.built);
    fillList(dialogDecisions, item.decisions);
    dialog.showModal();
  }

  document.querySelectorAll("[data-detail]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.detail));
  });
  document.querySelector(".dialog-close")?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  const filters = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll(".project-card")];
  filters.forEach(button => button.addEventListener("click", () => {
    const value = button.dataset.filter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    cards.forEach(card => {
      card.hidden = value !== "all" && card.dataset.category !== value;
      if (!card.hidden) card.classList.add("visible");
    });
  }));

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, ob) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          ob.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -18px 0px" });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  const progress = document.querySelector(".scroll-progress");
  let scheduled = false;
  const syncProgress = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (maxScroll > 0 ? window.scrollY / maxScroll * 100 : 0) + "%";
    scheduled = false;
  };
  window.addEventListener("scroll", () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(syncProgress);
    }
  }, { passive:true });
  window.addEventListener("resize", syncProgress);
  syncProgress();
})();
