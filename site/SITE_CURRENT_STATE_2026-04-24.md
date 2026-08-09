# Jinling Steel 网站当前状态与后续核查文档

更新时间：2026-04-24  
适用目录：`site20260420第二版/`  
目的：把当前网站内容、信息架构、设计理念、SEO/GEO 原则、图片系统与后续计划集中记录，方便之后继续审查、替换素材和统一标准。

> 说明：旧的 `SITE_README.md` 仍可作为技术参考，但其中部分页面数量已经偏旧。以本文件和当前 `npm run build` 输出为准。

---

## 1. 当前项目概览

| 项目 | 当前状态 |
|---|---|
| 技术栈 | Next.js 16 + React 19 + Tailwind CSS 4 |
| 内容方式 | `content/` 下 Markdown 文件驱动，frontmatter + remark 渲染 |
| 生成方式 | SSG 静态生成 |
| 当前构建结果 | 237 个静态页面成功生成 |
| SEO 基础 | canonical、sitemap、metadata、内部链接已做过一轮修正 |
| 图片策略 | 真实素材优先；缺失或不够档次的图可临时用 Image2 生成，并登记在 manifest |

最近一次验证命令：

```bash
npm run lint
npm run build
```

两项均已通过。

---

## 2. 核心品牌判断

网站当前不是单纯的“钢材目录站”，而是要传达一个更高级的供应商判断：

> The hard part is not buying steel. It is getting the details right.

对应中文理解：

> 买钢本身不难，难的是把表面、加工、保护、验收、放货、包装这些容易出问题的细节做稳。

当前内容的主基调：

| 层面 | 方向 |
|---|---|
| 品牌气质 | 克制、可信、工业精炼，不做浮夸口号 |
| 可信来源 | 29 年经验、150+ 客户、10+ 国家、25,000 m² 双设施、60+ 自动化产线 |
| 核心差异 | 不只是卖标准钢，而是知道哪些细节最容易出错，并在这些地方做控制 |
| 文字风格 | 短句、买家视角、少用内部视角，不堆技术词 |
| 转化方式 | 不强推报价，而是把询盘变成“技术确认、规格确认、风险确认” |

需要持续保留的品牌句：

```text
The steel may be standard. The way it is processed, protected, and released usually is not.
```

---

## 3. 当前信息架构

主导航当前由 `src/lib/site-navigation.ts` 统一管理。Header、Footer、首页产品卡和首页表面卡已经开始复用同一份入口数据，避免名称和链接不一致。

### 3.1 主导航

| 一级入口 | 当前作用 |
|---|---|
| Home | 回到首页，桌面顶部已恢复 |
| Products | 产品形态、表面、牌号入口 |
| Solutions | 行业应用与加工能力 |
| Resources | Knowledge Base、Insights、Datasheets |
| About | 品牌信任页 |
| Contact Us | 转化承接页 |

### 3.2 Products 二级结构

| Core Forms | Finish Options | Core Grades |
|---|---|---|
| Coil | 8K Mirror Finish | 304 / 304L |
| Sheet & Plate | AFP (Anti-Fingerprint) | 316 / 316L |
| Bar Forms | No.4 Brushed | 430 |
| Tube & Pipe | Hairline | 201 |
|  | 2B Finish | 2205 Duplex |

补充说明：

- `BA Finish` 已有页面和 datasheet，但当前没有放入顶部主菜单和首页表面卡，主要是为了保持主入口克制。
- 产品详情内容仍包含更深层的产品：round bar、flat bar、angle bar、square & hex bar、industrial pipe、sanitary tube、decorative pipe。
- 当前策略是“A 为主，但二级写得很强”：一级导航简洁，二级菜单要能直接把买家带到正确页面。

### 3.3 Solutions 二级结构

| Application Lines | Process Capabilities |
|---|---|
| Kitchen Equipment | Surface Finishing |
| Food & Beverage | Cut-to-Length |
| Architecture | Slitting & Edging |
| Medical & Pharma | Protective Coating |
| Oil & Gas | Protective Film |
| Elevator & Interiors | Packaging & Logistics |
| Chemical Process |  |
| Automotive Exhaust |  |
| Water Treatment |  |

### 3.4 Resources 二级结构

| Knowledge Base | China Market Notes | Datasheets |
|---|---|---|
| Grades & Selection | Weekly Market Reports | Grade Library |
| Corrosion & Service Limits | Monthly Summaries | Finish Library |
| Processing & Fabrication | Policy & Anti-Dumping | Verification References |
| Specs & Verification | Annual Review & Outlook | Application Bridges |
| Buying & Release |  |  |

