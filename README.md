![](https://github.com/Perdomo193/webservice_front/blob/main/static/img/logo_vo.png)

<h2 align="center">Vision Online Prueba Tecnica - Pablo Alejandro Perdomo</h2>

## Dependencias

#### Instalar
`npm install`

#### Iniciar servidor en localhost:3000
`npm run build`

`npm run start`

## Herramientas

Se utilizo el framwork de `Node JS` y `Express` en el desarrollo del Back-end. Se implemento el gestor de bases de datos relacional `SQLite`, y en el desarrollo del servidor se utilizo `Express`.

<p align="center"><a href="#"><img width="450px" height="auto" src="https://github.com/Perdomo193/images/blob/master/page_seven.png" alt="build status"></img></a></p>

## Base de datos

Se tiene una base de datos relacional, como se muestra en la Figura 1. Se gestionan las coordenadas para las diferentes regiones de interes y su tipo. Las coordenadas y centros de masa se identifican como `C_1`, `C_2`, `C_3` y `C_4`. El tipo hace alusión si es una region rectangular, circular, triangular o heptagonal, y se identifica con la variable `shape_id`.

<h3 align="center">Figura 1</h3>

<p align="center"><a href="#"><img width="650px" height="auto" src="https://github.com/Perdomo193/images/blob/master/page_three.png" alt="build status"></img></a></p>

Si se desea migrar la base de datos, utilice el siguiente comando.

`npm run migrate`
