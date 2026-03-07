# AI编程毕业名片H5

基于AI编程课程的学习成果展示网站，展示1个月AI编程实战的4款产品和个人学习复盘。

## 项目特点

- 纯静态H5网站，无后端依赖
- 移动端优先设计，响应式适配平板和PC端
- 配置化数据管理，便于维护和个性化修改
- 一键部署至Vercel，全球访问

## 技术栈

- HTML5 + CSS3
- Vanilla JavaScript（原生JS，无框架）
- Font Awesome 图标库
- 响应式设计（375px-414px移动端，768px-1199px平板，1200px+ PC端）

## 部署说明

### 方式一：GitHub + Vercel 自动部署（推荐）

1. **克隆或Fork仓库**
   ```bash
   git clone https://github.com/[你的账号]/ai-coding-graduation-card.git
   ```

2. **关联Vercel**
   - 登录 [Vercel](https://vercel.com)
   - 点击 "Import Project"
   - 选择此GitHub仓库
   - 点击 "Deploy" 完成部署

3. **自定义域名（可选）**
   - 在Vercel项目设置中
   - 进入 "Domains" 标签页
   - 添加自定义域名

### 方式二：本地部署预览

1. **安装本地服务器**
   ```bash
   # 使用Python启动简单HTTP服务器
   python -m http.server 8000
   
   # 或使用Node.js的http-server
   npx http-server -p 8000
   ```

2. **访问网站**
   ```
   http://localhost:8000
   ```

## 内容修改

所有展示内容（个人信息、产品、复盘等）均在 `assets/js/config.js` 中修改，修改后提交GitHub，Vercel自动同步更新。

### 主要配置项

#### 1. 个人信息
```javascript
personal: {
  name: "XX的AI编程毕业名片",  // 修改为你的姓名/昵称
  slogan: "融合学习成果 · 探索产品价值",  // 修改为你的标语
  intro: "1个月AI编程实战，从0到1落地4款AI产品"  // 修改为你的简介
}
```

#### 2. 产品信息
```javascript
products: [
  {
    id: 1,
    name: "产品名称",
    value: "产品核心价值描述",
    features: ["功能1", "功能2", "功能3"],
    links: [
      { type: "主链接", url: "https://your-product-url.com" }
    ],
    icon: "link"  // Font Awesome图标名称
  }
]
```

#### 3. 学习复盘
```javascript
review: {
  content: "你的学习复盘内容...",
  highlight: ["关键词1", "关键词2"]  // 需要高亮的关键词
}
```

#### 4. 底部信息
```javascript
footer: {
  deployDesc: "部署说明文字",
  techStack: "技术栈说明",
  contact: "联系方式（可选）"  // 留空则不显示
}
```

### 样式定制

如需修改颜色、字体等样式，编辑 `assets/css/style.css`：

```css
:root {
  --primary-color: #165DFF;      /* 主色调 */
  --secondary-color: #36CFC9;    /* 辅助色 */
  --accent-color: #FF7D00;        /* 强调色 */
}
```

## 项目结构

```
ai-coding-graduation-card/
├── index.html                    # 唯一入口页面
├── assets/
│   ├── css/
│   │   └── style.css            # 全局样式
│   ├── js/
│   │   ├── config.js            # 所有展示数据配置
│   │   └── main.js              # 全局交互逻辑
│   └── images/                  # 图片资源目录
└── README.md                    # 部署说明
```

## 功能模块

### 1. 封面模块
- 渐变背景设计
- 标题、副标题、个人介绍
- 页面加载渐显动画

### 2. 导航模块
- 固定顶部导航
- 移动端汉堡菜单
- 平滑滚动和当前模块高亮

### 3. 项目路演
- 痛点场景展示
- MVP产品介绍
- 产品挖掘思路

### 4. 学习复盘
- 学习心得与收获
- 关键词自动高亮
- 工具学习路径参考

### 5. 产品成果
- 4款产品卡片展示
- 响应式网格布局
- 产品链接跳转

### 6. 底部模块
- 部署说明
- 技术栈展示
- 联系方式

## 浏览器兼容性

- Chrome（推荐）
- Firefox
- Safari
- Edge
- 移动端浏览器（iOS Safari, Chrome Mobile）

## 性能优化

- CDN加速资源加载
- CSS动画优化
- 无冗余依赖
- 移动端触摸优化

## 常见问题

### Q: 如何修改产品链接？
A: 在 `assets/js/config.js` 的 `products` 数组中修改对应产品的 `links` 数组。

### Q: 如何添加更多产品？
A: 在 `config.js` 的 `products` 数组中添加新的产品对象，遵循现有格式。

### Q: 如何修改网站颜色主题？
A: 在 `assets/css/style.css` 的 `:root` 变量中修改颜色值。

### Q: Vercel部署后无法访问？
A: 检查GitHub仓库是否为公开状态，或在Vercel项目设置中查看部署日志。

## 许可证

MIT License

## 作者

AI编程课程学员

---

如有问题或建议，欢迎联系或提交Issue。