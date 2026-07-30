from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf"
FONT_REGULAR = "C:/Windows/Fonts/msyh.ttc"
FONT_BOLD = "C:/Windows/Fonts/msyhbd.ttc"


def register_fonts():
    pdfmetrics.registerFont(TTFont("ResumeChinese", FONT_REGULAR, subfontIndex=0))
    pdfmetrics.registerFont(TTFont("ResumeChineseBold", FONT_BOLD, subfontIndex=0))


def p(text, style):
    return Paragraph(text, style)


def bullet(text, style):
    return Paragraph(f"• {text}", style)


def create_styles(theme):
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="ResumeChineseBold",
            fontSize=24,
            leading=29,
            textColor=theme["ink"],
            spaceAfter=2,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="ResumeChinese",
            fontSize=10.5,
            leading=16,
            textColor=theme["accent"],
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="ResumeChinese",
            fontSize=8.7,
            leading=13,
            alignment=TA_RIGHT,
            textColor=theme["muted"],
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="ResumeChineseBold",
            fontSize=11.5,
            leading=17,
            textColor=theme["ink"],
            spaceBefore=12,
            spaceAfter=6,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="ResumeChinese",
            fontSize=9.2,
            leading=15,
            textColor=theme["body"],
        ),
        "bodySmall": ParagraphStyle(
            "BodySmall",
            parent=base["Normal"],
            fontName="ResumeChinese",
            fontSize=8.5,
            leading=13.5,
            textColor=theme["body"],
        ),
        "job": ParagraphStyle(
            "Job",
            parent=base["Normal"],
            fontName="ResumeChineseBold",
            fontSize=10.2,
            leading=15,
            textColor=theme["ink"],
        ),
        "date": ParagraphStyle(
            "Date",
            parent=base["Normal"],
            fontName="ResumeChinese",
            fontSize=8.7,
            leading=14,
            alignment=TA_RIGHT,
            textColor=theme["muted"],
        ),
        "metric": ParagraphStyle(
            "Metric",
            parent=base["Normal"],
            fontName="ResumeChineseBold",
            fontSize=17,
            leading=21,
            textColor=theme["accent"],
        ),
        "metricLabel": ParagraphStyle(
            "MetricLabel",
            parent=base["Normal"],
            fontName="ResumeChinese",
            fontSize=7.8,
            leading=12,
            textColor=theme["muted"],
        ),
        "footer": ParagraphStyle(
            "Footer",
            parent=base["Normal"],
            fontName="ResumeChinese",
            fontSize=7.5,
            leading=10,
            alignment=TA_RIGHT,
            textColor=theme["muted"],
        ),
        "headerName": ParagraphStyle(
            "HeaderName",
            parent=base["Normal"],
            fontName="ResumeChineseBold",
            fontSize=24,
            leading=29,
            textColor=theme.get("headerInk", theme["ink"]),
            spaceAfter=2,
        ),
        "headerRole": ParagraphStyle(
            "HeaderRole",
            parent=base["Normal"],
            fontName="ResumeChinese",
            fontSize=10.5,
            leading=16,
            textColor=theme.get("headerAccent", theme["accent"]),
        ),
        "headerContact": ParagraphStyle(
            "HeaderContact",
            parent=base["Normal"],
            fontName="ResumeChinese",
            fontSize=8.7,
            leading=13,
            alignment=TA_RIGHT,
            textColor=theme.get("headerMuted", theme["muted"]),
        ),
    }


def section_title(text, styles, theme):
    table = Table([[p(text, styles["section"])]], colWidths=[174 * mm])
    table.setStyle(
        TableStyle(
            [
                ("LINEBELOW", (0, 0), (-1, -1), 0.7, theme["rule"]),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def header(styles, theme, version):
    identity = [
        p("周磊  Alex Zhou", styles["headerName"]),
        p("项目运营与商业化负责人", styles["headerRole"]),
    ]
    contact = p("成都 ｜ 18828031288<br/>mrz27315@163.com<br/>39岁", styles["headerContact"])
    photo_label = ParagraphStyle(
        "PhotoLabel",
        parent=styles["metricLabel"],
        textColor=theme.get("headerMuted", theme["muted"]),
    )
    photo = Table([[p("个人寸照<br/>待补充", photo_label)]], colWidths=[21 * mm], rowHeights=[27 * mm])
    photo.setStyle(
        TableStyle(
            [
                ("BOX", (0, 0), (-1, -1), 0.6, theme.get("photoRule", theme["rule"])),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("ALIGN", (0, 0), (-1, -1), "CENTER"),
                ("BACKGROUND", (0, 0), (-1, -1), theme["photo"]),
            ]
        )
    )
    table = Table([[identity, contact, photo]], colWidths=[103 * mm, 49 * mm, 22 * mm])
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("RIGHTPADDING", (0, 0), (1, -1), 8),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("BACKGROUND", (0, 0), (-1, -1), theme.get("headerBg", colors.white)),
                ("LEFTPADDING", (0, 0), (-1, -1), 0 if version == "A" else 5 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0 if version == "A" else 5 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 0 if version == "A" else 4 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0 if version == "A" else 4 * mm),
            ]
        )
    )
    return [table, Spacer(1, 7 * mm)]


