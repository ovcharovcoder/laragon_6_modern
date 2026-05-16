# Laragon 6.0 Modern — Quick Start Guide
## PHP 8.5.6 + 8.4.19 + 8.3.30 | Apache 2.4.66 VS17

---

## 📦 Build Components

| Component | Description |
|-----------|-------------|
| ✅ Laragon 6.0 | Clean version, no ads |
| ✅ PHP 8.5.6 | Primary version (default) |
| ✅ PHP 8.4.19 | Additional version |
| ✅ PHP 8.3.30 | Additional version |
| ✅ Apache 2.4.66 VS17 | Full PHP 8.5 support |
| ✅ phpMyAdmin 5.2.3 | Pre-configured, no warnings |
| ✅ SSL | https://localhost ready |
| ✅ Test project | http://localhost/hello/ |

---

## 🚀 Installation

1. **Run `Laragon_6.0_Modern_Setup.exe`** (as Administrator)  
   The installer will automatically ask for admin rights.

2. **Select destination folder**  
   - `C:\Program Files\Laragon` (recommended)  
   - `D:\Laragon`, `E:\Laragon`, or any custom path

3. **Wait for the installation to complete automatically**  
   PHP, Apache, phpMyAdmin, and SSL will be configured

4. **Done** — launch Laragon from the desktop shortcut

---

## 🎯 First Launch

1. Open Laragon from the desktop shortcut **"Laragon"**

2. Right-click the tray icon and set:
   - **Apache** → Version → `httpd-2.4.66-win64-VS17`
   - **PHP** → Version → `php-8.5.6`

3. Click **"Start All"**

4. Open in browser:
   - http://localhost/hello/ — test project
   - http://localhost/phpmyadmin — database manager

---

## 🔄 Switching PHP Versions

Right-click tray icon → **PHP** → **Version** → select version  
Then click **"Start All"** to apply.

**Available versions:**
- PHP 8.5.6 (default)
- PHP 8.4.19
- PHP 8.3.30

> ⚠️ Always use Apache `httpd-2.4.66-win64-VS17`

---

## 🗄️ Database Access

| Setting | Value |
|---------|-------|
| Host | localhost |
| User | root |
| Password | (empty — just press Enter) |
| phpMyAdmin | http://localhost/phpmyadmin |

---

## ➕ Adding More PHP Versions

1. Download ZIP from [windows.php.net/download](https://windows.php.net/download)  
   ⚠️ Select: **Non-Thread-Safe (NTS)**, **x64**, **VS17** (or VS16)

2. Extract to:  
   `(your Laragon folder)\bin\php\php-8.6.x`

3. Restart Laragon — new version appears in **PHP → Version**

---

## 🗑️ Uninstallation

**Method 1 (Recommended):**  
Control Panel → Programs and Features → **Laragon 6.0 Modern** → Uninstall

**Method 2:**  
Run `uninstall.bat` from the Laragon installation folder as Administrator

> The uninstaller will completely remove Laragon and all its components.  
> Optionally create a backup of your sites and databases before removal.

---

## ⚠️ Troubleshooting

### ✗ Port 80 busy
- Stop Skype, Teams, or IIS service
- Or change port: Laragon → Preferences → Apache port

### ✗ PHP not working (white screen)
- Install VC++ Redistributable 2015–2022 (x64)
- Test: `(Laragon folder)\bin\php\php-8.5.6\php.exe -v`
- Check logs: `(Laragon folder)\logs\apache_error.log`

### ✗ phpMyAdmin shows "Forbidden"
- Check that `config.inc.php` exists in:  
  `(Laragon folder)\etc\apps\phpMyAdmin\`
- Restart Apache after any changes

### ✗ HTTPS not working
- Laragon menu → SSL → Create SSL Certificate
- Restart Apache

### ✗ "Windows protected your PC" (SmartScreen)
- Click **"More info"** → **"Run anyway"**
- This is normal for unsigned installers

---

## ⚙️ Installer Parameters (Advanced)

| Parameter | Description |
|-----------|-------------|
| `/VERYSILENT /SUPPRESSMSGBOXES` | Silent installation |
| `/DIR="D:\MyWebServer"` | Specify custom install directory |

**Examples:**
```bash
Laragon_6.0_Modern_Setup.exe /VERYSILENT /SUPPRESSMSGBOXES
Laragon_6.0_Modern_Setup.exe /DIR="D:\MyWebServer"
```
---

## SUPPORT & CONTACTS
- Telegram  :  https://t.me/Ovcharov_Andrii
- GitHub    :  https://github.com/ovcharovcoder/laragon_6_modern
- Email     :  ovcharovcoder@gmail.com
