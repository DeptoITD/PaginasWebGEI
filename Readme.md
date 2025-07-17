# 🌐 PaginasWebGEI

Repositorio que centraliza las páginas web del Grupo Empresarial INDESCO, incluyendo sitios estáticos como WebGEI y WebIndesco. 

## 📁 Estructura del Repositorio

```
PaginasWebGEI/
│
├── README.md                   # Este archivo
├── .github/workflows/deploy.yml  # Configuración de despliegue automático (CI/CD)
├── docs/                      # Dominio personalizado para GitHub Pages (CNAME)
│   └── CNAME
├── WebGEI/                    # Sitio Web principal de GEI
│   ├── CNAME                  # Redirección específica para WebGEI
│   ├── index.html             # Página de inicio
│   ├── style.css              # Estilos generales
│   ├── .private/              # Archivos protegidos
│   ├── bootstrap/             # Archivos de Bootstrap (JS/CSS)
│   ├── controles/             # Scripts JS personalizados
│   └── Imgs/                  # Imágenes y recursos gráficos
└── WebIndesco/
    └── wix.html               # Página independiente (posible migración desde Wix)
```

## 🚀 Despliegue

El proyecto está configurado para desplegarse automáticamente mediante GitHub Actions (`deploy.yml`) y se vincula con dominios personalizados a través de archivos `CNAME`.

- **WebGEI** se publica como sitio principal.
- **WebIndesco** puede usarse como landing page secundaria o independiente.

## 🛠️ Tecnologías Usadas

- HTML5 / CSS3
- JavaScript Vanilla
- Bootstrap 5
- GitHub Pages
- GitHub Actions (CI/CD)
- Hosting con dominio personalizado (`grupoindesco.com`)

## 📌 Archivos Clave

- `WebGEI/index.html`: Página principal del sitio GEI.
- `WebGEI/controles/*.js`: Scripts para interacción, cookies, validaciones, políticas, etc.
- `docs/CNAME`: Define el dominio personalizado para GitHub Pages.

## 👥 Autores

Este proyecto ha sido desarrollado y gestionado por el equipo IT+D del Grupo Empresarial INDESCO.

- 📡 Departamento IT+D

## 📄 Licencia

Repositorio de uso interno. El código fuente está protegido y no se encuentra bajo una licencia de software libre. No redistribuir sin autorización.