def metrics(styles, theme):
    values = [
        ("15年", "运营与项目管理经验"),
        ("2200万+", "累计管理项目收入"),
        ("160万+", "累计服务游客"),
        ("70+场", "万人级演唱会运营保障"),
    ]
    cells = [[p(value, styles["metric"]), p(label, styles["metricLabel"])] for value, label in values]
    table = Table([cells], colWidths=[43.5 * mm] * 4)
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), theme["metricBg"]),
                ("LINEAFTER", (0, 0), (-2, -1), 0.45, theme["rule"]),
                ("LEFTPADDING", (0, 0), (-1, -1), 5 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 4 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4 * mm),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ]
        )
    )
    return table


def experience(company, title, date, overview, bullets, styles, theme):
    job_header = Table(
        [[p(f"{company}｜{title}", styles["job"]), p(date, styles["date"])]],
        colWidths=[128 * mm, 46 * mm],
    )
    job_header.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LINEBELOW", (0, 0), (-1, -1), 0.35, theme["rule"]),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    content = [job_header, Spacer(1, 2 * mm), p(overview, styles["body"])]
    content.extend([bullet(item, styles["bodySmall"]) for item in bullets])
    content.append(Spacer(1, 3 * mm))
    return KeepTogether(content)


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("ResumeChinese", 7.5)
    canvas.setFillColor(doc.theme["muted"])
    canvas.drawRightString(A4[0] - 18 * mm, 12 * mm, f"周磊｜通用求职简历｜{doc.page}")
    canvas.restoreState()


