# 🔄 手动上传到GitHub指南

由于网络连接问题，你可以使用手动上传的方式将项目上传到GitHub。

## 方法一：直接在GitHub网页上传文件（推荐）

### 步骤1：访问GitHub仓库
- 打开浏览器访问：https://github.com/Juben-geng/ai-coding-graduation-card

### 步骤2：上传文件
1. 点击仓库页面右上角的 `Add file` → `Upload files`
2. 将以下文件从本地上传到GitHub：

**必需文件列表：**
- `index.html`
- `README.md`
- `assets/css/style.css`
- `assets/js/config.js`
- `assets/js/main.js`

**可选文件：**
- `.gitignore`
- `DEPLOYMENT-GUIDE.md`
- `deploy-commands.txt`

### 步骤3：提交文件
1. 在文件上传完成后，滚动到页面底部
2. 在 "Commit changes" 部分：
   - **Commit message**：`初始提交：AI编程毕业名片H5网站`
   - **Extended description**：（可选，可以留空）
3. 点击绿色按钮 `Commit changes`

---

## 方法二：使用GitHub Desktop（图形化工具）

### 步骤1：安装GitHub Desktop
1. 访问：https://desktop.github.com/
2. 下载并安装GitHub Desktop

### 步骤2：克隆仓库
1. 打开GitHub Desktop
2. 点击 `File` → `Clone Repository`
3. 在URL栏输入：`https://github.com/Juben-geng/ai-coding-graduation-card.git`
4. 选择本地路径，点击 `Clone`

### 步骤3：复制文件
1. 在文件资源管理器中打开克隆的仓库文件夹
2. 将我们创建的所有文件复制到这个文件夹中

### 步骤4：提交和推送
1. 在GitHub Desktop中，你会看到所有新文件
2. 在左下角输入提交信息：`初始提交：AI编程毕业名片H5网站`
3. 点击 `Commit to main`
4. 点击右上角的 `Push origin` 按钮

---

## 方法三：修复网络连接后使用Git命令

### 检查网络连接
```bash
# 测试GitHub连接
ping github.com

# 或者测试HTTPS连接
curl -I https://github.com
```

### 配置Git代理（如果需要）
```bash
# 如果你使用代理，配置Git使用代理
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890

# 取消代理配置
git config --global --unset http.proxy
git config --global --unset https.proxy
```

### 重新尝试推送
```bash
# 确认远程仓库配置
git remote -v

# 如果需要，重新添加远程仓库
git remote remove origin
git remote add origin https://github.com/Juben-geng/ai-coding-graduation-card.git

# 推送代码
git push -u origin main
```

---

## 🎯 推荐使用方法一（网页上传）

**优点：**
- 不需要安装额外软件
- 不受网络配置影响
- 操作简单直观
- 适合小规模文件上传

**缺点：**
- 一次只能上传有限数量的文件
- 需要逐个或批量选择文件

---

## 📝 验证上传成功

上传完成后，访问 https://github.com/Juben-geng/ai-coding-graduation-card 确认：

- [ ] 所有必需文件都已显示
- [ ] 文件大小正常
- [ ] 文件内容可以正常查看
- [ ] README.md显示正确

---

## 🚀 下一步：部署到Vercel

文件成功上传到GitHub后，就可以继续部署到Vercel了：

1. 访问 https://vercel.com 并登录
2. 点击 `Add New` → `Project`
3. 选择 `ai-coding-graduation-card` 仓库
4. 点击 `Import` → `Deploy`

---

## 💡 小贴士

- 如果上传过程中遇到问题，可以分批上传文件
- 上传大文件时，建议使用GitHub Desktop或Git命令
- 记住保存好你的GitHub账号密码或使用Personal Access Token

选择最适合你的方法，祝你上传顺利！ 🚀