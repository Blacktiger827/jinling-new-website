# Jinling Steel 网站项目文档

> 最后更新: 2026-04-20

---

## 1. 项目概览

本项目是 **Jinling Steel (金陵不锈钢)** 的全新企业官网，采用现代前端技术栈构建，以 SEO 和内容营销为核心策略。

| 项目 | 说明 |
|------|------|
| 框架 | Next.js 16 + React 19 |
| 样式 | Tailwind CSS 4 + `@tailwindcss/typography` |
| 内容 | Markdown → remark → HTML (使用 gray-matter 解析 frontmatter) |
| 渲染模式 | SSG (Static Site Generation)，全部 217 页静态生成 |
| 域名 | https://www.jinlingmetals.com |

### 本地开发

```bash
cd site
npm install        # 安装依赖
npm run dev        # 启动开发服务器 → http://localhost:3000
```

### 构建与部署

```bash
npm run build      # 构建静态页面 + 自动生成 sitemap.xml 和 robots.txt
npm run start      # 本地预览构建结果
```

构建时会自动执行 `postbuild` 脚本，通过 `next-sitemap` 生成 sitemap。

---

## 2. 网站结构 (Route Inventory)

全站共 **217 个静态页面**，结构如下：

| 路由 | 页面数 | 说明 |
|------|--------|------|
| `/` | 1 | 首页 (Homepage) |
| `/products` | 1 + 11 = **12** | 产品总览 + 11 个产品详情页 |
| `/surfaces` | 1 + 5 = **6** | 表面处理总览 + 5 个详情页 |
| `/grades` | 1 + 5 = **6** | 钢种牌号总览 + 5 个详情页 |
| `/solutions` | **1** | 解决方案总览 |
| `/solutions/applications` | 1 + 9 = **10** | 行业应用总览 + 9 个详情页 |
| `/solutions/capabilities` | 1 + 6 = **7** | 加工能力总览 + 6 个详情页 |
| `/knowledge-base` | 1 + 145 = **146** | 知识库总览 + 145 篇技术文章 (5 个分类) |
| `/insights` | 1 + 15 = **16** | Weekly Insights 总览 + 15 篇周报 |
| `/datasheets` | 1 + 5 = **6** | 数据手册总览 + 5 个 datasheet 详情页 |
| `/about` | **1** | 关于我们 |
| `/contact` | **1** | 主承接页 (报价 / 技术咨询 / 样品 / 来访) |
| `/get-quote` | **1** | 历史入口，永久重定向到 `/contact` |
| **合计** | **217** | |

### 产品详情页 (11 页)

- Stainless Steel Coil (卷板)
- Stainless Steel Sheet (平板)
- Stainless Steel Bar (棒材)
- Stainless Steel Round Bar (圆钢)
- Stainless Steel Flat Bar (扁钢)
- Stainless Steel Square & Hex Bar (方钢/六角钢)
- Stainless Steel Angle Bar (角钢)
- Stainless Steel Tube & Pipe (管材)
- Stainless Steel Industrial Pipe (工业管)
- Stainless Steel Decorative Pipe (装饰管)
- Stainless Steel Sanitary Tube (卫生管)

### 表面处理详情页 (5 页)

- 2B Finish
- No.4 Brushed Finish (拉丝)
- Hairline Finish (发纹)
- 8K Mirror Finish (镜面)
- AFP Finish (防指纹)

### 钢种牌号详情页 (5 页)

- 201 Stainless Steel
- 304 Stainless Steel
- 316L Stainless Steel
- 430 Stainless Steel
- 2205 Duplex Stainless Steel

### 行业应用详情页 (9 页)

- Architecture (建筑装饰)
- Elevator Decoration (电梯装潢)
- Food & Beverage (食品饮料)
- Kitchen Equipment (厨房设备)
- Medical & Pharmaceutical (医疗制药)
- Chemical & Petrochemical (化工石化)
- Automotive Exhaust (汽车排气)
- Oil & Gas (石油天然气)
- Water Treatment & Desalination (水处理)

### 加工能力详情页 (6 页)

- Surface Finish Capability (表面加工)
- Slitting & Edging (分条/修边)
- Cut-to-Length (定尺剪切)
- Protective Film (贴膜)
- Protective Coating (涂层)
- Packaging & Logistics (包装物流)

---

## 3. 导航结构

顶部导航栏包含 **5 个主项**：

### 3.1 Products (Mega Menu)

展开后分三列：

