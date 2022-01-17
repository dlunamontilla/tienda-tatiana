# Instrucciones de instalación

Primero debe descargar el proyecto, bien sea, por clonación o descarga normal. Una vez hayas descargado el proyecto debe acceder a él mediante la siguiente línea:

```bash
cd tienda-tatiana
```

Y luego de eso, escribir en la terminal:

```bash
npm install
npm install --save rollup-plugin-scss@3 sass
```

En el caso anterior, se utilizó `npm install --save rollup-plugin-scss@3 sass` para instalar las dependencias que transpilará código **SCSS** a **CSS**.

<br />

---

<br />

Si va a correr el proyecto mientras desarrolla escriba:

```bash
npm run dev
```

Si lo va a correr solamente, es decir, no va a modificar el proyecto, entonces, escriba:

```bash
npm run start
```

Si quiere preparar el proyecto para que esté listo en producción, escriba:

```bash
npm run build
```

El proyecto fue construido en **Svelte**, pero utiliza una parte nativa de JavaScript. También se utilizó **SASS**

---

Acá se tiene la siguiente tabla con comandos que puede utilizar en función del contexto elegido:

| **Comando**                                    | **¿Qué hace?**                                                                                        |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `npm install`                                  | Instala las dependencias necesarias del proyecto. Esto se hace una vez después de copiar el proyecto. |
| `npm install --save rollup-plugin-scss@3 sass` | Instala las extensiones que ayudará a transpilar código `SCSS` a `CSS`.                               |
| `npm run dev`                                  | Permite correr el proyecto mientras desarrolla sobre él.                                              |
| `npm run start`                                | Permite correr solamente el proyecto.                                                                 |
| `npm run build`                                | Prepara el proyecto para entornos de producción.                                                      |

## ¿Cómo ver la ruta del repositorio?

Para visualizar la ruta del repositorio en el que se encuentra almacenado este proyecto debes escribir la siguiente línea:

```bash
git remote -v
```

Y el resultado devuelto sería algo equivalente o aproximado a esto:

```ǹone
origin  git@github.com:dlunamontilla/tienda-tatiana.git (fetch)
origin  git@github.com:dlunamontilla/tienda-tatiana.git (push)
```

## Almacenamiento de datos

En la carpeta `/public` debe crear un directorio denominado `data`:

```bash
cd public
mkdir data
```

Y luego, crear en el directorio `data` un archivo denominado `data.json`, el cual tendrá el siguiente texto a continuación:

```json
{
    "products": [],

    "locations": [
        { "id": 1, "location": "Colocar aquí dirección de envío" },
        { "id": 2, "location": "Colocar aquí dirección de envío" },
        { "id": 3, "location": "Colocar aquí dirección de envío" }
    ]
}
```

Una vez haya hecho lo antes mencionado, escriba:

```bash
npm run dev
```

Y asegúrese de abrir la siguiente ruta:

```bash
http://localhost:3000/
```

Abra la página en la ruta mencionada anteriormente.
