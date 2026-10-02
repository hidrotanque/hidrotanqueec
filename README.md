# Hidrotanque — sitio web

Sitio estático (HTML + CSS + JS), sin build ni dependencias de npm.

```
index.html              ← página (12 KB)
assets/css/styles.css   ← estilos
assets/js/main.js       ← interacciones, gotas de agua, tanque 3D
assets/img/             ← fotos en WebP (480 px y 900 px)
assets/video/           ← hero.mp4 + poster
assets/favicon.svg
```

## Publicar en GitHub Pages
1. Sube el contenido de esta carpeta a la raíz de un repositorio.
2. Settings → Pages → Branch `main` / carpeta `/ (root)` → Save.
3. Tu sitio queda en `https://TU-USUARIO.github.io/TU-REPO/`.

## Probar en tu computador
El tanque 3D y el video necesitan un servidor local (con doble clic en el HTML el 3D usa una imagen de respaldo):

```
python3 -m http.server 8000
```
y abre http://localhost:8000

## Editar
- Teléfono WhatsApp: variable `PH` en `assets/js/main.js`.
- Productos y proyectos: arreglos `P` y `J` en `assets/js/main.js`.
- Color de marca: `--br` en `assets/css/styles.css`.
- La librería three.js (3D) se carga desde cdnjs; fuentes desde Google Fonts.
