================================================================
                LARAGON 6.0 MODERN
           PHP 8.5.6 + 8.4.19 + 8.3.30
              Apache 2.4.66 VS17
================================================================

                    ⚙️ BUILD COMPONENTS ⚙️

┌─────────────────────────────────────────────────────────────┐
│  ✅ Laragon 6.0 (no ads, clean version)                     │
│  ✅ PHP 8.5.6 (STABLE, primary version)                     │
│  ✅ PHP 8.4.19                                              │
│  ✅ PHP 8.3.30                                              │
│  ✅ Apache 2.4.66 VS17 (supports PHP 8.5)                   │
│  ✅ phpMyAdmin 5.2.3 (pre-configured, no warnings)          │
│  ✅ SSL configuration (https://localhost)                   │
│  ✅ Test project "hello" (http://localhost/hello/)          │
└─────────────────────────────────────────────────────────────┘


                    📥 INSTALLATION 📥

1. 🚨 RUN install.bat AS ADMINISTRATOR!
   (Right-click → Run as Administrator)

2. 💾 Select the installation drive:
   • C:\laragon (recommended)
   • D:\laragon, E:\laragon, etc.

3. ⏳ Wait for the script to finish (it will copy all components)

4. 🎉 Done!


                ⚡ AFTER INSTALLATION ⚡

1. 🚀 Launch Laragon from the desktop shortcut "Laragon 6.0 Modern"

2. 🖱️ In the system tray, right-click the Laragon icon:
   • Apache → Version → httpd-2.4.66-win64-VS17
   • PHP → Version → php-8.5.6

3. Click "Start All" (or right-click → Start All)

4. 🌐 Open your browser and go to:
   → http://localhost/hello/ (test project)
   → http://localhost/phpmyadmin (database management)


            ⚙️ SWITCHING PHP VERSIONS ⚙️

Laragon allows you to switch between installed PHP versions with one click:

1. Right-click the Laragon icon in the system tray
2. PHP → Version → choose php-8.5.6, php-8.4.19, or php-8.3.30
3. Restart Laragon (or click "Start All" again)

► Installed PHP versions:
   • PHP 8.5.6 (default)
   • PHP 8.4.19
   • PHP 8.3.30

► Apache version to use:
   • Apache → Version → httpd-2.4.66-win64-VS17 (must be selected)


                🗄️ DATABASE ACCESS 🗄️

┌─────────────────────────────────────────────────────────────┐
│  🔐 User: root                                               │
│  🔑 Password: (empty, just press Enter)                     │
│  🌐 phpMyAdmin: http://localhost/phpmyadmin                 │
└─────────────────────────────────────────────────────────────┘


                📦 ADDING MORE PHP VERSIONS 📦

To add another PHP version (e.g., PHP 8.6):

1. Download the ZIP archive from https://windows.php.net/download
   ⚠️ MUST be: Non-Thread-Safe (NTS) version!
   ⚠️ Architecture: x64
   ⚠️ VS build: VS17 (or VS16 for older versions)

2. Extract the contents to: D:\laragon\bin\php\php-8.6.x

3. Restart Laragon – the new version will appear in the PHP → Version menu


                🔧 IMPORTANT NOTES 🔧

┌─────────────────────────────────────────────────────────────┐
│  ⚠️  Always run install.bat as Administrator!               │
│  ⚠️  If you have issues, restart your computer              │
│  ⚠️  Use Apache VS17 version – do NOT use the default one   │
│  ⚠️  The test project "hello" is available at /hello/       │
└─────────────────────────────────────────────────────────────┘


                🐛 TROUBLESHOOTING 🐛

❌ Port 80 is busy:
   • Stop Skype, Teams, IIS (World Wide Web Publishing Service)
   • Or change the port in Laragon settings

❌ PHP does not work (white screen):
   • Make sure you have installed VC++ 2015-2022 Redistributable
   • Run: D:\laragon\bin\php\php-8.5.6\php.exe -v
   • Check Apache error logs: D:\laragon\logs\apache_error.log

❌ phpMyAdmin shows "Forbidden":
   • This build includes a pre-configured config.inc.php
   • If it still appears, check that the file exists in etc\apps\phpMyAdmin\
   • Restart Apache after any changes

❌ HTTPS does not work:
   • In Laragon: Menu → SSL → Create SSL Certificate
   • Restart Apache


                🗑️ UNINSTALLATION 🗑️

1. Run uninstall.bat as Administrator
2. Select the drive where Laragon is installed
3. Optionally create a backup
4. Confirm removal


                📞 CONTACT & SUPPORT 📞

• Telegram: https://t.me/Ovcharov_Andrii
• GitHub: github.com/laragon-modern
• Email: ovcharovcoder@gmail.com


================================================================
              © 2026 Laragon 6.0 Modern Build
                       Andrii Ovcharov
================================================================