| By Form (产品形态) | By Surface (表面处理) | By Grade (钢种牌号) |
|--------------------|-----------------------|---------------------|
| Coil | 2B Finish | 201 |
| Sheet | No.4 Brushed | 304 |
| Bar | Hairline | 316L |
| Round Bar | 8K Mirror | 430 |
| Flat Bar | AFP | 2205 Duplex |
| Square & Hex Bar | | |
| Angle Bar | | |
| Tube & Pipe | | |
| Industrial Pipe | | |
| Decorative Pipe | | |
| Sanitary Tube | | |

### 3.2 Solutions (Mega Menu)

展开后分两列：

| By Industry (行业应用) | By Capability (加工能力) |
|-----------------------|------------------------|
| Architecture | Surface Finishing |
| Elevator Decoration | Slitting & Edging |
| Food & Beverage | Cut-to-Length |
| Kitchen Equipment | Protective Film |
| Medical | Protective Coating |
| Chemical | Packaging & Logistics |
| Automotive Exhaust | |
| Oil & Gas | |
| Water Treatment | |

### 3.3 Resources (Dropdown)

- Knowledge Base (145 篇技术文章)
- Weekly Insights (15 篇市场周报)
- Datasheets (5 个牌号数据手册)

### 3.4 About

直接链接到 `/about` 页面

### 3.5 Contact Us (CTA 按钮)

醒目的品牌色按钮，链接到 `/contact`，并按意图承接到报价、技术咨询、样品/MTC、工厂来访等具体锚点。

### 移动端

响应式设计，移动端使用 hamburger menu (汉堡菜单)，展开后显示完整导航。

---

## 4. 内容目录说明

所有内容以 Markdown 文件形式存储在 `content/` 目录下：

```
content/
├── products/          # 11 个产品 .md 文件
├── surfaces/          # 5 个表面处理 .md 文件
├── grades/            # 5 个钢种牌号 .md 文件
├── applications/      # 9 个行业应用 .md 文件
├── capabilities/      # 6 个加工能力 .md 文件
├── blog/              # 145 篇知识库文章 .md 文件
├── insights/          # 15 篇 Weekly Insights .md 文件
├── datasheets/        # 5 个牌号数据手册 .md 文件
└── pillar-pages/      # 12 个总览/枢纽页面 .md 文件
```

### Pillar Pages (12 个总览页)

这些是各版块的入口页面，采用 Hub-Spoke 内链结构：

- `products-overview.md` — 产品总览
- `surface-finish-overview.md` — 表面处理总览
- `grades-overview.md` — 钢种牌号总览
- `solutions-overview.md` — 解决方案总览
- `applications-overview.md` — 行业应用总览
- `capabilities-overview.md` — 加工能力总览
- `knowledge-base-overview.md` — 知识库总览
- `weekly-insights-overview.md` — 周报总览
- `datasheets-overview.md` — 数据手册总览
- `about.md` — 关于我们
- `contact.md` — 联系我们 / 主承接页说明
- `get-quote.md` — 历史报价页内容存档（当前 `/get-quote` 已永久重定向到 `/contact`）

### 知识库文章分类 (145 篇)

Knowledge Base 文章当前统一为 5 个主分类：
- Grades & Selection（牌号与选材）
- Processing & Fabrication（加工与制造）
- Corrosion & Service Limits（腐蚀与服役边界）
- Specs & Verification（规格与验证）
- Buying & Release（采购与放行）

---

## 5. 设计系统

### 5.1 色彩方案

| 用途 | 颜色代码 | 说明 |
|------|----------|------|
| Brand Dark | `#0D141B` | 主色调，导航栏/页脚/标题 |
| Accent | `#F6D044` | 强调色，CTA 按钮/高亮元素 |
| Background | `#FFFFFF` | 页面底色 |

### 5.2 字体

- **主字体**: 稳定系统 sans-serif 字体栈
- 英文正文使用系统无衬线字体，重点标题局部搭配 serif，兼顾部署稳定性与阅读质感

### 5.3 设计风格

- **极简现代风** — 干净的界面，去除多余装饰
- **大留白** — 充足的 padding 和 margin，内容呼吸感强
- **卡片式布局** — 产品/文章列表使用卡片网格展示
- **清晰的视觉层级** — 通过字号、颜色、间距建立信息层次

### 5.4 响应式设计

- Desktop: 完整导航栏 + Mega Menu
- Tablet: 自适应网格布局
- Mobile: Hamburger Menu + 单列布局

