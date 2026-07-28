"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { dongAnLakeCase } from "./data/cases";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Github,
  MapPin,
  Menu,
  Route,
  ShieldCheck,
  X,
} from "lucide-react";

const navItems = [
  ["代表案例", "#cases"],
  ["运营体系", "#system"],
  ["AI实践", "#ai"],
  ["职业经历", "#career"],
  ["联系", "#contact"],
] as const;

const profile = {
  hero: [
    "15年运营与项目管理经验，聚焦智慧文旅、智能交通与区域业务增长。",
    "累计管理项目收入2200万+，擅长将复杂场景转化为可执行、可复制的经营体系，并通过AI提升管理效率与知识沉淀能力。",
  ],
  contactLine: "让复杂项目变得可管理、可复制、可持续增长。",
};

const metrics = [
  ["2200万+", "累计管理项目收入", "primary"],
  ["160万+", "累计服务游客", "secondary"],
  ["70+场", "万人级活动运营保障", "secondary"],
  ["15年", "运营与项目管理经验", "base"],
  ["30+", "团队管理规模", "base"],
  ["多车型", "观光车与漫游车运营", "base"],
];

const caseData = {
  locals: {
    description: "负责成都区域业务开拓与经营管理，建立供给、上线、履约、入住服务与异常处理机制。",
    metrics: [["100+", "运营房源"], ["5000万+", "管理资产规模"], ["从0到1", "区域业务搭建"], ["全流程", "供给与入住服务体系"]],
  },
};

const systemItems = [
  ["01", "经营管理", "收入、成本、效率和项目独立核算。", CircleDollarSign],
  ["02", "多项目运营", "资源配置、团队协同和标准复制。", Building2],
  ["03", "安全与现场", "风险识别、异常处置和闭环复盘。", ShieldCheck],
  ["04", "大型活动保障", "客流预测、组织调度和现场决策。", Activity],
] as const;

