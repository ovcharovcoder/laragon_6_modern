# 🐘 Laragon 6.0 Modern

**Portable Laragon 6.0 build with PHP 8.5.6, Apache 2.4.66 VS17, phpMyAdmin, and a ready-to-use test project.**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PHP](https://img.shields.io/badge/PHP-8.5.6-777BB4?logo=php&logoColor=white)](https://php.net)
[![Apache](https://img.shields.io/badge/Apache-2.4.66-D22128?logo=apache&logoColor=white)](https://httpd.apache.org)
[![Platform](https://img.shields.io/badge/platform-Windows-0078D6?logo=windows&logoColor=white)](https://microsoft.com/windows)

---

## 📦 Build Components

| Component | Version | Notes |
|-----------|---------|-------|
| **Laragon** | 6.0 | Clean version, no ads |
| **PHP** | 8.5.6 | Primary version |
| **PHP** | 8.4.19 | Additional |
| **PHP** | 8.3.30 | Additional |
| **Apache** | 2.4.66 VS17 | PHP 8.5 support |
| **phpMyAdmin** | 5.2.3 | Pre-configured, no warnings |
| **SSL** | - | https://localhost |
| **Test project** | - | http://localhost/hello/ |

---

## 🚀 Quick Installation

1. **Download** the latest release from [Releases](https://github.com/yourusername/laragon-modern/releases)
2. **Extract** the archive to any folder
3. **Run** `install.bat` **as Administrator** (right-click → Run as Administrator)
4. **Select** the installation drive (C:\, D:\, E:\, etc.)
5. **Done!** The `Laragon 6.0 Modern` shortcut will appear on your desktop

---

## ⚙️ Post-Installation Setup

1. Launch Laragon from the desktop shortcut
2. In the system tray, right-click the Laragon icon and select:
   - **Apache** → **Version** → `httpd-2.4.66-win64-VS17`
   - **PHP** → **Version** → `php-8.5.6`
3. Click **Start All**

---

## 🌐 Testing Your Installation

| URL | Purpose |
|-----|---------|
| `http://localhost/hello/` | Test project |
| `http://localhost/phpmyadmin` | Database management |
| `https://localhost` | SSL certificate |

**Database access:**
- Username: `root`
- Password: *(leave empty)*

---

## 🔄 Switching PHP Versions

Laragon allows you to switch between installed PHP versions with one click:

1. Right-click the Laragon icon in the system tray
2. **PHP** → **Version** → choose `php-8.5.6`, `php-8.4.19`, or `php-8.3.30`
3. Restart Laragon (or click "Start All" again)

---

## 📦 Adding More PHP Versions

To add another PHP version (e.g., PHP 8.6):

1. Download the ZIP archive from [windows.php.net/download](https://windows.php.net/download)
   - ⚠️ **Must be:** Non-Thread-Safe (NTS) version!
   - ⚠️ **Architecture:** x64
   - ⚠️ **VS build:** VS17 (or VS16 for older versions)

2. Extract to: `D:\laragon\bin\php\php-8.6.x`

3. Restart Laragon – the new version will appear in the PHP → Version menu

---

## 🗑️ Uninstallation

1. Run `uninstall.bat` as Administrator
2. Select the drive where Laragon is installed
3. Optionally create a backup
4. Confirm removal

---

## 🐛 Troubleshooting

### ❌ Port 80 is busy
- Stop Skype, Teams, or IIS (World Wide Web Publishing Service)
- Or change the port in Laragon settings

### ❌ PHP doesn't work (white screen)
- Make sure you have installed [VC++ 2015-2022 Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe)
- Run: `D:\laragon\bin\php\php-8.5.6\php.exe -v`
- Check Apache error logs: `D:\laragon\logs\apache_error.log`

### ❌ phpMyAdmin shows "Forbidden"
- This build includes a pre-configured `config.inc.php`
- If it still appears, check that the file exists in `etc\apps\phpMyAdmin\`
- Restart Apache after any changes

### ❌ HTTPS doesn't work
- In Laragon: **Menu** → **SSL** → **Create SSL Certificate**
- Restart Apache

---

## 🔧 Important Notes

- ⚠️ Always run `install.bat` as Administrator
- ⚠️ If you have issues, restart your computer
- ⚠️ Use Apache VS17 version – do NOT use the default one
- ⚠️ The test project "hello" is available at `/hello/`

---

## 📞 Contact & Support

- **Telegram:** [@Ovcharov_Andrii](https://t.me/Ovcharov_Andrii)
- **GitHub:** [github.com/laragon_6_modern](https://github.com/ovcharovcoder/laragon_6_modern)
- **Email:** ovcharovcoder@gmail.com

---

## 📄 License

This project is provided as-is for educational and development purposes.  
Laragon, Apache, PHP, and phpMyAdmin are property of their respective owners.

---

**© 2026 Laragon 6.0 Modern Build — Andrii Ovcharov**
