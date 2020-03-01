warning: LF will be replaced by CRLF in src/App.js.
The file will have its original line endings in your working directory
[1mdiff --git a/src/App.js b/src/App.js[m
[1mindex ce9cbd2..cfff671 100644[m
[1m--- a/src/App.js[m
[1m+++ b/src/App.js[m
[36m@@ -23,4 +23,8 @@[m [mfunction App() {[m
   );[m
 }[m
 [m
[32m+[m[32mfor (let i = 0; i < 10; i++) {[m
[32m+[m[32m    console.log("Numero "+i);[m
[32m+[m[32m}[m
[32m+[m
 export default App;[m
