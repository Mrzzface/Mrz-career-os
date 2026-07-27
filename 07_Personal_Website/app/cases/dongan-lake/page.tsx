import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { dongAnLakeCase } from "../../data/cases";

export const metadata: Metadata = {
  title: "东安湖智慧文旅交通项目｜LEO ZHOU",
  description: "东安湖智慧文旅交通项目：从技术示范到商业化运营的经营与运营实践。",
};

export default function DongAnLakeCasePage() {
  return (
    <main className="case-page">
      <header className="case-header">
        <div className="container case-nav">
          <Link className="brand" href="/" aria-label="返回首页">
            <span>LEO</span> ZHOU <small>OPERATIONS &amp; COMMERCIAL GROWTH</small>
          </Link>
          <Link className="case-back" href="/"><ArrowLeft size={16} />返回首页</Link>
        </div>
      </header>

      <section className="case-hero section-grid">
        <div className="container">
          <span className="eyebrow">CASE 01 · 智慧文旅 · 智能交通</span>
          <p className="case-positioning">{dongAnLakeCase.positioning}</p>
          <h1>{dongAnLakeCase.name}</h1>
          <p className="case-responsibility">{dongAnLakeCase.responsibility}</p>
        </div>
      </section>

      <figure className="case-hero-figure">
        <Image src="/images/dongan-lake/vehicle-operation.jpg" alt="东安湖项目观光车日常运营场景" width={4096} height={3072} priority sizes="(max-width: 680px) calc(100vw - 32px), 720px" />
        <figcaption>项目观光车日常运营场景</figcaption>
      </figure>

      <section className="case-results-section">
        <div className="container">
          <div className="case-section-intro">
            <span className="eyebrow">BUSINESS RESULTS</span>
            <h2>核心经营结果</h2>
          </div>
          <div className="case-results-grid">
            {dongAnLakeCase.results.map(([value, label, priority], index) => (
              <div className={`case-result case-result-${priority}`} key={label}>
                <span>0{index + 1}</span><strong>{value}</strong><p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="container case-split-layout">
          <div className="case-section-intro">
            <span className="eyebrow">PROJECT COMPLEXITY</span>
            <h2>项目管理复杂度<br />持续提升</h2>
            <p>项目的挑战不止于扩大规模，而是让车辆、团队与现场能力同步承接更复杂的经营场景。</p>
          </div>
          <div className="complexity-list">
            {dongAnLakeCase.complexity.map(([name, start, end]) => (
              <div className="complexity-row" key={name}>
                <span>{name}</span><b>{start}</b><ArrowRight size={16} /><strong>{end}</strong>
              </div>
            ))}
          </div>
        </div>
        <figure className="case-inline-figure case-vehicle-figure">
          <Image src="/images/dongan-lake/hero.jpg" alt="东安湖湖畔建筑与日落景观" width={1440} height={2160} sizes="(max-width: 680px) calc(100vw - 32px), 470px" />
          <figcaption>东安湖项目所在区域景观</figcaption>
        </figure>
      </section>

      <section className="case-section case-section-surface">
        <div className="container">
          <div className="case-section-intro">
            <span className="eyebrow">KEY DECISIONS</span>
            <h2>关键经营决策</h2>
            <p>持续解决经营模式、资源效率与组织能力问题，而非停留在单一现场执行。</p>
          </div>
          <div className="decision-list">
            {dongAnLakeCase.decisions.map(([from, to, copy], index) => (
              <article className="decision-row" key={from}>
                <span>0{index + 1}</span>
                <h3>{from}<ArrowRight size={18} />{to}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="container">
          <div className="case-section-intro">
            <span className="eyebrow">OPERATING MECHANISM</span>
            <h2>运营与大型活动机制</h2>
            <p>安全管理贯穿资源配置、现场运营与复盘优化，不公开具体调度规则和应急细节。</p>
          </div>
          <div className="operating-loop">
            {dongAnLakeCase.operatingLoop.map((item, index) => (
              <div key={item}><span>0{index + 1}</span><b>{item}</b>{index < dongAnLakeCase.operatingLoop.length - 1 ? <ArrowRight size={16} /> : null}</div>
            ))}
          </div>
          <div className="event-stages">
            {dongAnLakeCase.eventStages.map(([stage, copy], index) => (
              <div key={stage}><span>0{index + 1}</span><h3>{stage}</h3><p>{copy}</p></div>
            ))}
          </div>
          <figure className="case-inline-figure case-event-figure">
            <Image src="/images/dongan-lake/concert-support.jpg" alt="大型活动保障期间的项目车辆运营现场" width={1896} height={1280} sizes="(max-width: 680px) calc(100vw - 32px), 720px" />
            <figcaption>大型活动保障期间的项目车辆运营现场</figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section case-section-surface case-capability-section">
        <div className="container">
          <div className="case-section-intro">
            <span className="eyebrow">CAPABILITY OUTCOME</span>
            <h2>结果与能力沉淀</h2>
          </div>
          <div className="capability-list">
            {dongAnLakeCase.capabilities.map(([title, copy], index) => (
              <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>
          <figure className="case-inline-figure case-team-figure">
            <Image src="/images/dongan-lake/team-operation.jpg" alt="项目现场运营与游客服务场景" width={4096} height={3072} sizes="(max-width: 680px) calc(100vw - 32px), 720px" />
            <figcaption>项目现场运营与游客服务场景</figcaption>
          </figure>
          <p className="case-closing">建立自动驾驶观光车在智慧文旅场景中的商业化运营路径，并为后续区域项目复制提供运营模型基础。</p>
        </div>
      </section>

      <footer className="case-footer">
        <div className="container"><span>东安湖智慧文旅交通项目</span><Link href="/">返回首页 <ArrowRight size={15} /></Link></div>
      </footer>
    </main>
  );
}
