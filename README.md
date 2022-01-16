# Instrucciones de instalación

Primero debe descargar el proyecto, bien sea, por clonación y descarga normal. Una vez hayas descargado el proyecto debe acceder a él mediante la siguiente línea:

```bash
cd tienda-tatiana
```

Y luego de eso, escribir las siguientes líneas:

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

Acá tenemos la siguiente tabla de comandos que puede utilizar para correr el proyecto en función del contexto elegido:

| **Comando**                                    | **¿Qué hace?**                                                                                        |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `npm install`                                  | Instala las dependencias necesarias del proyecto. Esto se hace una vez después de copiar el proyecto. |
| `npm install --save rollup-plugin-scss@3 sass` | Instala las extensiones que ayudará a transpilar código `SCSS` a `CSS`.                               |
| `npm run dev`                                  | Permite correr el proyecto mientras desarrolla sobre él.                                              |
| `npm run start`                                | Permite correr solamente el proyecto.                                                                 |
| `npm run build`                                | Prepara el proyecto para entornos de producción.                                                      |