---

## 4. 当前页面数量与内容分布

当前内容文件统计：

| 类型 | 内容数量 | 说明 |
|---|---:|---|
| Products | 11 | 产品主类和子产品页 |
| Surfaces | 6 | 2B、8K、AFP、BA、Hairline、No.4 |
| Grades | 5 | 201、304、316L、430、2205 |
| Applications | 9 | 行业应用页 |
| Capabilities | 6 | 加工能力页 |
| Datasheets | 10 | 5 个牌号 + 5 个表面 finish |
| Insights | 15 | 市场周报与年度/政策类内容 |
| Knowledge Base | 159 | 技术知识库文章 |

构建输出总计：237 个静态页面。

---

## 5. 首页当前状态

首页当前承担三件事：

| 模块 | 当前作用 |
|---|---|
| Hero | 品牌定位 + 真实产线/金属氛围图 + Request Pricing / View Products |
| TrustBar | 用 4 个轻量数字建立信任，不压迫阅读 |
| ProductsGrid | 4 个主产品入口，现已使用真实产品图 |
| SurfaceFinishes | 5 个表面入口，现已使用真实表面图，名称与导航统一 |
| WhyJinling | 用“细节控制”解释 Jinling 的价值，并加入产线图 |
| LatestInsight | 承接市场观察能力 |
| CTABanner | 收束到报价与技术问题 |

首页的设计原则：

- 首页可以比导航更自然，导航负责结构，首页负责让买家继续往下看。
- Hero 不要变成“万能目录”，重点是定调。
- 产品入口要短、清楚、像 Apple 一样收敛，但 SEO 页面内部要展开关键词。
- 首页图片要服务于信任感和材质感，不做廉价图库拼贴。

当前首页已补上的图片：

| 位置 | 当前图片 |
|---|---|
| Hero | `/images/hero/home-hero.jpg` |
| Products: Coil | `/images/products/coil/hero.jpg` |
| Products: Sheet & Plate | `/images/products/sheet/hero.jpg` |
| Products: Bar Forms | `/images/products/bar/hero.jpg` |
| Products: Tube & Pipe | `/images/products/tube/hero.jpg` |
| Surface: 8K Mirror Finish | `/images/surfaces/no8-mirror/hero.jpg` |
| Surface: AFP | `/images/surfaces/afp/hero.jpg` |
| Surface: No.4 Brushed | `/images/surfaces/no4-brushed/hero.jpg` |
| Surface: Hairline | `/images/surfaces/hairline/hero.jpg` |
| Surface: 2B Finish | `/images/surfaces/2b/hero.jpg` |
| Why Jinling | `/images/about/production-line.jpg` |

---

## 6. 页面类型设计理念

### 6.1 About

定位：品牌信任页 60%，工厂与流程页 40%。

理想状态：

- 不是公司履历堆砌，而是回答“为什么这个供应商更稳”。
- 重点讲 Jinling 识别并控制常见不确定点。
- 内容要有人味，不像内部宣传稿。
- 工厂、团队、QC、产线图片要承担信任，不只做装饰。

核心表达：

```text
We do not only sell steel. We know where steel orders usually go wrong, and we work carefully in those places.
```

### 6.2 Products

定位：销售转化页 + SEO 承接页。

主产品页当前重点：

| 页面 | 首屏应突出 |
|---|---|
| Coil | 宽度、厚度、分条、表面、放货稳定性 |
| Sheet & Plate | 平整度、表面、定尺、包装保护 |
| Bar Forms | 形状覆盖、尺寸稳定、加工适配 |
| Tube & Pipe | 工业/装饰/卫生用途分流，壁厚与焊缝/抛光 |

页面内容不应只讲“如何选择”，还要讲 Jinling 的优势：

- 能提前确认容易出错的规格点。
- 能把表面、贴膜、包装与应用场景连起来。
- 能把放货、检验、MTC、出口包装做成流程，而不是临时补救。

### 6.3 Surfaces

定位：Jinling 的强识别区，应比普通产品页更有品牌重量。

共用 50%，差异化 50%：

| Finish | 差异化重点 |
|---|---|
| 8K Mirror Finish | 反射、雾影、针孔、保护、装饰应用 |
| AFP | 防指纹涂层、触感、清洁、涂层稳定性 |
| No.4 Brushed | 短拉丝、方向一致性、厨房/设备面板 |
| Hairline | 长纹理、装饰感、批次一致性 |
| 2B Finish | 基础表面、后续加工、成本与通用性 |
| BA Finish | 亮退、比 2B 更亮但不是镜面，适合补充长尾需求 |

