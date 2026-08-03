import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { dongAnLakeCase } from "../../data/cases";

export const metadata: Metadata = {
  title: "东安湖智慧文旅交通项目｜LEO ZHOU",
  description: "东安湖智慧文旅交通项目：从技术示范到商业化运营的经营与运营实践。",
};

const roleItems = ["项目经营目标", "车辆资产运营", "团队组织管理", "线路与现场服务", "大型活动保障", "数据复盘"];
const challenges = [
  ["挑战 01", "技术展示如何转化为经营项目"],
  ["挑战 02", "多车辆、多人员、多场景如何稳定交付"],
  ["挑战 03", "大型活动客流波动如何保障运营质量"],
];
const operatingMethod = ["经营目标", "资源配置", "现场运营", "数据分析", "持续优化"];
const decisions = [
  ["车辆投放", "资产运营"],
  ["单点服务", "标准化运营体系"],
  ["活动保障", "可复制的大型活动能力"],
];
const eventStages = [
  ["活动前", "资源准备"],
  ["活动中", "动态调度"],
  ["活动后", "复盘优化"],
];
const capabilityOutcomes = ["多项目运营能力", "复杂现场管理能力", "商业化运营模型", "AI增强管理体系"];

export default function DongAnLakeCasePage() {
  return (
    <main className="case-page case-study-page">
      <header className="case-header">
        <div className="container case-nav">
          <Link className="brand" href="/" aria-label="返回首页">
            <span>LEO</span> ZHOU <small>智慧文旅 · 智能交通 · 商业化运营</small>
          </Link>
          <Link className="case-back" href="/"><ArrowLeft size={16} />返回首页</Link>
        </div>
      </header>

      <section className="case-hero">
        <div className="container case-hero-layout case-reveal">
          <div className="case-hero-copy">
            <span className="eyebrow">东安湖案例研究</span>
            <h1>东安湖智慧文旅<br />交通项目</h1>
            <p className="case-positioning">从技术示范到商业化运营</p>
            <p className="case-responsibility">负责项目商业化运营，统筹经营结果、车辆资产、团队组织、现场服务与大型活动保障。</p>
          </div>
          <figure className="case-hero-figure">
            <Image src="/images/dongan-lake/vehicle-operation.jpg" alt="东安湖智慧文旅交通项目车辆运营现场" width={4096} height={3072} priority sizes="(max-width: 780px) calc(100vw - 40px), 48vw" />
            <figcaption>东安湖智慧文旅交通项目运营现场</figcaption>
          </figure>
        </div>
      </section>

      <section className="case-results-section">
        <div className="container case-reveal">
          <div className="case-section-intro">
            <span className="eyebrow">核心经营结果</span>
            <h2>经营结果，是运营能力的直接证明</h2>
          </div>
          <div className="case-results-grid">
            {dongAnLakeCase.results.map(([value, label], index) => (
              <div className="case-result" key={label}>
                <span>0{index + 1}</span><strong>{value}</strong><p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="container case-reading-layout case-reveal">
          <div className="case-section-intro">
            <span className="eyebrow">项目背景</span>
            <h2>将技术能力转化为稳定经营能力</h2>
          </div>
          <p className="case-lead">项目初期具备技术展示属性，核心挑战是如何将智能交通能力转化为稳定经营能力，并在真实文旅场景中持续交付服务与经营结果。</p>
        </div>
      </section>

      <section className="case-section case-section-muted">
        <div className="container case-reveal">
          <div className="case-section-intro">
            <span className="eyebrow">我的角色</span>
            <h2>以项目负责人视角，对经营与交付负责</h2>
          </div>
          <div className="role-list">
            {roleItems.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="container case-reveal">
          <div className="case-section-intro">
            <span className="eyebrow">核心挑战</span>
            <h2>在复杂场景中建立稳定交付能力</h2>
          </div>
          <div className="challenge-list">
            {challenges.map(([number, title]) => <article key={number}><span>{number}</span><h3>{title}</h3></article>)}
          </div>
          <figure className="case-inline-figure case-fleet-figure">
            <Image src="/images/dongan-lake/fleet-operation.jpg" alt="东安湖项目多车辆运营现场" width={4096} height={3072} sizes="(max-width: 780px) calc(100vw - 40px), 760px" />
            <figcaption>东安湖项目多车辆运营现场</figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section case-section-muted">
        <div className="container case-reveal">
          <div className="case-section-intro">
            <span className="eyebrow">我的经营方法</span>
            <h2>以管理闭环推动持续经营</h2>
          </div>
          <div className="case-method-loop">
            {operatingMethod.map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b>{index < operatingMethod.length - 1 ? <ArrowRight size={16} /> : null}</div>)}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="container case-reveal">
          <div className="case-section-intro">
            <span className="eyebrow">关键经营决策</span>
            <h2>从现场执行，走向可经营、可复制的项目能力</h2>
          </div>
          <div className="decision-list">
            {decisions.map(([from, to], index) => <article className="decision-row" key={from}><span>0{index + 1}</span><h3>{from}<ArrowRight size={18} />{to}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="case-section case-section-muted">
        <div className="container case-event-layout case-reveal">
          <div>
            <div className="case-section-intro">
              <span className="eyebrow">大型活动保障</span>
              <h2>将客流波动纳入日常运营能力</h2>
            </div>
            <div className="event-stages">
              {eventStages.map(([stage, copy], index) => <div key={stage}><span>0{index + 1}</span><h3>{stage}</h3><p>{copy}</p></div>)}
            </div>
          </div>
          <figure className="case-inline-figure case-event-figure">
            <Image src="/images/dongan-lake/night-operation.jpg" alt="东安湖项目夜间运营现场" width={1000} height={750} sizes="(max-width: 780px) calc(100vw - 40px), 42vw" />
            <figcaption>项目夜间运营现场</figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section">
        <div className="container case-reveal">
          <div className="case-section-intro">
            <span className="eyebrow">结果与能力沉淀</span>
            <h2>形成可持续经营的管理能力</h2>
          </div>
          <div className="capability-list">
            {capabilityOutcomes.map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3></div>)}
          </div>
          <figure className="case-inline-figure case-team-figure">
            <Image src="/images/dongan-lake/team-operation.jpg" alt="东安湖项目团队运营现场" width={4096} height={3072} sizes="(max-width: 780px) calc(100vw - 40px), 620px" />
            <figcaption>项目团队与现场运营场景</figcaption>
          </figure>
        </div>
      </section>

      <footer className="case-footer">
        <div className="container"><span>东安湖智慧文旅交通项目</span><Link href="/">返回首页 <ArrowRight size={15} /></Link></div>
      </footer>
    </main>
  );
}