def build_resume(filename, version):
    themes = {
        "A": {
            "ink": colors.HexColor("#1E252B"),
            "body": colors.HexColor("#505B63"),
            "muted": colors.HexColor("#7B858C"),
            "accent": colors.HexColor("#3B7C8C"),
            "rule": colors.HexColor("#D8DDDE"),
            "photo": colors.HexColor("#F5F6F4"),
            "metricBg": colors.HexColor("#F4F7F6"),
            "headerInk": colors.HexColor("#1E252B"),
            "headerAccent": colors.HexColor("#3B7C8C"),
            "headerMuted": colors.HexColor("#7B858C"),
        },
        "B": {
            "ink": colors.HexColor("#152B42"),
            "body": colors.HexColor("#405160"),
            "muted": colors.HexColor("#71808C"),
            "accent": colors.HexColor("#416D89"),
            "rule": colors.HexColor("#C9D2D8"),
            "photo": colors.HexColor("#EDF1F3"),
            "metricBg": colors.HexColor("#EEF3F5"),
            "headerBg": colors.HexColor("#17324C"),
            "headerInk": colors.white,
            "headerAccent": colors.HexColor("#C4D7E1"),
            "headerMuted": colors.HexColor("#D8E3E8"),
            "photo": colors.HexColor("#24455E"),
            "photoRule": colors.HexColor("#88A1B1"),
        },
    }
    theme = themes[version]
    styles = create_styles(theme)
    OUTPUT.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(
        str(OUTPUT / filename),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=16 * mm,
        bottomMargin=18 * mm,
    )
    doc.theme = theme
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    doc.addPageTemplates([PageTemplate(id="resume", frames=[frame], onPage=footer)])

    story = []
    story.extend(header(styles, theme, version))
    story.append(section_title("职业概述", styles, theme))
    story.append(Spacer(1, 2 * mm))
    story.append(
        p(
            "15年互联网及智慧文旅项目运营经验，聚焦项目经营、商业化落地与运营体系建设。具备从0到1项目建设、多项目P&L管理、车辆资产与团队组织管理能力，以数据复盘和AI工具提升运营效率及知识沉淀。",
            styles["body"],
        )
    )
    story.append(Spacer(1, 4 * mm))
    story.append(metrics(styles, theme))
    story.append(section_title("工作经历", styles, theme))
    story.append(Spacer(1, 1 * mm))
    story.append(
        experience(
            "四川云科新能汽车技术有限公司",
            "项目总监 / 运营部负责人",
            "2020.03—至今",
            "负责多个自动驾驶商业项目的规划建设与体系化运营管理，统筹项目落地、成本管控与持续优化。",
            [
                "主导搭建景区自动驾驶项目全流程标准化运营体系，覆盖车辆调度、场地管理、安全维保与数字化档案，形成可复制的商业运营模型。",
                "统筹东安湖、花舞人间等3个大型商业项目，从可研、执行到落地运营全流程推进；制定成本控制方案，实现项目收益提升27%。",
                "构建运营数据监控、BI分析与绩效评估机制，运营效率提升25%，设备故障率降低15%。",
                "对接景区方、政府及技术团队，协调项目推进中的风险与问题；组建并带领20人以上团队，建立激励与培训体系。",
            ],
            styles,
            theme,
        )
    )
    story.append(
        experience(
            "北京路客互联网科技有限公司（Locals）",
            "成都区域运营经理",
            "2015.01—2020.01",
            "负责成都区域民宿业务从0到1开拓与经营管理，建立房源供给、上线、订单履约、入住服务和异常处理机制。",
            [
                "建立100+套民宿项目的标准化运营流程，管理房源资产规模5000万元以上，完善客户服务与风险控制体系。",
                "通过流程优化与指标管理，实现业务增长36.8%，投诉率由11%降至3%。",
                "基于用户数据分析推动产品优化与运营策略调整，转化率提升16%，复购率提升11%。",
            ],
            styles,
            theme,
        )
    )
    story.append(PageBreak())
    story.extend(header(styles, theme, version))
    story.append(section_title("工作经历（续）", styles, theme))
    story.append(Spacer(1, 1 * mm))
    story.append(
        experience(
            "成都梦旅程网络科技有限公司",
            "商家运营",
            "2011—2014",
            "负责平台商户拓展及运营管理，覆盖商户开发、线上运营支持与经营数据跟踪，推动商户活跃度及交易增长。",
            [
                "独立负责商户开发与商务洽谈，累计完成150+家商户签约入驻，建立商户分层维护机制，核心商户次月留存率保持在85%以上。",
                "指导商户完成线上店铺优化、产品设计及营销活动运营，推动所辖商户整体GMV月均环比增长15%。",
                "参与建立商户线上运营及售后服务标准流程，客诉问题解决率达98%。",
            ],
            styles,
            theme,
        )
    )
    story.append(section_title("代表项目成果", styles, theme))
    story.append(Spacer(1, 2 * mm))
    project_rows = [
        [p("东安湖智慧文旅交通项目", styles["job"]), p("项目商业化运营", styles["body"]), p("2023年项目收入530万+；项目历史累计收入1300万+；当前观光车项目规模40台；项目团队累计参与70+场万人级演唱会运营保障。", styles["bodySmall"])],
        [p("成都区域民宿业务", styles["job"]), p("区域业务从0到1", styles["body"]), p("运营房源100+；管理资产规模5000万+；GMV超过600万；入住率约80%；业务增长36.8%；投诉率降至3%。", styles["bodySmall"])],
    ]
    projects = Table(project_rows, colWidths=[47 * mm, 36 * mm, 91 * mm])
    projects.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LINEBELOW", (0, 0), (-1, -1), 0.4, theme["rule"]),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 3 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3 * mm),
            ]
        )
    )
    story.append(projects)
    story.append(section_title("专业能力", styles, theme))
    story.append(Spacer(1, 2 * mm))
    skill_rows = [
        [p("项目运营管理", styles["job"]), p("体系建设、流程优化、项目推进、绩效评估", styles["bodySmall"])],
        [p("精益与数字化管理", styles["job"]), p("BI分析、成本控制、运营监控机制搭建", styles["bodySmall"])],
        [p("资源统筹与团队管理", styles["job"]), p("跨部门协作、合作项目协调、人员培训激励", styles["bodySmall"])],
        [p("办公与AI工具", styles["job"]), p("Excel数据分析、PowerPoint汇报设计、Word制度文件、Trello、ChatGPT、DeepSeek", styles["bodySmall"])],
    ]
    skills = Table(skill_rows, colWidths=[47 * mm, 127 * mm])
    skills.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LINEBELOW", (0, 0), (-1, -1), 0.35, theme["rule"]),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 3 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 3 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3 * mm),
            ]
        )
    )
    story.append(skills)
    story.append(section_title("教育与证书", styles, theme))
    story.append(Spacer(1, 2 * mm))
    education = Table(
        [[p("四川工程职业技术大学｜市场营销｜本科", styles["body"]), p("2006—2010", styles["date"])]],
        colWidths=[128 * mm, 46 * mm],
    )
    education.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0)]))
    story.append(education)
    story.append(Spacer(1, 1 * mm))
    story.append(p("专业证书：安全管理人员A证", styles["body"] ))
    doc.build(story)


if __name__ == "__main__":
    register_fonts()
    build_resume("周磊_通用求职简历_A_极简商务.pdf", "A")
    build_resume("周磊_通用求职简历_B_咨询风.pdf", "B")