注意：

- Surface 页面要直接点出常见不确定点，不要只展示漂亮表面。
- 表格可以有，但不要太多；每页必要时浓缩成 1-2 个高价值表。
- 对保护膜相关内容，`protective-film` 页面要强调采用进口保护膜，但不要写成单一品牌绑定。

### 6.4 Solutions

定位：应用场景与加工能力的桥梁。

原则：

- 不要泛泛写行业介绍，要写买家在这个场景中最担心什么。
- Industry pages 讲应用风险、常见选择、可交付规格。
- Capability pages 讲流程控制、失误点、验收和放货。
- “Why buyers start here” 这类模块如果显得站内自夸，应保持克制或删除。

### 6.5 Knowledge Base

定位：SEO 长尾 + 专业信任 + 转化前置。

当前原则：

- 右侧相关文章已不再作为主形态，相关文章放在文章底部。
- 底部相关阅读按“主题接近”排序，而不是随意推荐。
- 所有文章应保持一致的行间距、左右留白和阅读宽度。
- 表格可用，但必须少而精，优先浓缩为 1-2 个关键表。
- 文章结尾不应只给知识总结，也要轻触转化：规格、表面、检验、包装、询盘时该确认什么。

### 6.6 Datasheets

定位：不是普通 PDF 下载页，而是“买家快速核对页”。

当前内容：

- 5 个 grade datasheets：201、304/304L、316/316L、430、2205 Duplex。
- 5 个 finish datasheets：8K、AFP、BA、Hairline、No.4。

命名方向：

- 更高级、更克制，不要像普通资料下载站。
- 强调 reference、verification、application bridge。
- 允许少量表格，但只保留最值钱的参数。

---

## 7. SEO 与 GEO 原则

### 7.1 SEO

已完成或应保持的原则：

- canonical 与尾斜杠内链已做过一轮修正。
- 核心页 title/description 要短，不堆关键词。
- 入口名可以高级和简短，但页面 title、H1、正文里要自然覆盖 stainless steel coil、sheet、bar、tube、surface finish 等搜索词。
- Hub 页避免内部视角文案，比如“why this hub exists”这类后台思维。
- 不要因为 SEO 把页面写成低质关键词列表。

### 7.2 GEO / AI 引用优化

当前建议方向：

- 每个核心页保留清晰定义句，方便 AI 摘取。
- 重要判断用短段落和表格表达，避免藏在长段里。
- 对 304/304L、316/316L、2B/BA/No.4/Hairline、coil/sheet/tube 等常见比较，使用明确对照结构。
- 内容要能回答“什么时候选什么”“哪里容易出错”“采购时要确认什么”。
- 不写无法证实的绝对化承诺，AI 引用时更偏好稳健、可验证表述。

---

## 8. 图片系统

主规范文件：

| 文件 | 作用 |
|---|---|
| `public/images/IMAGE_GUIDE.md` | 全站图片目录、命名、尺寸、品牌禁用词 |
| `public/images/generated/README.md` | 临时 AI 图片使用规则 |
| `public/images/generated/manifest.json` | 每张生成图的页面、用途、prompt、替换路径记录 |

### 8.1 真实图片目录

```text
public/images/
├── hero/
├── products/
├── surfaces/
├── grades/
├── applications/
├── capabilities/
├── about/
├── common/
├── generated/
└── insights/
```

### 8.2 命名规则

| 图片角色 | 文件名 |
|---|---|
| 页面主图 | `hero.jpg` |
| 图库细节 | `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` |
| 行业场景 | `scene-1.jpg`, `scene-2.jpg` |
| 流程图/过程图 | `process.jpg` |
| 包装图 | `packaging.jpg` |
| 对比图 | `comparison.jpg` |
| 视频封面 | `video-cover.jpg` |

### 8.3 临时生成图规则

生成图路径：

```text
public/images/generated/<family>/<page-or-topic>/<slot>-ai-v1.webp
```

真实图替换路径：

```text
public/images/<family>/<slug>/<slot>.jpg
```

当前 manifest 状态：

| 项目 | 数量 |
|---|---:|
| manifest 记录资产 | 34 |
| 已连接到页面或组件 | 14 |
| 仅生成未连接 | 8 |
| 需要真实图片，不建议生成 | 4 |
| 建议继续生成/临时使用 | 29 |

