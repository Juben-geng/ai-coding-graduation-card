# 🔧 故障排除指南

## 问题：发布网址无法打开

### 可能的原因和解决方案

---

## 1️⃣ GitHub仓库无法打开

### 症状
- 访问 `https://github.com/Juben-geng/ai-coding-graduation-card` 显示404错误
- 页面提示"Repository not found"

### 原因
- 仓库不存在
- 仓库名称错误
- 权限不足
- 网络连接问题

### 解决方案

#### 方案A：检查仓库是否存在
1. 访问你的GitHub个人主页：https://github.com/Juben-geng
2. 查看Repositories列表
3. 确认是否有 `ai-coding-graduation-card` 仓库

#### 方案B：重新创建仓库
如果仓库不存在，请重新创建：

1. 访问 https://github.com/new
2. 填写仓库信息：
   - **Repository name**: `ai-coding-graduation-card`
   - **Description**: `番茄哥AI编程毕业名片`
   - **Public**: ✅ 勾选（公开）
   - **不要勾选**: Initialize with README、Add .gitignore、Choose a license
3. 点击 `Create repository`

#### 方案C：检查网络连接
```bash
# 测试GitHub连接
ping github.com

# 或在浏览器中测试
# 访问 https://github.com
```

---

## 2️⃣ Vercel部署后网址无法打开

### 症状
- 部署成功但访问Vercel网址显示错误
- 页面显示"404: Page not found"

### 原因
- 部署配置错误
- GitHub仓库为空
- 文件路径不正确
- 构建设置问题

### 解决方案

#### 方案A：检查GitHub仓库内容
1. 确认GitHub仓库中是否有 `index.html` 文件
2. 确认文件在仓库根目录，不在子文件夹中

#### 方案B：重新部署Vercel
1. 访问 Vercel Dashboard
2. 找到 `ai-coding-graduation-card` 项目
3. 点击 `Deployments` 标签
4. 找到最新的部署记录
5. 点击右侧的 `...` 菜单
6. 选择 `Redeploy`

#### 方案C：检查Vercel配置
在Vercel项目设置中检查：
- **Framework Preset**: `Other`
- **Root Directory**: `./`（留空）
- **Build Command**: 留空
- **Output Directory**: `.`（留空）

---

## 3️⃣ 本地预览问题

### 症状
- 直接打开 `index.html` 显示空白或错误
- 样式或脚本未加载

### 原因
- 文件路径错误
- 浏览器缓存问题
- 文件编码问题

### 解决方案

#### 方案A：检查文件路径
确保以下文件路径正确：
```html
<!-- 在index.html中 -->
<link rel="stylesheet" href="./assets/css/style.css">
<script src="./assets/js/config.js"></script>
<script src="./assets/js/main.js"></script>
```

#### 方案B：清除浏览器缓存
1. 按 `Ctrl + Shift + Delete`（Windows）
2. 或按 `Cmd + Shift + Delete`（Mac）
3. 清除缓存和Cookie
4. 重新加载页面

#### 方案C：使用本地服务器
避免直接打开文件，使用本地服务器：

**使用Python**:
```bash
cd ai-coding-graduation-card
python -m http.server 8000
```
然后访问: http://localhost:8000

**使用Node.js**:
```bash
npx http-server -p 8000
```
然后访问: http://localhost:8000

---

## 4️⃣ 文件上传失败

### 症状
- 上传文件到GitHub失败
- 提示错误信息

### 原因
- 文件过大
- 网络不稳定
- 文件名包含特殊字符
- 权限不足

### 解决方案

#### 方案A：分批上传
不要一次上传所有文件，分批上传：
1. 先上传 `index.html`
2. 再上传 `assets/css/style.css`
3. 然后上传 `assets/js/config.js`
4. 最后上传 `assets/js/main.js`

#### 方案B：压缩文件
如果文件过大，可以压缩：
```bash
# 压缩CSS（可选）
# 压缩JS（可选）
```

#### 方案C：使用Git客户端
- GitHub Desktop（图形化界面）
- SourceTree
- GitKraken

---

## 5️⃣ 推送代码到GitHub失败

### 症状
- `git push` 命令失败
- 显示认证错误或网络错误

### 原因
- 网络连接问题
- 认证失败
- 权限不足
- 远程仓库配置错误

### 解决方案

#### 方案A：检查网络
```bash
# 测试网络连接
ping github.com

# 测试HTTPS连接
curl -I https://github.com
```

#### 方案C：使用Personal Access Token
1. 访问 GitHub Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token
4. 勾选 `repo` 权限
5. 生成并复制token
6. 推送时输入用户名，密码处粘贴token

#### 方案D：使用SSH密钥
```bash
# 生成SSH密钥
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# 添加到GitHub
# Settings → SSH and GPG keys → New SSH key

# 切换远程仓库为SSH
git remote set-url origin git@github.com:Juben-geng/ai-coding-graduation-card.git

# 推送
git push -u origin main
```

---

## 📞 获取更多帮助

### GitHub官方文档
- GitHub帮助中心：https://docs.github.com
- GitHub状态页：https://www.githubstatus.com

### Vercel官方文档
- Vercel文档：https://vercel.com/docs
- Vercel支持：https://vercel.com/support

### 常见问题
- GitHub FAQ：https://docs.github.com/get-started/getting-started-with-github/quickstart
- Vercel FAQ：https://vercel.com/docs/concepts/faq

---

## ✅ 快速诊断清单

遇到问题时，请按顺序检查：

### GitHub相关问题
- [ ] 网络连接正常
- [ ] 仓库地址正确
- [ ] 有仓库访问权限
- [ ] 文件名大小写正确
- [ ] 文件编码为UTF-8

### Vercel相关问题
- [ ] GitHub仓库有内容
- [ ] index.html在根目录
- [ ] 构建设置正确
- [ ] 仓库为公开状态

### 本地文件问题
- [ ] 文件路径正确
- [ ] 浏览器已清除缓存
- [ ] 使用本地服务器预览
- [ ] 文件无语法错误

---

## 🚨 紧急方案

如果以上方案都无法解决问题，可以：

### 方案1：使用其他托管平台
- **Netlify**: https://netlify.com
- **GitHub Pages**: 直接使用GitHub的Pages功能
- **Cloudflare Pages**: https://pages.cloudflare.com

### 方案2：寻求帮助
- 在GitHub Issues提问
- 在技术社区发帖求助
- 联系Vercel支持

---

**按照以上步骤逐一排查，大部分问题都可以解决！** 🎯

如果仍然无法解决，请提供具体的错误信息，以便更准确地诊断问题。