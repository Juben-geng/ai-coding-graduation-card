# 🖥️ 本地预览指南

由于发布网址无法打开，你可以先在本地预览网站效果。

---

## 🚀 方法1：直接在浏览器打开（最简单）

### Windows
1. 打开文件资源管理器
2. 导航到：`D:\AI编程开发-02\产品毕业名片\ai-coding-graduation-card`
3. 找到 `index.html` 文件
4. 右键点击 `index.html`
5. 选择"打开方式"
6. 选择浏览器（Chrome、Edge等）

### Mac
1. 打开Finder
2. 导航到项目文件夹
3. 双击 `index.html` 文件

---

## 🚀 方法2：使用Python HTTP服务器

### 步骤1：打开终端
按 `Win + R`，输入 `cmd`，回车

### 步骤2：进入项目目录
```bash
cd D:\AI编程开发-02\产品毕业名片\ai-coding-graduation-card
```

### 步骤3：启动服务器
```bash
python -m http.server 8000
```

### 步骤4：访问网站
在浏览器中打开：
```
http://localhost:8000
```

### 步骤5：停止服务器
在终端中按 `Ctrl + C`

---

## 🚀 方法3：使用Node.js HTTP服务器

### 步骤1：打开终端

### 步骤2：进入项目目录
```bash
cd D:\AI编程开发-02\产品毕业名片\ai-coding-graduation-card
```

### 步骤3：启动服务器
```bash
npx http-server -p 8000
```

### 步骤4：访问网站
在浏览器中打开：
```
http://localhost:8000
```

---

## 🎯 验证本地预览

打开网站后，检查以下功能：

### 基本功能
- [ ] 页面正常加载
- [ ] 显示"番茄哥AI编程毕业名片"
- [ ] 导航栏固定在顶部
- [ ] 可以点击导航项滚动到对应区域

### 名片部分
- [ ] 名片卡片居中显示
- [ ] 个人信息正确显示
- [ ] "探索作品"按钮可以点击

### 内容部分
- [ ] 项目路演内容完整显示
- [ ] 学习复盘内容正常
- [ ] 4款产品卡片全部显示
- [ ] 产品链接可以点击

### 响应式测试
- [ ] 在手机视图下正常显示
- [ ] 汉堡菜单可以打开
- [ ] 平板视图布局正常
- [ ] PC视图布局正常

---

## ⚠️ 常见问题

### Q1：页面空白或样式错乱
**解决方案**：
1. 检查文件路径是否正确
2. 确认 `assets` 文件夹存在
3. 清除浏览器缓存（Ctrl + Shift + Delete）

### Q2：无法启动服务器
**解决方案**：
1. 确认Python已安装：`python --version`
2. 或安装Node.js：访问 nodejs.org 下载安装

### Q3：端口被占用
**解决方案**：
使用其他端口：
```bash
# Python
python -m http.server 8080

# Node.js
npx http-server -p 8080
```
然后访问：http://localhost:8080

### Q4：JavaScript报错
**解决方案**：
1. 按 `F12` 打开浏览器开发者工具
2. 查看 Console 标签的错误信息
3. 确认 config.js 和 main.js 文件存在且无语法错误

---

## 📱 移动端测试

### 使用Chrome DevTools
1. 按 `F12` 打开开发者工具
2. 点击设备图标（Ctrl + Shift + M）
3. 选择设备：iPhone SE、iPad、Desktop
4. 测试不同屏幕尺寸

### 使用真实设备
1. 确保手机和电脑在同一WiFi
2. 查看电脑IP地址：
   ```bash
   ipconfig
   ```
3. 在手机浏览器访问：
   ```
   http://[电脑IP]:8000
   ```

---

## ✅ 预览检查清单

完成本地预览后，请确认：

- [ ] 页面外观符合预期
- [ ] 所有功能正常工作
- [ ] 响应式布局正确
- [ ] 无JavaScript错误
- [ ] 产品链接可点击
- [ ] 准备好上传到GitHub

---

## 🚀 预览成功后的下一步

### 1. 上传到GitHub
按照 `GITHUB-UPLOAD-GUIDE.md` 中的步骤操作

### 2. 部署到Vercel
按照 `VERCEL-DEPLOY.md` 中的步骤操作

### 3. 或使用GitHub Pages
按照 `QUICK-FIX.md` 中GitHub Pages的步骤操作

---

**现在就尝试本地预览，看看网站效果！** 🎉

预览满意后，就可以继续上传和部署了！