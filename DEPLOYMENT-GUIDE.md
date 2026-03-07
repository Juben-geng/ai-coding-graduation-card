# 🚀 部署指南：GitHub + Vercel

## 📝 部署步骤概览

1. ✅ Git仓库初始化（已完成）
2. ✅ 项目文件已提交到本地Git（已完成）
3. 🔨 创建GitHub仓库（需要手动操作）
4. 📤 推送代码到GitHub（需要手动操作）
5. 🌐 部署到Vercel（需要手动操作）

---

## 第一步：创建GitHub仓库

### 1.1 访问GitHub
- 打开浏览器访问：https://github.com
- 使用你的GitHub账号登录

### 1.2 创建新仓库
1. 点击右上角的 `+` 按钮
2. 选择 `New repository`
3. 填写仓库信息：
   - **Repository name**：`ai-coding-graduation-card`
   - **Description**：`AI编程课程毕业名片H5网站`
   - **Public/Private**：选择 `Public`（公开）
   - **重要**：不要勾选 "Initialize this repository with a README"
   - **重要**：不要添加 .gitignore
   - **重要**：不要选择 License

4. 点击 `Create repository` 按钮

### 1.3 复制仓库URL
创建成功后，你会看到类似下面的URL（请复制备用）：
```
https://github.com/你的GitHub用户名/ai-coding-graduation-card.git
```

---

## 第二步：推送代码到GitHub

### 2.1 在终端中执行命令

打开终端，确保在项目目录中，然后执行以下命令：

```bash
# 添加远程仓库（请替换为你的实际仓库地址）
git remote add origin https://github.com/你的GitHub用户名/ai-coding-graduation-card.git

# 推送代码到GitHub
git push -u origin main
```

### 2.2 如果遇到认证问题

如果推送时提示需要认证，有两种解决方案：

**方案A：使用GitHub Token**
1. 访问 GitHub Settings → Developer settings → Personal access tokens
2. 生成新的Token，勾选 `repo` 权限
3. 复制Token
4. 推送时输入用户名，密码处粘贴Token

**方案B：使用SSH（推荐）**
```bash
# 1. 生成SSH密钥（如果还没有）
ssh-keygen -t rsa -b 4096 -C "你的邮箱@example.com"

# 2. 启动SSH agent
eval "$(ssh-agent -s)"

# 3. 添加密钥
ssh-add ~/.ssh/id_rsa

# 4. 复制公钥内容
cat ~/.ssh/id_rsa.pub

# 5. 在GitHub添加SSH密钥：
#    GitHub Settings → SSH and GPG keys → New SSH key
#    粘贴公钥内容并保存

# 6. 切换远程仓库为SSH
git remote remove origin
git remote add origin git@github.com:你的GitHub用户名/ai-coding-graduation-card.git

# 7. 再次推送
git push -u origin main
```

---

## 第三步：部署到Vercel

### 3.1 准备Vercel账号
1. 访问：https://vercel.com
2. 点击 `Sign Up` 或 `Log In`
3. 选择使用GitHub账号登录（推荐）

### 3.2 导入项目
1. 登录后，点击 `Add New` → `Project`
2. 在 "Import Git Repository" 部分找到 `ai-coding-graduation-card`
3. 点击 `Import` 按钮

### 3.3 配置部署设置
在项目配置页面：

**Framework Preset**：
- 选择 `Other`（因为这是纯静态HTML项目）

**Root Directory**：
- 留空（默认 `./`）

**Build and Output Settings**：
- **Build Command**：留空
- **Output Directory**：留空（默认 `.`）

**Environment Variables**：
- 无需添加环境变量

### 3.4 开始部署
1. 点击 `Deploy` 按钮
2. Vercel会自动构建和部署项目
3. 等待1-2分钟，看到 "Congratulations!" 页面即表示部署成功

### 3.5 获取部署地址
部署成功后，你会获得：
- **默认域名**：`https://ai-coding-graduation-card-你的用户名.vercel.app`
- **部署日志**：可以查看部署过程和错误信息

---

## 第四步：自定义域名（可选）

### 4.1 在Vercel中添加自定义域名
1. 进入项目设置：`Settings` → `Domains`
2. 点击 `Add` 按钮
3. 输入你的域名（如：`yourname.com`）
4. 按照提示配置DNS记录

### 4.2 配置DNS记录
在你的域名服务商处添加以下记录：
```
类型：CNAME
主机记录：@ 或 www
记录值：cname.vercel-dns.com
TTL：600
```

---

## 🔄 后续更新部署

### 更新代码后重新部署

**方式一：自动部署（推荐）**
1. 修改本地代码
2. 提交到本地Git：
   ```bash
   git add .
   git commit -m "更新描述"
   ```
3. 推送到GitHub：
   ```bash
   git push
   ```
4. Vercel会自动检测到推送并重新部署

**方式二：手动触发部署**
1. 在Vercel项目页面点击 `Deployments`
2. 找到最新的部署，点击右侧的 `...` 菜单
3. 选择 `Redeploy`

---

## 🎯 验证部署成功

部署完成后，访问你的Vercel域名，检查：

### 功能验证清单
- [ ] 页面正常加载
- [ ] 导航栏固定显示
- [ ] 平滑滚动功能正常
- [ ] 产品链接可以正常点击
- [ ] 移动端适配正常
- [ ] 所有4款产品卡片显示完整
- [ ] 学习复盘内容显示正常

### 测试不同设备
- 📱 手机（375px-414px）
- 📱 平板（768px-1199px）
- 💻 电脑（1200px+）

---

## 🐛 常见问题解决

### Q1: 推送时提示 "Permission denied"
**解决方案**：检查GitHub仓库权限，确保你有推送权限

### Q2: Vercel部署失败
**解决方案**：
1. 检查Vercel的部署日志
2. 确认GitHub仓库是公开的
3. 确认文件结构正确

### Q3: 页面样式异常
**解决方案**：
1. 检查CDN资源是否正常加载（Font Awesome）
2. 检查CSS文件路径是否正确
3. 清除浏览器缓存重新加载

### Q4: 图片无法显示
**解决方案**：
1. 确认图片已上传到GitHub
2. 检查图片路径是否正确
3. 确认图片文件名大小写一致

---

## 📞 获取帮助

如果遇到问题，可以：
1. 查看Vercel的官方文档：https://vercel.com/docs
2. 查看GitHub的官方文档：https://docs.github.com
3. 在项目中查看README.md获取更多信息

---

## 🎉 部署完成！

一旦部署成功，你就可以：
- 🌐 通过Vercel域名访问你的毕业名片网站
- 🔗 分享链接给朋友和同事
- 📝 根据需要修改 `config.js` 中的内容
- 🔄 推送更新后自动重新部署

祝你的AI编程毕业名片网站运行顺利！ 🚀