const timeline = [
  ["2011—2014", "互联网运营与市场实践"],
  ["2015—2020", "北京路客成都区域运营负责人"],
  ["2020—至今", "智慧文旅与智能交通项目运营负责人"],
  ["当前", "AI驱动运营管理与职业资产建设"],
];

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="home-page">
      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#top" aria-label="回到页面顶部">
            <span>LEO</span> ZHOU <small>智慧文旅 · 智能交通 · 商业化运营</small>
          </a>
          <nav className="desktop-nav" aria-label="主导航">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <a className="nav-cta" href="#contact">查看简历 <ArrowDownRight size={16} /></a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen ? (
          <nav className="mobile-nav" aria-label="移动端主导航">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ChevronRight size={16} /></a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}>查看简历<ArrowDownRight size={16} /></a>
          </nav>
        ) : null}
      </header>

      <section id="top" className="hero">
        <div className="container hero-layout">
          <FadeIn className="hero-copy">
            <span className="eyebrow"><span className="status-dot" />运营与商业化负责人 <i>· AI-Driven Operations</i></span>
            <h1>让复杂业务场景<br /><em>变成可持续经营结果</em></h1>
            <div className="hero-intro">{profile.hero.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="hero-actions">
              <a className="button button-primary" href="#cases">查看代表案例 <ArrowRight size={17} /></a>
              <a className="button button-quiet" href="#system">查看运营体系 <ChevronDown size={17} /></a>
            </div>
          </FadeIn>

          <FadeIn className="hero-project-visual">
            <figure>
              <Image
                src="/images/dongan-lake/vehicle-operation.jpg"
                alt="东安湖智慧文旅交通项目车辆运营现场"
                width={1200}
                height={900}
                priority
                sizes="(max-width: 960px) 100vw, 42vw"
              />
            </figure>
            <div className="hero-project-caption">
              <p>东安湖智慧文旅交通项目</p>
              <span>商业化运营</span><i /> <span>40台车辆</span><i /> <span>1300万+累计收入</span>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="metrics-section">
        <div className="container metrics-grid">
          {metrics.map(([value, label, priority], index) => (
            <FadeIn className={`metric metric-${priority}`} key={label}>
              <span className="metric-index">0{index + 1}</span><strong>{value}</strong><p>{label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="cases" className="section cases-section">
        <div className="container">
          <FadeIn><SectionHeading eyebrow="代表案例" title="代表项目与经营实践" copy="以经营结果、管理范围与可复用机制，判断运营能力的真实边界。" /></FadeIn>
          <div className="case-layout">
            <FadeIn className="case-primary">
              <div className="case-topline"><span>项目 01</span><span className="case-tags">智慧文旅 · 智能交通 · 商业化运营</span></div>
              <h3>东安湖智慧文旅<br />交通项目</h3>
              <p>{dongAnLakeCase.homepageDescription}</p>
              <div className="case-metrics primary-metrics">{dongAnLakeCase.homepageMetrics.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div>
              <div className="case-line"><span>商业化运营</span><i /><span>大型活动保障</span></div>
              <a className="case-link" href="/cases/dongan-lake">查看完整案例 <ArrowRight size={16} /></a>
            </FadeIn>
            <FadeIn className="case-secondary">
              <div className="case-topline"><span>项目 02</span><Route size={18} /></div>
              <span className="case-tags">区域经营 · 从0到1 · 业务增长</span>
              <h3>北京路客<br />成都区域业务</h3>
              <p>{caseData.locals.description}</p>
              <div className="case-metrics compact-metrics">{caseData.locals.metrics.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="system" className="section system-section">
        <div className="container">
          <FadeIn><SectionHeading eyebrow="运营体系" title="将复杂运营转化为清晰的管理机制" /></FadeIn>
          <div className="system-flow">
            {systemItems.map(([number, title, copy, Icon], index) => (
              <FadeIn className="system-item" key={title}>
                <div className="system-number">{number}</div><Icon size={21} /><h3>{title}</h3><p>{copy}</p>{index < systemItems.length - 1 ? <ArrowRight className="flow-arrow" size={18} /> : null}
              </FadeIn>
            ))}
          </div>
          <FadeIn className="system-caption"><span>目标设定</span><i /><span>资源配置</span><i /><span>现场决策</span><i /><span>结果追踪</span><i /><span>组织复盘</span></FadeIn>
        </div>
      </section>

      <section id="ai" className="section ai-section">
        <div className="container ai-layout">
          <FadeIn><SectionHeading eyebrow="AI实践" title="AI不是替代管理者，<br />而是提高整理、分析、表达和知识沉淀效率" copy="运营负责人保留判断、决策、协调和负责。" /></FadeIn>
          <FadeIn className="ai-workflow">
            <div className="ai-flow"><div><span>01</span><b>真实业务<br />信息</b></div><ArrowRight size={17} /><div><span>02</span><b>AI整理与<br />结构化</b></div><ArrowRight size={17} /><div><span>03</span><b>负责人判断<br />与审核</b></div><ArrowRight size={17} /><div><span>04</span><b>报告、制度<br />与知识沉淀</b></div></div>
            <div className="ai-applications"><span><BarChart3 size={17} />AI经营报告</span><span><ClipboardCheck size={17} />AI制度与SOP</span><span><Github size={17} />Codex + GitHub Career OS</span></div>
          </FadeIn>
        </div>
      </section>

      <section id="career" className="section career-section">
        <div className="container">
          <FadeIn><SectionHeading eyebrow="职业经历" title="从区域业务增长到复杂项目经营" /></FadeIn>
          <div className="timeline">
            {timeline.map(([period, title], index) => <FadeIn className="timeline-item" key={period}><span className="timeline-dot" /><small>{period}</small><h3>{title}</h3><span className="timeline-order">0{index + 1}</span></FadeIn>)}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-box">
          <FadeIn><span className="eyebrow">联系</span><h2>讨论项目运营、商业化增长<br />与AI管理实践</h2><p>{profile.contactLine}</p></FadeIn>
          <FadeIn className="contact-details"><a href="https://github.com/Mrzzface" target="_blank" rel="noreferrer"><Github size={19} /><span>GitHub</span><b>Mrzzface</b><ArrowUpRight /></a><div><MapPin size={19} /><span>城市</span><b>成都</b></div><div><ChevronRight size={19} /><span>邮箱</span><b>邮箱待补充</b></div><div><ChevronRight size={19} /><span>微信</span><b>微信待补充</b></div></FadeIn>
        </div>
      </section>

      <footer><div className="container"><span>© {new Date().getFullYear()} LEO ZHOU</span><span>运营与商业化负责人</span></div></footer>
    </main>
  );
}