### 8.4 哪些地方可以用生成图

可以：

- 缺少真实图的页面氛围图。
- 表面 finish 的 swatch 或轻量视觉提示。
- 子产品几何形态不匹配时的临时 hero。
- 不承担证据责任的过程提示图。

不可以：

- 检验证据、证书、MTC、NDT、hydro test。
- 真实缺陷照片。
- 客户现场、装柜证明、团队/创始人肖像。
- 带品牌 logo、仪表读数、证书文字的假图。

### 8.5 后续替换流程

1. 发现页面图片缺失或不够档次。
2. 判断是否属于 proof layer；如果是 proof layer，只能等真实照片。
3. 如果允许生成，保存到 `public/images/generated/...`。
4. 在 `manifest.json` 记录 route、slot、prompt、generatedPath、finalRealPath。
5. 页面临时引用 generatedPath。
6. 真实照片到位后，放入 canonical 路径，例如 `/images/products/flat-bar/hero.jpg`。
7. 更新页面引用，并把 manifest action 改为 `replaced_with_real`。

---

## 9. 当前仍要重点核查的事项

| 优先级 | 项目 | 说明 |
|---|---|---|
| P0 | 浏览器视觉 QA | 检查真实页面里的留白、节奏、表格宽度、hero stats 舒服度 |
| P0 | 导航一致性 | 继续确认 Header、Footer、首页入口、hub 入口是否全部同名同链接 |
| P0 | 图片真实感 | 替换“电脑图、办公室图、与行业不符图”等弱素材 |
| P1 | BA Finish 入口 | 决定是否让 BA 进入 Surface 主入口，还是只保留长尾页 |
| P1 | Knowledge Base 底部推荐 | 确认“主题接近”排序是否真的自然 |
| P1 | Product 子页面 | 继续细化 round/flat/angle/square-hex、industrial/sanitary/decorative tube 的版式 |
| P1 | 表格密度 | 知识页和 datasheets 控制表格数量，保留高价值表 |
| P2 | 视频封面 | 为 No.8、AFP 等视频补更高级封面 |
| P2 | Kary 肖像 | About/KaryQuote 需要真实、得体的人物素材 |

---

## 10. 关键文件索引

| 文件 | 作用 |
|---|---|
| `src/lib/site-navigation.ts` | 全站核心导航数据 |
| `src/components/layout/Header.tsx` | 顶部导航、mega menu、移动菜单 |
| `src/components/layout/Footer.tsx` | 页脚入口，已复用导航数据 |
| `src/app/page.tsx` | 首页模块顺序 |
| `src/components/sections/Hero.tsx` | 首页 hero |
| `src/components/sections/ProductsGrid.tsx` | 首页 4 个产品入口 |
| `src/components/sections/SurfaceFinishes.tsx` | 首页表面入口 |
| `src/components/sections/WhyJinling.tsx` | 首页品牌信任模块 |
| `src/components/content/ArticleLayout.tsx` | 知识文章阅读体验与底部推荐 |
| `src/components/content/ContentPage.tsx` | Markdown 内容页基础渲染 |
| `public/images/IMAGE_GUIDE.md` | 图片规范 |
| `public/images/generated/manifest.json` | AI 临时图片替换记录 |

---

## 11. 后续工作建议顺序

建议不要同时开太多方向，按下面顺序慢慢做：

1. 先做真实浏览器视觉 QA：首页、Products、Surfaces、Solutions、Knowledge article、Datasheets、About、Contact。
2. 再核查导航和入口：Header、Footer、首页卡片、hub 页卡片、文章底部推荐。
3. 然后处理图片替换：先 P0 弱图，再 P1 子产品图，最后视频封面和补充场景图。
4. 接着继续打磨核心转化页：Products、Surfaces、Capabilities、Contact。
5. 最后做 SEO/GEO 二次审查：title、description、H1、定义句、对照表、FAQ 和内部链接。

---

## 12. 当前审美底线

这套站点后续修改时，不应偏离下面的标准：

- 不做廉价 B2B 模板感。
- 不做大面积彩色渐变和空泛口号。
- 不把页面写成“我们有、我们能、我们最好”的内部宣传稿。
- 不为了 SEO 牺牲买家的阅读判断。
- 不让 AI 生成图承担真实证明责任。
- 不让导航、Footer、首页入口各用一套名称。
- 不让表格挤压阅读留白。
- 不让图片只是装饰，要解释材质、工厂、流程或应用。

一句话标准：

> 克制但不空，专业但不冷，销售但不急。