---

## 6. SEO 配置

### 6.1 Sitemap 与 Robots

通过 `next-sitemap` 自动生成：

- **sitemap.xml** — 包含公开可索引 URL（不包含历史重定向入口，如 `/get-quote`）
- **robots.txt** — 自动生成，允许搜索引擎抓取
- 构建时自动执行 (`postbuild` script)

### 6.2 优先级设置

| 页面类型 | Priority | changefreq |
|----------|----------|------------|
| 首页、产品总览、牌号总览、Contact | **1.0** | weekly |
| 知识库总览、Insights、Datasheets、About、Contact | **0.8** | weekly |
| 知识库文章 (`/knowledge-base/*`) | **0.6** | weekly |
| 其他页面 | **0.7** | weekly |
| Insights 总览 | 0.8 | **daily** |

### 6.3 Structured Data (JSON-LD)

- **Organization** — 公司信息结构化数据
- 包含公司名称、网址、Logo 等信息
- 帮助 Google 在搜索结果中展示公司信息卡

### 6.4 Meta Tags

- **Title Template**: `{页面标题} | Jinling Steel`
- **Description**: 每页独立 meta description
- **Open Graph**: 完整 OG 标签，支持社交媒体分享预览
- **Semantic HTML**: 使用语义化标签 (h1-h6, article, section, nav, etc.)

### 6.5 内链策略

采用 **Hub-Spoke** 模型：
- 每个 Pillar Page (总览页) 是 Hub，链接到所有子页面
- 子页面之间通过 Related Content 互相链接
- 知识库文章链接到相关产品/牌号/表面处理页面

---

## 7. 图片管理规范

### 7.1 目录结构

所有图片存放在 `public/images/` 下，按内容类型和 slug 组织：

```
public/images/
├── common/            # 通用图片 (Logo, Hero 背景等)
├── products/          # 产品图片 (按 slug 子目录)
│   ├── coil/
│   ├── sheet/
│   └── ...
├── surfaces/          # 表面处理图片
├── grades/            # 钢种牌号图片
├── applications/      # 行业应用图片
├── capabilities/      # 加工能力图片
├── insights/          # 周报配图
└── about/             # 关于我们页面图片
```

### 7.2 SEO 图片命名规则

> **这一条对 SEO 至关重要！**

图片文件名必须具有描述性，使用英文小写 + 连字符：

| 正确示例 | 错误示例 |
|----------|----------|
| `stainless-steel-8k-mirror-finish-polishing-line.jpg` | `IMG_2847.jpg` |
| `304-stainless-steel-coil-warehouse.jpg` | `photo1.jpg` |
| `jinling-steel-slitting-line-precision.jpg` | `DSC_0032.JPG` |
| `sanitary-tube-internal-polishing-ra04.jpg` | `image (3).png` |

**命名格式**: `{product/topic}-{description}-{detail}.{ext}`

规则：
- 文件名中包含目标关键词
- 使用连字符 `-` 分隔单词 (不用下划线)
- 全部小写
- 避免数字编号或相机默认命名

### 7.3 Alt Text 规范

在 Markdown 中使用有描述性的 alt text：

```markdown
![304 stainless steel coil in Jinling warehouse — 6000 ton inventory](/images/products/coil/hero.jpg)
```

规则：
- Alt text 必须描述图片实际内容
- 自然地包含 1 个相关关键词
- 长度控制在 125 个字符以内
- 不要写 "image of..." 或 "photo of..."

### 7.4 图片格式与尺寸

| 用途 | 格式 | 推荐尺寸 | 压缩质量 |
|------|------|----------|----------|
| Hero 大图 | WebP / JPG | 1600 x 900 px | 80% |
| 产品详情图 | WebP / JPG | 1200 x 800 px | 80% |
| 图表/数据图 | PNG | 1000 x 600 px | Lossless (无损) |
| OG 社交分享图 | JPG | 1200 x 630 px | 85% |

### 7.5 图片优先级 — 先准备这些图

**Priority 1 — 首页 + 核心页面 Hero 图** (必须最先准备)

- `common/hero-homepage.jpg` — 首页主视觉
- `products/coil/hero.jpg` — 卷板产品 Hero
- `products/sheet/hero.jpg` — 平板产品 Hero
- `surfaces/8k-mirror/hero.jpg` — 镜面处理 Hero
- `about/factory-exterior.jpg` — 工厂外景

