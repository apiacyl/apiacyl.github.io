
# 📰 Guía para Agregar Noticias - SISTEMA AUTOMÁTICO

## 🎯 Cómo agregar una nueva noticia

¡Ahora es súper fácil! Para agregar una nueva noticia, simplemente crea un nuevo archivo siguiendo este formato. El sistema las detectará automáticamente, ¡no necesitas tocar ningún código!

**IMPORTANTE**: Los archivos de noticias están en la carpeta `public/data/news/` y permanecen como archivos JSON independientes después del compilado. Esto significa que puedes agregar, modificar o eliminar noticias directamente en el servidor sin necesidad de recompilar la aplicación.

### 📋 Formato del archivo
Nombre del archivo: `card{número}.json` (ejemplo: `card4.json`, `card5.json`, etc.)

### 📝 Plantilla de contenido
```json
{
  "id": [NÚMERO_ÚNICO],
  "title": "[TÍTULO DE LA NOTICIA]",
  "description": "[DESCRIPCIÓN BREVE QUE APARECE EN LA TARJETA]",
  "date": "[FECHA EN FORMATO: DD mes, YYYY]",
  "category": "[CATEGORÍA DE LA NOTICIA]",
  "content": "[CONTENIDO COMPLETO EN HTML - OPCIONAL]"
}
```

### ✅ Ejemplo completo
```json
{
  "id": 8,
  "title": "Nueva Convocatoria de Formación Técnica",
  "description": "Cursos especializados en ciberseguridad y desarrollo de aplicaciones para personal informático.",
  "date": "15 junio, 2025",
  "category": "Formación",
  "content": "<p>La asociación ha organizado una nueva convocatoria de cursos de formación técnica dirigidos al personal informático de la administración.<br><br>Los cursos incluyen:<br>• Ciberseguridad avanzada<br>• Desarrollo de aplicaciones web<br>• Administración de sistemas<br><br>Las inscripciones estarán abiertas hasta el 30 de junio.</p>"
}
```

## 📊 Categorías sugeridas
- **Oposiciones** - Para convocatorias y noticias sobre oposiciones
- **Formación** - Para cursos, seminarios y eventos formativos
- **Convenios** - Para negociaciones y actualizaciones de convenios
- **Eventos** - Para reuniones, asambleas y eventos de la asociación
- **Reunión** - Para resúmenes de reuniones con autoridades
- **Asamblea** - Para asambleas generales de la asociación
- **Noticias** - Para noticias generales

## 🔢 Reglas importantes

### ✨ ID único
- Cada noticia debe tener un ID único
- Usa números consecutivos (1, 2, 3, 4, 5...)
- El ID más alto aparecerá primero (las noticias más recientes)

### 📅 Formato de fecha
- Usa el formato español: "15 junio, 2025"
- Ejemplos válidos:
  - "20 mayo, 2025"
  - "3 diciembre, 2024"
  - "1 enero, 2026"

### 📖 Contenido HTML (opcional)
- Puedes usar HTML básico en el campo `content`
- Etiquetas permitidas: `<p>`, `<br>`, `<strong>`, `<em>`, `<ul>`, `<li>`, `<a>`, `<b>`
- Para enlaces, usa: `<a href="/ruta/archivo.pdf"><b>Texto del enlace</b></a>`
- Si no incluyes `content`, solo se mostrará la descripción

## 🚀 Comportamiento automático

### 🏠 Página principal
- Se muestran automáticamente las **3 noticias más recientes**
- Se ordenan por ID de mayor a menor

### 📄 Página "Ver todas las novedades"
- Se muestran **6 noticias por página**
- Navegación automática entre páginas
- Se ordenan por ID de mayor a menor

## 💡 Consejos

1. **Títulos atractivos**: Usa títulos claros y concisos
2. **Descripciones informativas**: La descripción debe resumir la noticia en 1-2 líneas
3. **Fechas actuales**: Usa fechas reales para mantener la credibilidad
4. **Categorías consistentes**: Usa las categorías sugeridas para mantener orden
5. **Contenido estructurado**: Si usas HTML, estructura bien el contenido con párrafos y listas

## 📁 Ubicación de archivos
Todos los archivos de noticias deben estar en: `public/data/news/`

**VENTAJA**: Al estar en la carpeta `public/`, estos archivos se copian tal cual al build final. Esto significa que puedes modificar, agregar o eliminar noticias directamente en el servidor sin necesidad de recompilar la aplicación.

## 🎉 ¡Ya no necesitas tocar código ni recompilar!
Con este nuevo sistema automático:
- ✅ Solo creas el archivo JSON en `public/data/news/`
- ✅ El sistema lo detecta automáticamente
- ✅ Aparece en la página principal y en la lista completa
- ✅ La paginación se ajusta automáticamente
- ✅ No necesitas modificar ningún archivo de código
- ✅ **Puedes editar los archivos directamente en el servidor después del compilado**

¡Listo! Con estos pasos puedes agregar todas las noticias que necesites. El sistema las detectará automáticamente. 🎉
