# 🚀 Vercel部署详细指南

## 📋 前置条件
- ✅ GitHub仓库已创建并上传代码
- ✅ 拥有Vercel账号（如果没有，需要注册）

---

## 第一步：访问并登录Vercel

### 1.1 打开Vercel网站
- 访问：https://vercel.com

### 1.2 登录或注册账号
- 如果已有账号：点击 `Log In`
- 如果没有账号：点击 `Sign Up`

### 1.3 推荐使用GitHub登录
1. 点击 `Continue with GitHub`
2. 授权Vercel访问你的GitHub账号
3. 授予仓库访问权限（选择 `All repositories` 或特定仓库）

---

## 第二步：导入项目到Vercel

### 2.1 创建新项目
1. 登录后，点击右上角的 `Add New` 按钮
2. 选择 `Project`

### 2.2 选择GitHub仓库
1. 在 "Import Git Repository" 页面
2. 找到 `ai-coding-graduation-card` 仓库
3. 点击右侧的 `Import` 按钮

---

## 第三步：配置项目设置

### 3.1 基本配置

**Project Name**（项目名称）
- 默认：`ai-coding-graduation-card`
- 可以自定义（建议保持默认）

**Framework Preset**（框架预设）
- 选择：`Other`（这是纯静态HTML项目）

**Root Directory**（根目录）
- 留空（默认 `./`）
- 因为index.html在根目录下

### 3.2 构建设置

**Build Command**（构建命令）
- 留空（不需要构建步骤）

**Output Directory**（输出目录）
- 留空（默认 `.`）
- 因为这是静态HTML文件

### 3.3 环境变量
- 无需添加任何环境变量
- 跳过此步骤

### 3.4 其他设置
**Install Command**（安装命令）
- 留空

**Node.js Version**
- 不需要选择（这是纯静态项目）

---

## 第四步：开始部署

### 4.1 确认配置
检查所有设置是否正确：
- ✅ Project Name: `ai-coding-graduation-card`
- ✅ Framework: `Other`
- ✅ Root Directory: `./`
- ✅ Build Command: (空)
- ✅ Output Directory: `.`

### 4.2 点击部署
1. 滚动到页面底部
2. 点击绿色按钮 `Deploy`

### 4.3 等待部署完成
- 部署过程通常需要1-3分钟
- 你会看到部署进度：
  - `Building...`
  - `Uploading...`
  - `Done`

### 4.4 部署成功
当看到 "Congratulations!" 页面时，说明部署成功！

---

## 第五步：访问你的网站

### 5.1 获取部署地址
部署成功后，你会获得：

**默认域名**：
```
https://ai-coding-graduation-card-[随机字符].vercel.app
```

**示例**：
```
https://ai-coding-graduation-card-juben-geng.vercel.app
```

### 5.2 访问网站
1. 点击页面上的 `Visit` 按钮
2. 或直接复制URL在浏览器中打开

---

## 第六步：域名管理（可选）

### 6.1 修改项目域名
1. 在项目页面，点击 `Settings` 标签
2. 选择 `Domains`
3. 可以：
   - 修改默认域名
   - 添加自定义域名

### 6.2 设置自定义域名
1. 点击 `Add` 按钮
2. 输入你的域名（如：`yourname.com`）
3. 按照提示配置DNS记录

---

## 🔄 后续更新部署

### 自动部署（推荐）
当你推送代码更新到GitHub时：
1. 修改本地代码
2. 提交并推送到GitHub：
   ```bash
   git add .
   git commit -m "更新内容描述"
   git push
   ```
3. Vercel会自动检测并重新部署

### 手动重新部署
1. 在Vercel项目页面，点击 `Deployments` 标签
2. 找到最新的部署记录
3. 点击右侧的 `...` 菜单
4. 选择 `Redeploy`

---

## 🎯 验证部署成功

访问你的Vercel域名，检查以下功能：

### 功能检查清单
- [ ] 页面正常加载
- [ ] 标题、副标题显示正确
- [ ] 导航栏固定在顶部
- [ ] 平滑滚动功能正常
- [ ] 移动端汉堡菜单可以展开
- [ ] 项目路演内容完整显示
- [ ] 学习复盘内容正常
- [ ] 4款产品卡片全部显示
- [ ] 产品链接可以正常点击
- [ ] 响应式布局在不同设备上正常

### 设备测试
- 📱 手机（375px-414px）
- 📱 平板（768px-1199px）
- 💻 电脑（1200px+）

---

## 🐛 常见问题解决

### Q1: 部署失败
**可能原因**：
- GitHub仓库为私有（改为公开）
- 文件路径错误（检查index.html位置）

**解决方案**：
1. 检查部署日志中的错误信息
2. 确认仓库为公开状态
3. 验证文件结构正确

### Q2: 页面样式异常
**可能原因**：
- CDN资源加载失败
- CSS文件路径错误

**解决方案**：
1. 检查浏览器控制台错误
2. 确认Font Awesome CDN可访问
3. 验证CSS文件路径正确

### Q3: 页面404错误
**可能原因**：
- index.html文件缺失
- 文件名大小写错误

**解决方案**：
1. 确认GitHub仓库中有index.html
2. 检查文件名是否为小写的index.html

### Q4: 图片无法显示
**可能原因**：
- 图片路径错误
- 图片文件未上传

**解决方案**：
1. 检查images文件夹是否为空
2. 验证图片路径正确
3. 确认图片文件已上传到GitHub

---

## 📊 部署监控

### 查看部署日志
1. 在项目页面，点击 `Deployments` 标签
2. 点击任意部署记录查看详细日志
3. 可以查看构建过程和错误信息

### 性能监控
1. Vercel提供内置的性能分析
2. 可以查看页面加载速度
3. 监控资源使用情况

---

## 🎉 部署完成！

恭喜！你的AI编程毕业名片H5网站已经成功部署到Vercel。

### 现在你可以：
- 🌐 通过Vercel域名访问你的网站
- 🔗 分享链接给朋友和同事
- 📝 根据需要修改config.js中的内容
- 🔄 推送更新后自动重新部署
- 📊 在Vercel查看访问统计

---

## 📞 获取帮助

如果遇到问题：
1. 查看Vercel官方文档：https://vercel.com/docs
2. 检查项目的README.md
3. 查看部署日志获取错误信息

祝你使用愉快！🚀