**Priority 2 — 产品详情图**

- 其余所有产品的 Hero 图
- 表面处理工艺过程图
- 加工设备/产线图片

**Priority 3 — 应用场景 + 博客**

- 各行业应用场景照片 (建筑项目、厨房设备、电梯内饰等)
- Weekly Insight 配图/图表

---

## 8. 如何添加新文章

### 8.1 添加知识库文章 (Knowledge Base)

1. 在 `content/blog/` 目录下创建新的 `.md` 文件
   - 文件名使用英文小写 + 连字符，例如: `304-vs-316-welding-guide.md`
   - 第一行必须是 `# 标题`

2. 准备配图 (如有)
   - 在 `public/images/blog/{slug}/` 下创建子目录
   - 按照 7.2 命名规则放置图片

3. 在文章中引用图片
   ```markdown
   ![descriptive alt text](/images/blog/304-vs-316-welding/comparison-chart.jpg)
   ```

4. 更新文章索引
   - 同时更新 `articles.json` 文件 (如果存在)，确保新文章出现在列表中

5. 重新构建
   ```bash
   npm run build
   ```

### 8.2 添加 Weekly Insight

1. 在 `content/insights/` 下创建 `.md` 文件
2. 文件名格式参考已有文件的命名模式
3. 第一行为 `# 标题`
4. 重新构建

### 8.3 添加新产品/表面/牌号

1. 在对应的 `content/{type}/` 目录创建 `.md` 文件
2. 在 `public/images/{type}/{slug}/` 添加图片
3. 更新对应的 Pillar Page (总览页) 中的链接
4. 重新构建并检查导航是否需要更新

---

## 9. 如何在另一台电脑运行

### 环境要求

- **Node.js 18+** (推荐使用 LTS 版本)
- npm (随 Node.js 一起安装)

### 步骤

```bash
# 1. 将项目文件夹复制到新电脑

# 2. 进入 site 目录
cd site

# 3. 安装依赖
npm install

# 4. 启动开发服务器
npm run dev

# 5. 打开浏览器访问
# http://localhost:3000
```

### 构建生产版本

```bash
npm run build    # 构建静态页面 + 生成 sitemap
npm run start    # 本地预览生产版本 (http://localhost:3000)
```

### 部署到 Vercel

```bash
npx vercel       # 一键部署到 Vercel (需要 Vercel 账号)
```

---

## 10. 当前评价与待办

### 优势

- **217 页全静态生成** — 页面加载极快，TTFB 接近零
- **完整 SEO 基础设施** — sitemap.xml, robots.txt, structured data, semantic HTML 全部就位
- **丰富的技术内容** — 145 篇知识库文章 + 15 篇市场周报，覆盖不锈钢全品类
- **Hub-Spoke 内链结构** — Pillar Pages → 子页面的清晰链接拓扑，有利于搜索引擎理解站点结构
- **响应式设计** — 适配桌面端、平板和手机
- **现代技术栈** — Next.js 16 + React 19 + Tailwind CSS 4，维护性好

### 待完善项目

| 优先级 | 事项 | 说明 |
|--------|------|------|
| **P0** | 图片补充 | 目前全部页面没有实际图片，需要补充产品实拍图、工厂照片、应用场景图。参考第 7.5 节优先级顺序 |
| **P0** | 表单接入 | `Contact Us` 主承接页需要接入真实表单服务 (Email API，如 Resend / SendGrid)，并按报价/技术咨询/样品等入口区分提交类型 |
| **P1** | Weekly Insights 补全 | 目前只有 15 篇 (最近的)，旧站有 88 篇历史周报，需要迁移 |
| **P1** | Vercel 部署 | 网站准备好后执行 `npx vercel` 一键部署 |
| **P1** | Favicon | 需要替换为 Jinling Steel 品牌 Logo |
| **P2** | Google Analytics | 部署后接入 GA4 追踪用户行为 |
| **P2** | Google Search Console | 部署后提交 sitemap，监控索引状态 |
| **P2** | OG 分享图 | 为主要页面制作 1200x630 的社交分享预览图 |

---

## 附录: 技术栈版本

| 技术 | 版本 |
|------|------|
| Next.js | 16.2.3 |
| React | 19.2.4 |
| Tailwind CSS | 4.x |
| TypeScript | 5.x |
| next-sitemap | 4.2.3 |
| remark (Markdown 处理) | 15.x |
| Node.js (最低要求) | 18+ |
